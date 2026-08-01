# Personal Site Update Spec

Repo: `evxlee.github.io` (Jekyll, `remote_theme: mmistakes/minimal-mistakes`, `jekyll-include-cache` is already enabled).

## Ground rules

- Do not restyle, refactor, or "improve" anything not listed in this spec.
- All new UI must match the existing visual language in `assets/css/custom.css`:
  card background `#fafbfc`, border `1px solid #e0e4e8`, radius `10px`, accent `#4a90d9`,
  body text `#555`/`#666`, headings `#222`.
- When moving existing content between files, move it **verbatim**. Do not rewrite copy,
  reorder items, change ratings, or touch image paths.
- Every page that uses custom classes must keep the line
  `<link rel="stylesheet" href="/assets/css/custom.css">`.

---

# Task 1: Home page intro

File: `_pages/home.md`

Replace the first three body paragraphs (everything from "Hello, I'm Evan Lee" through
"...through my [CV](/cv/)!") with exactly this:

```markdown
Hello, I'm Evan Lee. I'm from the East Bay (San Ramon) with roots in Taiwan 🇹🇼 & Hong Kong 🇭🇰.

I'm an incoming sophomore at UC Berkeley studying Data Science (domain emphasis in Business & Industrial Analytics) and Economics, with a minor in Computer Science.

I love telling stories with data, but what pulls me even more is bridging that technical work with the people it's actually for. So far that's meant NLP and speech work in research labs at UCSF and Berkeley, ML engineering at an early-stage SkyDeck startup, and this summer, the customer side: running discovery calls with AI infrastructure companies to figure out which problems were worth solving in the first place. I'm looking for internships across data science and machine learning, and on the product side, technical PM, GTM, and tech consulting.

Feel free to learn how I made the most of my time at college through my [CV](/cv/)!
```

Also on this page, change the resume link near the bottom:

- From: `View my [Resume](/assets/resume.pdf) or learn more through my [Coursework](/coursework/) page.`
- To: `View my [Resume](/resume/) or learn more through my [Coursework](/coursework/) page.`

Leave the "Beyond academics" list, the Fun link, and the "Last updated" line alone, except
update the date to today's date.

---

# Task 2: Resume page with two PDFs

## 2a. New file: `_pages/resume.md`

```markdown
---
title: "Resume"
permalink: /resume/
layout: single
author_profile: false
classes: wide
---

<p class="project-intro">Two versions, depending on what you're looking for.</p>

<link rel="stylesheet" href="/assets/css/custom.css">

<div class="resume-grid">

  <a class="resume-card" href="/assets/EvanLeeDS.pdf" target="_blank">
    <span class="resume-icon">📊</span>
    <h3>Data Science / ML</h3>
    <p>Research, ML engineering, and data pipeline work. For data science, ML, and software roles.</p>
    <span class="resume-cta">View PDF →</span>
  </a>

  <a class="resume-card" href="/assets/EvanLeePM.pdf" target="_blank">
    <span class="resume-icon">🧭</span>
    <h3>Product / GTM</h3>
    <p>Customer discovery, product, and go-to-market work. For technical PM, forward deployed, and consulting roles.</p>
    <span class="resume-cta">View PDF →</span>
  </a>

</div>
```

## 2b. Assets

The two PDFs live at `/assets/EvanLeeDS.pdf` and `/assets/EvanLeePM.pdf` (I will add the files
manually). If `assets/resume.pdf` still exists, leave it in place but stop linking to it.

## 2c. CSS

Append to `assets/css/custom.css`:

```css
/* ─── Resume Page ─────────────────────────────────────── */
.resume-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.4rem;
  margin: 1.75rem auto 2.5rem;
  max-width: 760px;
}

.resume-card {
  border: 1px solid #e0e4e8;
  border-radius: 10px;
  padding: 1.75rem 1.5rem;
  background: #fafbfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.55rem;
  text-align: center;
  text-decoration: none !important;
  color: inherit;
  transition: border-color 0.15s, box-shadow 0.15s, transform 0.15s;
}

.resume-card:hover,
.resume-card:focus-visible {
  border-color: #4a90d9;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.resume-icon {
  font-size: 1.9rem;
  line-height: 1;
}

.resume-card h3 {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 700;
  color: #222;
}

.resume-card p {
  margin: 0;
  font-size: 0.86rem;
  color: #666;
  line-height: 1.55;
}

.resume-cta {
  margin-top: 0.5rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: #4a90d9;
}

@media (max-width: 600px) {
  .resume-grid { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  .resume-card { transition: none; }
  .resume-card:hover { transform: none; }
}
```

