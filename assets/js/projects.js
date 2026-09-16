/* Projects page: tag filter chips (multi-select, OR) with per-tag counts, a live
   "Showing N of M" status, filter state in location.hash (#tags=nlp,healthcare),
   a DOM-derived stat line, and a staggered entrance for newly shown cards.
   Everything here is progressive enhancement; without JS all cards are visible
   and the toolbar and stat line stay hidden. */
(function () {
  'use strict';

  var root = document.querySelector('.pj');
  if (!root) return;

  var grid = root.querySelector('.pj-grid');
  var toolbar = root.querySelector('.pj-toolbar');
  var chipWrap = root.querySelector('.pj-chips');
  var status = root.querySelector('.pj-status');
  var clearBtn = root.querySelector('.pj-clear');
  var stats = document.querySelector('.pj-stats');
  if (!grid || !toolbar || !chipWrap || !status) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.pj-card'));
  var total = cards.length;
  if (!total) return;

  var motionQuery = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function reducedMotion() { return !!(motionQuery && motionQuery.matches); }

  function slug(s) {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  // ── Collect tags from the DOM so the chips can never drift from the cards ──
  var counts = {};
  var cardTags = [];
  cards.forEach(function (card, i) {
    var tags = [];
    var pills = card.querySelectorAll('.pj-tag');
    Array.prototype.forEach.call(pills, function (pill) {
      var name = pill.textContent.replace(/\s+/g, ' ').trim();
      if (name && tags.indexOf(name) === -1) tags.push(name);
    });
    // The card's category colour follows its first tag; keep it in sync so the
    // rail cannot drift if tags are reordered or edited.
    if (pills[0]) {
      var firstCat = pills[0].getAttribute('data-cat') || tags[0];
      if (firstCat) card.setAttribute('data-cat', firstCat);
    }
    cardTags[i] = tags;
    tags.forEach(function (t) { counts[t] = (counts[t] || 0) + 1; });
  });

  // Chip order: most-used first, then alphabetical, so the bar doubles as a
  // count-by-category readout.
  var allTags = Object.keys(counts).sort(function (a, b) {
    return counts[b] - counts[a] || a.localeCompare(b);
  });
  var bySlug = {};
  allTags.forEach(function (t) { bySlug[slug(t)] = t; });

  var selected = [];   // tag names, kept in allTags order
  var chips = {};      // tag name -> button

  // ── Chips ──
  function makeChip(label, cat, count) {
    var b = el('button', 'pj-chip');
    b.type = 'button';
    b.setAttribute('data-cat', cat);
    b.setAttribute('aria-pressed', 'false');

    var dot = el('span', 'pj-chip-dot');
    dot.setAttribute('aria-hidden', 'true');

    b.appendChild(dot);
    b.appendChild(el('span', 'pj-chip-label', label));
    b.appendChild(el('span', 'pj-chip-n', String(count)));
    // Visible count is a bare number; give assistive tech the unit as text.
    b.appendChild(el('span', 'pj-sr', count === 1 ? ' project' : ' projects'));
    chipWrap.appendChild(b);
    return b;
  }

  var allChip = makeChip('All', 'all', total);
  allChip.addEventListener('click', function () { setSelected([], true); });

  allTags.forEach(function (tag) {
    var chip = makeChip(tag, tag, counts[tag]);
    chip.addEventListener('click', function () {
      var next = selected.slice();
      var at = next.indexOf(tag);
      if (at === -1) next.push(tag); else next.splice(at, 1);
      setSelected(next, true);
    });
    chips[tag] = chip;
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', function () {
      setSelected([], true);
      allChip.focus();
    });
  }

  // ── Hash <-> state ──
  function readHash() {
    var m = /(?:^#|[#&])tags=([^&]*)/.exec(window.location.hash || '');
    if (!m) return [];
    var out = [];
    m[1].split(',').forEach(function (part) {
      var name = null;
      try {
        var key = slug(decodeURIComponent(part));
        if (Object.prototype.hasOwnProperty.call(bySlug, key)) name = bySlug[key];
      } catch (e) { name = null; }
      if (name && out.indexOf(name) === -1) out.push(name);
    });
    return out;
  }

  function writeHash() {
    var base = window.location.pathname + window.location.search;
    var hash = selected.length ? '#tags=' + selected.map(slug).join(',') : '';
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', base + hash);
    } else {
      window.location.hash = hash;
    }
  }

  function sameSet(a, b) {
    return a.length === b.length && a.every(function (t) { return b.indexOf(t) !== -1; });
  }

  // Normalise to chip order so the hash is canonical regardless of click order.
  function setSelected(next, fromUser) {
    selected = allTags.filter(function (t) { return next.indexOf(t) !== -1; });
    if (fromUser) writeHash();
    apply();
  }

  // ── Entrance: only cards that were hidden and are now shown animate ──
  function onEnterEnd(e) {
    if (e.animationName !== 'pj-in') return;
    e.currentTarget.classList.remove('pj-enter');
    e.currentTarget.style.removeProperty('--i');
  }
  cards.forEach(function (card) {
    card.addEventListener('animationend', onEnterEnd);
  });

  function enter(card, index) {
    if (reducedMotion()) return;
    card.classList.remove('pj-enter');
    void card.offsetWidth; // restart the keyframes if the class was just removed
    card.style.setProperty('--i', index);
    card.classList.add('pj-enter');
  }

  // ── Render ──
  function apply() {
    var shown = 0;
    var featuredShown = 0;
    var entering = [];

    cards.forEach(function (card, i) {
      var show = !selected.length || cardTags[i].some(function (t) {
        return selected.indexOf(t) !== -1;
      });
      if (show && card.hidden) entering.push(card);
      card.hidden = !show;
      if (show) {
        shown += 1;
        if (card.classList.contains('pj-featured')) featuredShown += 1;
      }
    });

    entering.forEach(enter);

    grid.classList.toggle('pj-solo-featured', featuredShown === 1);

    allChip.setAttribute('aria-pressed', selected.length ? 'false' : 'true');
    allTags.forEach(function (t) {
      chips[t].setAttribute('aria-pressed', selected.indexOf(t) !== -1 ? 'true' : 'false');
    });

    renderStatus(shown);
  }

  function renderStatus(shown) {
    status.textContent = '';
    status.appendChild(document.createTextNode('Showing '));
    status.appendChild(el('b', null, shown + ' of ' + total));
    status.appendChild(document.createTextNode(total === 1 ? ' project' : ' projects'));
    if (selected.length) {
      status.appendChild(document.createTextNode(' · tagged ' + selected.join(' or ')));
    }
    if (clearBtn) clearBtn.hidden = !selected.length;
  }

  // ── Stat line, derived from the DOM ──
  function renderStats() {
    if (!stats) return;
    var awards = grid.querySelectorAll('.pj-award').length;
    var years = [];
    cards.forEach(function (card) {
      var d = card.querySelector('.pj-date');
      if (!d) return;
      (d.textContent.match(/\b(?:19|20)\d{2}\b/g) || []).forEach(function (y) { years.push(+y); });
    });

    var parts = [];
    parts.push([String(total), total === 1 ? ' project' : ' projects']);
    if (awards) parts.push([String(awards), awards === 1 ? ' award' : ' awards']);
    if (years.length) {
      var lo = Math.min.apply(null, years), hi = Math.max.apply(null, years);
      parts.push(lo === hi ? [String(lo), ''] : [String(lo) + '–' + String(hi), '']);
    }

    stats.textContent = '';
    parts.forEach(function (part, i) {
      if (i) {
        var sep = el('span', 'pj-stats-sep', '·');
        sep.setAttribute('aria-hidden', 'true');
        stats.appendChild(sep);
      }
      stats.appendChild(el('b', null, part[0]));
      if (part[1]) stats.appendChild(document.createTextNode(part[1]));
    });
    stats.hidden = false;
  }

  // ── Boot ──
  window.addEventListener('hashchange', function () {
    var fromHash = readHash();
    if (!sameSet(fromHash, selected)) setSelected(fromHash, false);
  });

  renderStats();
  toolbar.hidden = false;
  selected = readHash();
  // First paint: every visible card gets the staggered entrance.
  cards.forEach(function (card) { card.hidden = true; });
  apply();
})();
