#!/usr/bin/env python3
"""Prepare the Photos tab (/fun/) from full-resolution originals.

Drop full-size photos into a folder named "<Season> <Year> Images" under
assets/images/photos/_originals/ (that folder is git-ignored), then run:

    python3 scripts/photo-prep.py

For every semester it writes web-sized JPEGs to assets/images/photos/<slug>/
and filmstrip thumbnails to <slug>/thumbs/, ordered oldest -> newest by the
photo's EXIF capture time, and regenerates _data/photos.yml. Captions already
in _data/photos.yml are carried over -- they are matched on the original
filename, so they survive renumbering when older photos are added later.

Requires Pillow: python3 -m pip install Pillow
"""
import json
import os
import re
import subprocess
import sys
from datetime import datetime

from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PHOTOS = os.path.join(ROOT, "assets", "images", "photos")
ORIGINALS = os.path.join(PHOTOS, "_originals")
DATA = os.path.join(ROOT, "_data", "photos.yml")

FULL_MAX = 1800   # long edge of the displayed image, px
THUMB_MAX = 320   # long edge of the filmstrip thumbnail, px
EXTS = (".jpg", ".jpeg", ".png", ".heic")

SEASONS = {"spring": 0, "summer": 1, "fall": 2, "winter": 3}
PREFIXES = {"spring": "sp", "summer": "s", "fall": "f", "winter": "w"}
ICONS = {"spring": "🌸", "summer": "🌴", "fall": "🍂", "winter": "❄️"}
PLACEHOLDER = "Placeholder caption."


def parse_folder(name):
    """'Fall 2025 Images' -> ('fall', 2025). Returns None if it doesn't match."""
    m = re.match(r"(spring|summer|fall|winter)\s+(\d{4})", name.strip(), re.I)
    if not m:
        return None
    return m.group(1).lower(), int(m.group(2))


def capture_date(path):
    """EXIF DateTimeOriginal, falling back to the Spotlight creation date."""
    try:
        exif = Image.open(path).getexif()
        raw = exif.get(36867) or exif.get(306)  # DateTimeOriginal / DateTime
        if raw:
            return datetime.strptime(raw, "%Y:%m:%d %H:%M:%S")
    except Exception:
        pass
    if sys.platform == "darwin":
        out = subprocess.run(
            ["mdls", "-name", "kMDItemContentCreationDate", "-raw", path],
            capture_output=True, text=True).stdout.strip()
        try:
            return datetime.strptime(out[:19], "%Y-%m-%d %H:%M:%S")
        except Exception:
            pass
    return datetime.fromtimestamp(os.path.getmtime(path))


def existing_captions():
    """Map original filename -> caption from the current _data/photos.yml."""
    captions = {}
    if not os.path.exists(DATA):
        return captions
    pending = None  # each entry lists `caption:` before its `src:`
    for line in open(DATA):
        m = re.match(r'\s*caption:\s*"(.*)"\s*$', line)
        if m:
            pending = m.group(1)
            continue
        m = re.match(r"\s*src:\s*(.+?)\s*$", line)
        if m and pending is not None:
            captions[m.group(1)] = pending
            pending = None
    return captions


def existing_icons():
    """Map slug -> icon so hand-picked emoji are not overwritten."""
    icons, slug = {}, None
    if not os.path.exists(DATA):
        return icons
    for line in open(DATA):
        m = re.match(r"\s*slug:\s*(.+?)\s*$", line)
        if m:
            slug = m.group(1)
            continue
        m = re.match(r'\s*icon:\s*"(.*)"\s*$', line)
        if m and slug:
            icons[slug] = m.group(1)
            slug = None
    return icons


def save(img, dest, max_edge, quality):
    im = img.copy()
    im.thumbnail((max_edge, max_edge), Image.LANCZOS)
    im.convert("RGB").save(dest, "JPEG", quality=quality, optimize=True, progressive=True)


def main():
    if not os.path.isdir(ORIGINALS):
        sys.exit(f"no originals folder at {ORIGINALS}")

    captions = existing_captions()
    icons = existing_icons()

    semesters = []
    for folder in sorted(os.listdir(ORIGINALS)):
        parsed = parse_folder(folder)
        if not parsed or not os.path.isdir(os.path.join(ORIGINALS, folder)):
            continue
        season, year = parsed
        semesters.append((year, SEASONS[season], season, folder))

    semesters.sort(reverse=True)  # newest semester first on the page

    blocks = []
    for year, _, season, folder in semesters:
        slug = f"{season}-{year}"
        prefix = f"{PREFIXES[season]}{str(year)[2:]}"
        src_dir = os.path.join(ORIGINALS, folder)
        out_dir = os.path.join(PHOTOS, slug)
        thumb_dir = os.path.join(out_dir, "thumbs")
        os.makedirs(thumb_dir, exist_ok=True)

        files = [os.path.join(src_dir, f) for f in os.listdir(src_dir)
                 if f.lower().endswith(EXTS)]
        files.sort(key=capture_date)          # oldest -> newest, left to right

        keep = set()
        lines = [f'- name: "{season.capitalize()} {year}"',
                 f"  slug: {slug}",
                 f'  icon: "{icons.get(slug, ICONS[season])}"',
                 "  photos:"]
        for i, path in enumerate(files, 1):
            name = f"{prefix}-{i:02d}.jpg"
            keep.add(name)
            img = ImageOps.exif_transpose(Image.open(path))  # bake in rotation
            save(img, os.path.join(out_dir, name), FULL_MAX, 82)
            save(img, os.path.join(thumb_dir, name), THUMB_MAX, 70)
            orig = os.path.basename(path)
            caption = captions.get(orig, PLACEHOLDER).replace('"', "'")
            lines += [f"    - file: {name}",
                      f'      caption: "{caption}"',
                      f"      src: {orig}",
                      f"      date: {capture_date(path):%Y-%m-%d}"]
            print(f"{slug}/{name}  <- {orig}")

        # Drop renders whose original has since been removed.
        for stale_dir in (out_dir, thumb_dir):
            for f in os.listdir(stale_dir):
                if f.endswith(".jpg") and f not in keep:
                    os.remove(os.path.join(stale_dir, f))
                    print(f"removed stale {os.path.relpath(os.path.join(stale_dir, f), ROOT)}")

        blocks.append("\n".join(lines))

    header = (
        "# Photos shown on /fun/ (the Photos tab).\n"
        "#\n"
        "# GENERATED by scripts/photo-prep.py -- rerun it after adding photos to\n"
        "# assets/images/photos/_originals/. Captions are safe to edit here; the\n"
        "# script matches them back by `src` and keeps them. Semesters render\n"
        "# newest first; photos flip oldest -> newest, left to right.\n"
    )
    with open(DATA, "w") as f:
        f.write(header + "\n" + "\n\n".join(blocks) + "\n")

    total = sum(b.count("    - file:") for b in blocks)
    print(f"\nwrote {os.path.relpath(DATA, ROOT)} — {len(blocks)} semesters, {total} photos")


if __name__ == "__main__":
    main()