---

# Task 3: Split the Fun section into sub-pages

## 3a. Target structure

The Fun section becomes five tabbed pages sharing one tab bar. Tab order is fixed:

| Tab | URL | Source of content |
|---|---|---|
| Gallery (default) | `/fun/` | current `_pages/gallery.md` body |
| Sports | `/fun/sports/` | Sports section of current `_pages/fun.md` |
| Video Games | `/fun/video-games/` | Video Games section of current `_pages/fun.md` |
| Anime | `/fun/anime/` | Anime section of current `_pages/fun.md` |
| Mobile Games | `/fun/mobile-games/` | Mobile Games section of current `_pages/fun.md` |

`/fun/` is the landing page and shows Gallery.

## 3b. New file: `_includes/fun-nav.html`

Renders the tab bar. Active state is driven by a `fun_tab` key in each page's front matter.

```html
<nav class="fun-nav">
  <a class="fun-nav-link{% if page.fun_tab == 'gallery' %} active{% endif %}" href="/fun/">Gallery</a>
  <a class="fun-nav-link{% if page.fun_tab == 'sports' %} active{% endif %}" href="/fun/sports/">Sports</a>
  <a class="fun-nav-link{% if page.fun_tab == 'video-games' %} active{% endif %}" href="/fun/video-games/">Video Games</a>
  <a class="fun-nav-link{% if page.fun_tab == 'anime' %} active{% endif %}" href="/fun/anime/">Anime</a>
  <a class="fun-nav-link{% if page.fun_tab == 'mobile-games' %} active{% endif %}" href="/fun/mobile-games/">Mobile Games</a>
</nav>
```

## 3c. New file: `assets/js/slideshow.js`

Move the inline `<script>` currently sitting in `_pages/fun.md` (the IIFE that wires up
`.game-slideshow`) into this file, with one change: **generate the dots in JS** instead of
relying on hardcoded `<button class="slide-dot">` elements, so adding a game no longer requires
adding a matching button by hand.

```js
(function () {
  document.querySelectorAll('.game-slideshow').forEach(function (ss) {
    var slides  = ss.querySelectorAll('.slide');
    var dotWrap = ss.querySelector('.slide-dots');
    var counter = ss.querySelector('.slide-counter');
    var cur = 0;

    if (!slides.length) return;

    // Build one dot per slide.
    if (dotWrap) {
      dotWrap.innerHTML = '';
      slides.forEach(function (_, i) {
        var d = document.createElement('button');
        d.className = 'slide-dot' + (i === 0 ? ' active' : '');
        d.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        d.addEventListener('click', function () { goTo(i); });
        dotWrap.appendChild(d);
      });
    }

    var dots = dotWrap ? dotWrap.querySelectorAll('.slide-dot') : [];

    function goTo(n) {
      slides[cur].classList.remove('active');
      if (dots.length) dots[cur].classList.remove('active');
      cur = ((n % slides.length) + slides.length) % slides.length;
      slides[cur].classList.add('active');
      if (dots.length) dots[cur].classList.add('active');
      if (counter) counter.textContent = (cur + 1) + ' / ' + slides.length;
    }

    ss.querySelector('.prev').addEventListener('click', function () { goTo(cur - 1); });
    ss.querySelector('.next').addEventListener('click', function () { goTo(cur + 1); });

    goTo(0);
  });
})();
```

Because of this change, in both slideshow pages replace the hardcoded dot buttons with an empty
container: `<div class="slide-dots"></div>`. Leave `<span class="slide-counter">1 / 1</span>` in
place; the script overwrites it on load.

## 3d. Page files

Every page below uses this front matter shape and starts its body with the stylesheet link and
the nav include:

```
<link rel="stylesheet" href="/assets/css/custom.css">

{% include fun-nav.html %}
```

**1. `_pages/fun.md`** (rewrite in place)

```yaml
---
title: "Gallery"
permalink: /fun/
layout: single
author_profile: false
fun_tab: gallery
---
```

Body: stylesheet link, nav include, then the Cooking section from `_pages/gallery.md`
(the `## 🍳 Cooking` heading and the `.cooking-coming-soon` block), moved verbatim.

**2. `_pages/fun-sports.md`** (new)

```yaml
---
title: "Sports"
permalink: /fun/sports/
layout: single
author_profile: false
fun_tab: sports
---
```

Body: the Sports block from the old `fun.md` verbatim, which is the "Teams I Root For" line,
the `.teams-grid`, and the `.sports-row` with "Sports I Watch" and "Sports I Play".

**3. `_pages/fun-video-games.md`** (new)

```yaml
---
title: "Video Games"
permalink: /fun/video-games/
layout: single
author_profile: false
fun_tab: video-games
---
```

Body: the intro line ("A chronological look at the major games I've grinded. Use the arrows to
flip through them.") and the full 19-slide `.game-slideshow` block verbatim, with dots replaced
per 3c. End the file with `<script src="/assets/js/slideshow.js"></script>`.

**4. `_pages/fun-anime.md`** (new)

```yaml
---
title: "Anime"
permalink: /fun/anime/
layout: single
author_profile: false
fun_tab: anime
---
```

Body: the full `.anime-list` block verbatim, all entries, statuses, and scores unchanged.

**5. `_pages/fun-mobile-games.md`** (new)

```yaml
---
title: "Mobile Games"
permalink: /fun/mobile-games/
layout: single
author_profile: false
fun_tab: mobile-games
---
```

Body: the intro line ("A look at the mobile games that got way too much screen time.") and the
full 8-slide `.game-slideshow` block verbatim, with dots replaced per 3c. End the file with
`<script src="/assets/js/slideshow.js"></script>`.

**6. Delete `_pages/gallery.md`** once its content has been moved.

Note: the old fun.md used `## <span class="fun-section-icon">🎮</span> Video Games` style
headings. Drop those headings on the sub-pages, since the page title and active tab already say
which section you are on. Keep the `fun-section-icon` CSS in place; the class is unused for now
but harmless.

## 3e. CSS

Append to `assets/css/custom.css`:

```css
/* ─── Fun Section Tabs ────────────────────────────────── */
.fun-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0 0 1.75rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid #e0e4e8;
}

.fun-nav-link {
  font-size: 0.86rem;
  font-weight: 600;
  color: #666;
  text-decoration: none !important;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}

.fun-nav-link:hover,
.fun-nav-link:focus-visible {
  background: #eef1f4;
  color: #222;
}

.fun-nav-link.active {
  background: #fafbfc;
  border-color: #e0e4e8;
  color: #4a90d9;
}

@media (prefers-reduced-motion: reduce) {
  .fun-nav-link { transition: none; }
}
```

## 3f. Site navigation

File: `_data/navigation.yml`. Point Resume at the new page and drop the standalone Gallery
entry, since Gallery now lives inside Fun. Final state:

```yaml
main:
  - title: "Home"
    url: /
  - title: "Resume"
    url: /resume/
  - title: "Coursework"
    url: /coursework/
  - title: "CV"
    url: /cv/
  - title: "Projects"
    url: /projects/
  - title: "Fun"
    url: /fun/
```

---

# Task 4: Two empty project cards

File: `_pages/projects.md`

Insert these two placeholder cards at the **top** of the existing `<div class="project-grid">`,
above the Byt5 Akkadian OCR card. Leave every existing card untouched.

```html
  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">PROJECT NAME</h3>
      <a class="project-github" href="GITHUB_URL" target="_blank">GitHub →</a>
    </div>
    <p class="project-date">MONTH YEAR</p>
    <p class="project-desc">One or two sentences: the problem it solved, then what you built.</p>
    <div class="project-tags">
      <span class="project-tag">TAG</span>
    </div>
  </div>

  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">PROJECT NAME</h3>
      <a class="project-github" href="GITHUB_URL" target="_blank">GitHub →</a>
    </div>
    <p class="project-date">MONTH YEAR</p>
    <p class="project-desc">One or two sentences: the problem it solved, then what you built.</p>
    <div class="project-tags">
      <span class="project-tag">TAG</span>
    </div>
  </div>
```

---

# Verification checklist

Run `bundle exec jekyll serve` and confirm:

1. `/` shows the new three-paragraph intro; the Resume link goes to `/resume/`.
2. `/resume/` renders two side-by-side cards; each opens the correct PDF in a new tab; they
   stack vertically under 600px.
3. `/fun/` loads the Gallery tab by default, with Gallery highlighted in the tab bar.
4. All five tabs render, all five links resolve, and the correct tab is highlighted on each page.
5. Both slideshows work: prev, next, and dot clicks all move slides; the counter reads
   `1 / 19` on Video Games and `1 / 8` on Mobile Games on load; the dot count matches the slide
   count on both.
6. Every image on Sports, Video Games, and Mobile Games still loads (no broken paths from the
   move).
7. `/gallery/` is gone and no page in the repo still links to it. Grep for `gallery` and
   `assets/resume.pdf` to confirm no dead links remain.
8. The site nav has six items and no Gallery entry.
9. `/projects/` shows the two placeholder cards first, all existing cards intact below.
