# Site Update Spec, Oct 2026

Repo: `evxlee.github.io` (Jekyll, `remote_theme: mmistakes/minimal-mistakes`).

Every change below was reviewed and approved. Implement it exactly.

## Ground rules

- Change only what this spec lists. Don't restyle, refactor, or "improve" anything else.
- Copy all text exactly as written, including the en dashes in date ranges ("Jan 2026 – Present").
- Never invent facts or copy. Where I still owe a file (an image), use the placeholder path given and leave a `TODO(evan)` HTML comment. Don't download images.
- No new dependencies and no new JavaScript. Task 7 removes the only script it touches.
- Don't commit or push. When you're done, give me a short per-file summary of what changed.

---

# Task 1: Resume PDF

I'm replacing `assets/Evan_Lee_Resume.pdf` with the new version myself, keeping the same filename so every link keeps working. Don't rename or move it.

When you finish, check that the PDF in the repo contains the text "Wing Assistant". If it doesn't, say so in your summary (it means I haven't swapped it yet).

---

# Task 2: Site-wide

## 2a. Nav order

`_data/navigation.yml`, `main` list. Same titles and URLs as today; only the order changes:

Home, Resume, CV, Projects, Coursework, Fun

## 2b. Link previews

In `_config.yml`, replace the empty `description: >-` line and add `og_image` under the site settings:

```yaml
description: "Data Science & Economics @ UC Berkeley"
og_image: "/assets/images/profile-photo.jpg"
```

`og_image` is Minimal Mistakes' site-wide Open Graph image setting. After a build, view the page source of `/` and confirm `og:description` and `og:image` are filled in.

---

# Task 3: Home page

File: `_pages/home.md`

1. In the third paragraph, replace:

   > I'm pursuing a career in Product Management, particularly in the tech industry, while staying open to Data Science roles. I'm currently recruiting for PM/APM internships.

   with:

   > I'm pursuing a career in Product Management, particularly in the tech industry. I'm currently recruiting for Summer 2027 PM/APM internships.

   The first two sentences of that paragraph stay as they are.

2. Replace the "Start with my..." line with:

   ```markdown
   Start with my [Resume](/assets/Evan_Lee_Resume.pdf), [CV](/cv/), or [Projects](/projects/). Feel free to reach out to me for anything!
   ```

3. Set "Last updated" to today's date in the same format (for example `Oct 11, 2026`).

---

# Task 4: CV page

File: `_pages/cv.md`. Each item names the entry by its `cv-company` text. Replace only the lines shown.

## 4a. University of California, Berkeley

```html
        <p class="cv-desc">Data Science and Economics double major, Computer Science minor.</p>
```

## 4b. New entry: Wing Assistant

Add at the top of the `## 2026` list, above YC Startup Internship Expo:

```html
  <li class="cv-item">
    <div class="cv-dot work"></div>
    <div class="cv-item-body">
      <div class="cv-item-main">
        <span class="cv-badge work">Internship</span>
        <p class="cv-company">Wing Assistant</p>
        <p class="cv-role">Product Management Intern</p>
        <p class="cv-meta">Oct 2026 – Present</p>
        <p class="cv-desc">Working on Central AI.</p>
      </div>
      <!-- TODO(evan): add the Wing logo at assets/images/cv_logos/wing_logo.png -->
      <div class="cv-logo-box"><img src="/assets/images/cv_logos/wing_logo.png" alt="Wing Assistant"></div>
    </div>
  </li>
```

## 4c. YC Startup School 2026

```html
        <p class="cv-desc">Great event, thankful for the free Claude Max.</p>
```

## 4d. UC Berkeley AI Hackathon 2026

```html
        <p class="cv-desc">Fun event.</p>
```

Also delete the `<!-- TODO(evan): see spec 3g -->` comment above this entry.

## 4e. Ithildin

```html
        <p class="cv-role">AI/ML Engineer Intern</p>
```

## 4f. UCSF Yang Lab

```html
        <p class="cv-role">Data Science Researcher</p>
```

```html
        <p class="cv-desc">Co-authored <a href="https://neurips.cc/virtual/2026/loc/sydney/177187" target="_blank" rel="noopener">CohortFlow</a>, accepted to the NeurIPS 2026 GenAI4Health Workshop: an AI agent that finds trial-eligible patients and lets clinicians change criteria mid-run without restarting.</p>
```

The `cv-meta` line stays as is.

## 4g. UCSF Tech Lab

```html
        <p class="cv-desc">DS/ML research on the AI-READI multimodal diabetes dataset.</p>
```

## 4h. FactGrid Cuneiform

```html
        <p class="cv-meta">Advised by Dr. Adam Anderson · Jan 2026 – Present</p>
        <p class="cv-desc">Fine-tuned a ByT5 model to fix OCR errors in Akkadian transliterations, cutting character errors 74%. Now defining requirements to make it a scalable autocorrect tool for researchers, through Berkeley's Data Discovery program.</p>
```

## 4i. Ergonosis: date fix and move

1. Change its meta line to `<p class="cv-meta">Jan 2026 – Mar 2026</p>`.
2. Move the whole `<li>` out of the `## 2025` list to the end of the `## 2026` list, after FactGrid Cuneiform.
3. Delete the `<!-- TODO(evan): see spec 3g -->` comment above it.

## 4j. AgentX – AgentBeats Competition

```html
        <p class="cv-desc">Placed 2nd in the OpenAI-sponsored Finance track with our evaluator agent, which scores AI agents on data integration. I helped deploy and test it.</p>
```

## 4k. UC Berkeley 7th Annual Datathon for Social Good

```html
        <p class="cv-desc">Built EquiMatch, a college recommender for underserved students. Finished 3rd of 50+ teams.</p>
```

After 4a to 4k, the only `TODO(evan)` comment left on this page is the Wing logo one.

---

# Task 5: Coursework page

File: `_pages/coursework.md`

1. Front matter: `title: "Relevant Coursework"`. The nav label stays "Coursework".
2. Replace the semester lists with exactly this (Spring 2026 is unchanged):

```markdown
### Spring 2027 (Tentative)
- **COMPSCI 189**: Introduction to Machine Learning
- **UGBA 10X**: Foundations of Business
- **ECON 100B**: Macroeconomics

### Fall 2026
- **COMPSCI 70**: Discrete Math and Probability Theory
- **UGBA 104**: Introduction to Business Analytics
- **DATA C104**: Human Contexts and Ethics of Data
- **CDSS 170**: Data Discovery Research Practicum

### Spring 2026
- **DATA C100**: [Principles and Techniques of Data Science](https://ds100.org/sp26/)
- **COMPSCI 61B**: [Data Structures](https://sp26.datastructur.es/)

### Fall 2025
- **COMPSCI 61A**: [Structure and Interpretation of Computer Programs](https://cs61a.org)
- **MATH 54**: Linear Algebra and Differential Equations

### Summer 2024 (Berkeley Pre-College Scholars Program)
- **DATA C8**: [Foundations of Data Science](https://www.data8.org/su24/)
```

---

# Task 6: Fun section

1. `_pages/fun.md`: in the intro paragraph, delete the last sentence ("Photos before September 2026 are on an old Iphone 14..."). Keep the rest of the paragraph.
2. `_data/photos.yml`: the `f25-09.jpg` caption `"Placeholder caption."` becomes `"Oski sighting"`.
3. `_pages/fun-anime.md`: "dissapointed" becomes "disappointed".

---

# Task 7: Projects page rebuild

The current page is replaced by an approved design: a featured row for the two award projects, then a 3-column grid. Every card has an illustrated cover, a ribbon on the cover for an award or paper, tags, and real buttons. There is no filter bar and no JavaScript. This is not a creative task: build exactly what's below.

## 7a. Remove the old page

1. Delete `assets/js/projects.js`.
2. In `assets/css/custom.css`, delete everything from the line `/* ─── Projects Page (v2) ...` through the line `/* ─── end Projects Page (v2) ...`, inclusive. Grep first to confirm no other page uses the `pj-` classes.
3. Delete `_pages/projects.md` and create `_pages/projects.html` (7b). It's an `.html` page so kramdown never touches the inline SVG icons. The permalink stays `/projects/`.

## 7b. `_pages/projects.html`

```html
---
title: "Projects"
permalink: /projects/
layout: single
author_profile: false
classes: wide pj-page
---

<link rel="stylesheet" href="/assets/css/custom.css">

<div class="pj">

  <!-- Update these counts when you add a project, award, or paper. -->
  <p class="pj-intro">A collection of things I've built: 10 projects, 2 awards, and 1 paper since 2025.</p>

  <!-- Featured row: the two placements. Ribbons sit on the cover so every title lines up. -->
  <div class="pj-featured-grid">

    <article class="pj-card pj-card--featured c-purple">
      <div class="pj-cover">
        <img class="pj-art" src="/assets/images/projects/data-matchmaker.svg" alt="" width="320" height="180">
        <p class="pj-ribbon pj-ribbon--award"><svg class="pj-ribbon-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/></svg><span><strong>2nd place</strong>, OpenAI-sponsored Finance Agent track, AgentX–AgentBeats (Berkeley RDI)</span></p>
      </div>
      <div class="pj-body">
        <h2 class="pj-title">Data Matchmaker Benchmark AI Agent</h2>
        <p class="pj-date">Dec 2025 – Jan 2026</p>
        <p class="pj-desc">Evaluator agent that scores other AI agents' accuracy on data integration tasks. Team project; I helped deploy and test it.</p>
        <ul class="pj-tags">
          <li class="pj-tag"><span class="pj-dot d-purple" aria-hidden="true"></span>Agentic AI</li>
        </ul>
        <div class="pj-actions">
          <a class="pj-btn" href="https://github.com/jnoahbaier/data-matchmaker-benchmark" target="_blank" rel="noopener"><svg class="pj-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>GitHub</a>
        </div>
      </div>
    </article>

    <article class="pj-card pj-card--featured c-blue">
      <div class="pj-cover">
        <img class="pj-art" src="/assets/images/projects/equimatch.svg" alt="" width="320" height="180">
        <p class="pj-ribbon pj-ribbon--award"><svg class="pj-ribbon-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/></svg><span><strong>3rd of 50+ teams</strong>, UC Berkeley 7th Annual Datathon for Social Good</span></p>
      </div>
      <div class="pj-body">
        <h2 class="pj-title">EquiMatch</h2>
        <p class="pj-date">Nov 2025</p>
        <p class="pj-desc">College recommender for underserved students across 6,000+ institutions, matching on 10 equity factors like child care, with an AI counselor that explains each match.</p>
        <ul class="pj-tags">
          <li class="pj-tag"><span class="pj-dot d-blue" aria-hidden="true"></span>Machine Learning</li>
          <li class="pj-tag"><span class="pj-dot d-blue" aria-hidden="true"></span>Data Analysis</li>
        </ul>
        <div class="pj-actions">
          <a class="pj-btn" href="https://github.com/EvxLee/EquiMatch" target="_blank" rel="noopener"><svg class="pj-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>GitHub</a>
        </div>
      </div>
    </article>

  </div>

  <!-- Grid: ordered by relevance, not date. -->
  <div class="pj-grid">

    <article class="pj-card c-purple">
      <div class="pj-cover">
        <img class="pj-art" src="/assets/images/projects/cohortflow.svg" alt="" width="320" height="180">
        <p class="pj-ribbon pj-ribbon--sm pj-ribbon--paper"><svg class="pj-ribbon-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><path d="M9 13h6M9 17h6"/></svg><span><strong>Accepted</strong> to the NeurIPS 2026 GenAI4Health Workshop</span></p>
      </div>
      <div class="pj-body">
        <h2 class="pj-title">CohortFlow</h2>
        <p class="pj-date">May 2026 – Sep 2026</p>
        <p class="pj-desc">Co-authored with UCSF's Yang Lab. An AI agent that finds trial-eligible patients and lets clinicians change criteria mid-run without restarting, cutting wait time up to 64%.</p>
        <ul class="pj-tags">
          <li class="pj-tag"><span class="pj-dot d-purple" aria-hidden="true"></span>Agentic AI</li>
          <li class="pj-tag"><span class="pj-dot d-gold" aria-hidden="true"></span>Healthcare</li>
        </ul>
        <div class="pj-actions">
          <a class="pj-btn" href="https://neurips.cc/virtual/2026/loc/sydney/177187" target="_blank" rel="noopener"><svg class="pj-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v4h4"/><path d="M9 13h6M9 17h6"/></svg>Paper</a>
        </div>
      </div>
    </article>

    <article class="pj-card c-green">
      <div class="pj-cover">
        <img class="pj-art" src="/assets/images/projects/byt5-ocr.svg" alt="" width="320" height="180">
      </div>
      <div class="pj-body">
        <h2 class="pj-title">ByT5 Akkadian OCR Correction</h2>
        <p class="pj-date">Jan 2026 – Present</p>
        <p class="pj-desc">Fine-tuned a byte-level model to fix OCR errors in scanned Akkadian transliterations, cutting character errors 74%. Now defining requirements to make it a scalable autocorrect tool for researchers, through Berkeley's Data Discovery program.</p>
        <ul class="pj-tags">
          <li class="pj-tag"><span class="pj-dot d-green" aria-hidden="true"></span>NLP</li>
          <li class="pj-tag"><span class="pj-dot d-blue" aria-hidden="true"></span>Machine Learning</li>
        </ul>
        <div class="pj-actions">
          <a class="pj-btn" href="https://github.com/EvxLee/Byt5-Akkadian-OCR-Correction" target="_blank" rel="noopener"><svg class="pj-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>GitHub</a>
        </div>
      </div>
    </article>

    <article class="pj-card c-blue">
      <div class="pj-cover">
        <img class="pj-art" src="/assets/images/projects/acne-detection.svg" alt="" width="320" height="180">
      </div>
      <div class="pj-body">
        <h2 class="pj-title">Acne Detection</h2>
        <p class="pj-date">Apr 2026 – May 2026</p>
        <p class="pj-desc">My classifier hit 98.7% on its own photos but lost to a coin flip on new ones, fooled by watermarks and backgrounds. Just 20 new photos got it above chance.</p>
        <ul class="pj-tags">
          <li class="pj-tag"><span class="pj-dot d-blue" aria-hidden="true"></span>Computer Vision</li>
          <li class="pj-tag"><span class="pj-dot d-blue" aria-hidden="true"></span>Machine Learning</li>
          <li class="pj-tag"><span class="pj-dot d-gold" aria-hidden="true"></span>Healthcare</li>
        </ul>
        <div class="pj-actions">
          <a class="pj-btn" href="https://github.com/EvxLee/AcneDetection" target="_blank" rel="noopener"><svg class="pj-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>GitHub</a>
        </div>
      </div>
    </article>

    <article class="pj-card c-green">
      <div class="pj-cover">
        <img class="pj-art" src="/assets/images/projects/cohortex.svg" alt="" width="320" height="180">
      </div>
      <div class="pj-body">
        <h2 class="pj-title">CohortEx</h2>
        <p class="pj-date">Jun 2026 – Jul 2026</p>
        <p class="pj-desc">Automated pipeline that reads biomedical papers and extracts who was in the study: conditions, age range, sex, and eligibility rules, as structured data.</p>
        <ul class="pj-tags">
          <li class="pj-tag"><span class="pj-dot d-green" aria-hidden="true"></span>NLP</li>
          <li class="pj-tag"><span class="pj-dot d-gold" aria-hidden="true"></span>Healthcare</li>
        </ul>
        <div class="pj-actions">
          <a class="pj-btn" href="https://github.com/EvxLee/Cohortex" target="_blank" rel="noopener"><svg class="pj-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>GitHub</a>
        </div>
      </div>
    </article>

    <article class="pj-card c-gold">
      <div class="pj-cover">
        <img class="pj-art" src="/assets/images/projects/efficient-frontier.svg" alt="" width="320" height="180">
      </div>
      <div class="pj-body">
        <h2 class="pj-title">Efficient Frontier</h2>
        <p class="pj-date">Dec 2025</p>
        <p class="pj-desc">Stock Time-Series Analysis &amp; Portfolio Modeling. Data science and machine learning applications to financial market analysis using stock data from Yahoo Finance.</p>
        <ul class="pj-tags">
          <li class="pj-tag"><span class="pj-dot d-gold" aria-hidden="true"></span>Finance</li>
          <li class="pj-tag"><span class="pj-dot d-blue" aria-hidden="true"></span>Data Analysis</li>
          <li class="pj-tag"><span class="pj-dot d-blue" aria-hidden="true"></span>Machine Learning</li>
        </ul>
        <div class="pj-actions">
          <a class="pj-btn" href="https://github.com/EvxLee/Efficient-Frontier" target="_blank" rel="noopener"><svg class="pj-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>GitHub</a>
        </div>
      </div>
    </article>

    <article class="pj-card c-blue">
      <div class="pj-cover">
        <img class="pj-art" src="/assets/images/projects/capsuledx.svg" alt="" width="320" height="180">
      </div>
      <div class="pj-body">
        <h2 class="pj-title">CapsuleDx</h2>
        <p class="pj-date">Dec 2025</p>
        <p class="pj-desc">Capsule Network project using chest X-ray image dataset to develop a classification model that can accurately distinguish between COVID-19 positive and negative cases.</p>
        <ul class="pj-tags">
          <li class="pj-tag"><span class="pj-dot d-blue" aria-hidden="true"></span>Computer Vision</li>
          <li class="pj-tag"><span class="pj-dot d-blue" aria-hidden="true"></span>Machine Learning</li>
          <li class="pj-tag"><span class="pj-dot d-gold" aria-hidden="true"></span>Healthcare</li>
        </ul>
        <div class="pj-actions">
          <a class="pj-btn" href="https://colab.research.google.com/drive/1-bXlW8Q1fiX6VBu5v-NBPpSm3bd-sDno?authuser=2" target="_blank" rel="noopener"><svg class="pj-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 3v18"/><path d="M12 8h4M12 12h4"/></svg>Colab</a>
        </div>
      </div>
    </article>

    <article class="pj-card c-green">
      <div class="pj-cover">
        <img class="pj-art" src="/assets/images/projects/lyriccal.svg" alt="" width="320" height="180">
      </div>
      <div class="pj-body">
        <h2 class="pj-title">LyricCal</h2>
        <p class="pj-date">Sep 2025 – Dec 2025</p>
        <p class="pj-desc">Personalized song recommender that analyzes song mood and acoustic features to find mathematically most similar tracks.</p>
        <ul class="pj-tags">
          <li class="pj-tag"><span class="pj-dot d-green" aria-hidden="true"></span>NLP</li>
          <li class="pj-tag"><span class="pj-dot d-blue" aria-hidden="true"></span>Machine Learning</li>
        </ul>
        <div class="pj-actions">
          <a class="pj-btn" href="https://github.com/EvxLee/LyricCal" target="_blank" rel="noopener"><svg class="pj-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>GitHub</a>
        </div>
      </div>
    </article>

    <article class="pj-card c-orange">
      <div class="pj-cover">
        <img class="pj-art" src="/assets/images/projects/avatar-arena.svg" alt="" width="320" height="180">
      </div>
      <div class="pj-body">
        <h2 class="pj-title">Avatar Arena</h2>
        <p class="pj-date">Jun 2025</p>
        <p class="pj-desc">Browser turn-based RPG built using HTML, CSS, and JavaScript.</p>
        <ul class="pj-tags">
          <li class="pj-tag"><span class="pj-dot d-orange" aria-hidden="true"></span>Games</li>
          <li class="pj-tag"><span class="pj-dot d-orange" aria-hidden="true"></span>Web</li>
        </ul>
        <div class="pj-actions">
          <a class="pj-btn" href="https://github.com/EvxLee/AvatarArena" target="_blank" rel="noopener"><svg class="pj-btn-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>GitHub</a>
        </div>
      </div>
    </article>

    <!-- Closing tile: fills the last row of the grid. -->
    <div class="pj-more">
      <svg class="pj-more-icon" viewBox="0 0 24 24" aria-hidden="true"><polyline points="8 6 2 12 8 18"/><polyline points="16 6 22 12 16 18"/></svg>
      <h2 class="pj-title">More on GitHub</h2>
      <p class="pj-desc">All my public repos in one place.</p>
      <div class="pj-actions">
        <a class="pj-btn" href="https://github.com/EvxLee" target="_blank" rel="noopener">github.com/EvxLee</a>
      </div>
    </div>

  </div>

</div>
```

## 7c. Cover images

Create the folder `assets/images/projects/` with these 10 files, contents exactly as given. Each cover illustrates what its project does; the card text says the same thing, so the `<img>` tags use `alt=""`. To swap a cover for a real screenshot later, point that card's `src` at a 16:9 image; the CSS crops it to fit.

Each SVG sets its own font stack because an SVG loaded through `<img>` can't inherit the page's font.

### `data-matchmaker.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif">
<rect x="20" y="14" width="98" height="32" rx="7" style="fill:#ffffff;stroke:#c9a3db;stroke-width:1.5"></rect>
<text x="30" y="28" style="font-size:10.5px;font-weight:600;fill:#7a3a96">customers</text>
<rect x="30" y="34" width="60" height="4" rx="2" style="fill:#e6d5ef"></rect>
<rect x="20" y="52" width="98" height="32" rx="7" style="fill:#ffffff;stroke:#c9a3db;stroke-width:1.5"></rect>
<text x="30" y="66" style="font-size:10.5px;font-weight:600;fill:#7a3a96">accounts</text>
<rect x="30" y="72" width="52" height="4" rx="2" style="fill:#e6d5ef"></rect>
<rect x="20" y="90" width="98" height="32" rx="7" style="fill:#ffffff;stroke:#c9a3db;stroke-width:1.5"></rect>
<text x="30" y="104" style="font-size:10.5px;font-weight:600;fill:#7a3a96">trades</text>
<rect x="30" y="110" width="66" height="4" rx="2" style="fill:#e6d5ef"></rect>
<path d="M118 30 C 140 30, 142 64, 156 66" style="fill:none;stroke:#b07cc8;stroke-width:1.5"></path>
<path d="M118 68 L 156 68" style="fill:none;stroke:#b07cc8;stroke-width:1.5"></path>
<path d="M118 106 C 140 106, 142 72, 156 70" style="fill:none;stroke:#b07cc8;stroke-width:1.5"></path>
<circle cx="162" cy="68" r="7" style="fill:#8e44ad"></circle>
<path d="M169 68 L 177 68" style="fill:none;stroke:#8e44ad;stroke-width:1.5"></path>
<polygon points="177,64 184,68 177,72" style="fill:#8e44ad"></polygon>
<rect x="185" y="28" width="86" height="80" rx="7" style="fill:#ffffff;stroke:#8e44ad;stroke-width:1.5"></rect>
<text x="193" y="43" style="font-size:10.5px;font-weight:600;fill:#7a3a96">per customer</text>
<rect x="193" y="52" width="16" height="5" rx="2.5" style="fill:#8e44ad"></rect>
<rect x="213" y="52" width="48" height="5" rx="2.5" style="fill:#e6d5ef"></rect>
<rect x="193" y="64" width="16" height="5" rx="2.5" style="fill:#b07cc8"></rect>
<rect x="213" y="64" width="40" height="5" rx="2.5" style="fill:#e6d5ef"></rect>
<rect x="193" y="76" width="16" height="5" rx="2.5" style="fill:#b07cc8"></rect>
<rect x="213" y="76" width="46" height="5" rx="2.5" style="fill:#e6d5ef"></rect>
<rect x="193" y="88" width="16" height="5" rx="2.5" style="fill:#b07cc8"></rect>
<rect x="213" y="88" width="34" height="5" rx="2.5" style="fill:#e6d5ef"></rect>
<circle cx="294" cy="68" r="15" style="fill:#ffffff;stroke:#e6d5ef;stroke-width:5"></circle>
<circle cx="294" cy="68" r="15" transform="rotate(-90 294 68)" style="fill:none;stroke:#8e44ad;stroke-width:5;stroke-linecap:round;stroke-dasharray:70 95"></circle>
<text x="294" y="71.5" style="font-size:9px;font-weight:700;fill:#7a3a96;text-anchor:middle">/100</text>
</svg>
```

### `equimatch.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif">
<rect x="20" y="12" width="172" height="26" rx="7" style="fill:#ffffff;stroke:#9cc0ea;stroke-width:1.5"></rect>
<circle cx="34" cy="25" r="7" style="fill:#4a90d9"></circle>
<text x="34" y="28.5" style="font-size:9px;font-weight:700;fill:#ffffff;text-anchor:middle">1</text>
<rect x="48" y="22" width="58" height="6" rx="3" style="fill:#d6e6f7"></rect>
<rect x="116" y="22" width="66" height="6" rx="3" style="fill:#e8f1fb"></rect>
<rect x="116" y="22" width="60" height="6" rx="3" style="fill:#4a90d9"></rect>
<rect x="20" y="44" width="172" height="26" rx="7" style="fill:#ffffff;stroke:#9cc0ea;stroke-width:1.5"></rect>
<circle cx="34" cy="57" r="7" style="fill:#6fa7e2"></circle>
<text x="34" y="60.5" style="font-size:9px;font-weight:700;fill:#ffffff;text-anchor:middle">2</text>
<rect x="48" y="54" width="62" height="6" rx="3" style="fill:#d6e6f7"></rect>
<rect x="116" y="54" width="66" height="6" rx="3" style="fill:#e8f1fb"></rect>
<rect x="116" y="54" width="48" height="6" rx="3" style="fill:#6fa7e2"></rect>
<rect x="20" y="76" width="172" height="26" rx="7" style="fill:#ffffff;stroke:#9cc0ea;stroke-width:1.5"></rect>
<circle cx="34" cy="89" r="7" style="fill:#9cc0ea"></circle>
<text x="34" y="92.5" style="font-size:9px;font-weight:700;fill:#ffffff;text-anchor:middle">3</text>
<rect x="48" y="86" width="50" height="6" rx="3" style="fill:#d6e6f7"></rect>
<rect x="116" y="86" width="66" height="6" rx="3" style="fill:#e8f1fb"></rect>
<rect x="116" y="86" width="38" height="6" rx="3" style="fill:#9cc0ea"></rect>
<rect x="20" y="110" width="68" height="20" rx="10" style="fill:#ffffff;stroke:#4a90d9;stroke-width:1.5"></rect>
<text x="54" y="123.5" style="font-size:9.5px;font-weight:600;fill:#2a66a8;text-anchor:middle">child care</text>
<rect x="94" y="110" width="44" height="20" rx="10" style="fill:#ffffff;stroke:#9cc0ea;stroke-width:1.5"></rect>
<rect x="104" y="118.5" width="24" height="3" rx="1.5" style="fill:#c4daf2"></rect>
<rect x="144" y="110" width="44" height="20" rx="10" style="fill:#ffffff;stroke:#9cc0ea;stroke-width:1.5"></rect>
<rect x="154" y="118.5" width="24" height="3" rx="1.5" style="fill:#c4daf2"></rect>
<path d="M210 14 h80 a10 10 0 0 1 10 10 v52 a10 10 0 0 1 -10 10 h-58 l-12 11 v-11 h-10 a10 10 0 0 1 -10 -10 v-52 a10 10 0 0 1 10 -10 z" style="fill:#ffffff;stroke:#4a90d9;stroke-width:1.5"></path>
<text x="211" y="33" style="font-size:10px;font-weight:600;fill:#2a66a8">Why this match</text>
<rect x="211" y="43" width="76" height="5" rx="2.5" style="fill:#d6e6f7"></rect>
<rect x="211" y="55" width="68" height="5" rx="2.5" style="fill:#d6e6f7"></rect>
<rect x="211" y="67" width="50" height="5" rx="2.5" style="fill:#d6e6f7"></rect>
</svg>
```

### `cohortflow.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif">
<rect x="20" y="16" width="98" height="28" rx="14" style="fill:#ffffff;stroke:#b07cc8;stroke-width:1.5;stroke-dasharray:4 3"></rect>
<text x="69" y="34" style="font-size:10.5px;fill:#7a3a96;text-anchor:middle">cirrhosis</text>
<text x="69" y="58" style="font-size:9.5px;fill:#8a5aa3;text-anchor:middle">reused</text>
<rect x="20" y="70" width="98" height="28" rx="14" style="fill:#8e44ad"></rect>
<text x="69" y="88" style="font-size:10.5px;font-weight:700;fill:#ffffff;text-anchor:middle">+ COPD</text>
<text x="69" y="112" style="font-size:9.5px;font-weight:600;fill:#7a3a96;text-anchor:middle">added mid-run</text>
<path d="M118 30 C 146 30, 150 56, 172 60" style="fill:none;stroke:#c9a3db;stroke-width:1.5;stroke-dasharray:4 3"></path>
<path d="M118 84 C 146 84, 150 70, 172 66" style="fill:none;stroke:#8e44ad;stroke-width:2"></path>
<circle cx="188" cy="63" r="16" style="fill:#ffffff;stroke:#8e44ad;stroke-width:2"></circle>
<text x="188" y="66.5" style="font-size:9.5px;font-weight:700;fill:#7a3a96;text-anchor:middle">AND</text>
<path d="M204 63 L 222 63" style="fill:none;stroke:#8e44ad;stroke-width:2"></path>
<polygon points="222,59 229,63 222,67" style="fill:#8e44ad"></polygon>
<rect x="232" y="47" width="70" height="32" rx="9" style="fill:#ffffff;stroke:#8e44ad;stroke-width:2"></rect>
<text x="267" y="67" style="font-size:10.5px;font-weight:700;fill:#7a3a96;text-anchor:middle">cohort</text>
</svg>
```

### `byt5-ocr.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif">
<rect x="22" y="14" width="276" height="68" rx="12" style="fill:#ffffff;stroke:#93d3ad;stroke-width:1.5"></rect>
<polygon points="38,26 49,31 38,36" style="fill:#27ae60"></polygon>
<path d="M48 31 L 62 31" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="66,26 77,31 66,36" style="fill:#27ae60"></polygon>
<path d="M76 31 L 90 31" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="99,22 109,22 104,33" style="fill:#27ae60"></polygon>
<path d="M104 32 L 104 44" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="124,26 135,31 124,36" style="fill:#27ae60"></polygon>
<path d="M134 31 L 148 31" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="152,26 163,31 152,36" style="fill:#27ae60"></polygon>
<path d="M162 31 L 176 31" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="189,22 199,22 194,33" style="fill:#27ae60"></polygon>
<path d="M194 32 L 194 44" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="210,26 221,31 210,36" style="fill:#27ae60"></polygon>
<path d="M220 31 L 234 31" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="244,26 255,31 244,36" style="fill:#27ae60"></polygon>
<path d="M254 31 L 268 31" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="279,22 289,22 284,33" style="fill:#27ae60"></polygon>
<path d="M284 32 L 284 44" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="40,57 51,62 40,67" style="fill:#27ae60"></polygon>
<path d="M50 62 L 64 62" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="79,52 89,52 84,63" style="fill:#27ae60"></polygon>
<path d="M84 62 L 84 74" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="108,57 119,62 108,67" style="fill:#27ae60"></polygon>
<path d="M118 62 L 132 62" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="136,57 147,62 136,67" style="fill:#27ae60"></polygon>
<path d="M146 62 L 160 62" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="175,52 185,52 180,63" style="fill:#27ae60"></polygon>
<path d="M180 62 L 180 74" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="200,57 211,62 200,67" style="fill:#27ae60"></polygon>
<path d="M210 62 L 224 62" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="232,57 243,62 232,67" style="fill:#27ae60"></polygon>
<path d="M242 62 L 256 62" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<polygon points="271,52 281,52 276,63" style="fill:#27ae60"></polygon>
<path d="M276 62 L 276 74" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round"></path>
<text x="22" y="114" style="font-size:10px;font-weight:600;fill:#5b7465">OCR</text>
<text x="64" y="114" style="font-family:Georgia, 'Times New Roman', serif;font-style:italic;font-size:15px;fill:#6a7a70">a-na be-li-ia qi-bi-ma</text>
<text x="22" y="144" style="font-size:10px;font-weight:700;fill:#1b7a43">ByT5</text>
<text x="64" y="144" style="font-family:Georgia, 'Times New Roman', serif;font-style:italic;font-size:15px;fill:#1b7a43">a-na be-lí-ia qí-bí-ma</text>
<polyline points="232,138 237,143 246,133" style="fill:none;stroke:#27ae60;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round"></polyline>
</svg>
```

### `acne-detection.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif">
<rect x="22" y="14" width="126" height="110" rx="9" style="fill:#ffffff;stroke:#9cc0ea;stroke-width:1.5"></rect>
<circle cx="85" cy="66" r="34" style="fill:#e8f1fb;stroke:#9cc0ea;stroke-width:1.5"></circle>
<circle cx="74" cy="58" r="2.5" style="fill:#9cc0ea"></circle>
<circle cx="96" cy="58" r="2.5" style="fill:#9cc0ea"></circle>
<rect x="60" y="68" width="11" height="11" rx="1.5" style="fill:none;stroke:#2a66a8;stroke-width:1.6"></rect>
<rect x="99" y="66" width="11" height="11" rx="1.5" style="fill:none;stroke:#2a66a8;stroke-width:1.6"></rect>
<rect x="80" y="84" width="10" height="10" rx="1.5" style="fill:none;stroke:#2a66a8;stroke-width:1.6"></rect>
<text x="85" y="144" style="font-size:10px;font-weight:600;fill:#2a66a8;text-anchor:middle">own photos: 98.7%</text>
<rect x="172" y="14" width="126" height="110" rx="9" style="fill:#ffffff;stroke:#9cc0ea;stroke-width:1.5"></rect>
<circle cx="235" cy="66" r="34" style="fill:#f3f7fc;stroke:#cfe0f4;stroke-width:1.5"></circle>
<text x="235" y="70" transform="rotate(-22 235 66)" style="font-size:12px;font-weight:800;letter-spacing:1.5px;fill:#bccbdc;text-anchor:middle">WATERMARK</text>
<rect x="185" y="54" width="100" height="24" rx="2" transform="rotate(-22 235 66)" style="fill:none;stroke:#e67e22;stroke-width:1.8"></rect>
<text x="235" y="144" style="font-size:10px;font-weight:600;fill:#a8550c;text-anchor:middle">new photos: false alarms</text>
</svg>
```

### `cohortex.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif">
<rect x="24" y="14" width="96" height="124" rx="7" style="fill:#ffffff;stroke:#93d3ad;stroke-width:1.5"></rect>
<rect x="34" y="26" width="58" height="6" rx="3" style="fill:#27ae60"></rect>
<rect x="34" y="42" width="74" height="4" rx="2" style="fill:#dff1e6"></rect>
<rect x="34" y="51" width="66" height="4" rx="2" style="fill:#dff1e6"></rect>
<rect x="34" y="60" width="74" height="4" rx="2" style="fill:#9fd8b5"></rect>
<rect x="34" y="69" width="60" height="4" rx="2" style="fill:#dff1e6"></rect>
<rect x="34" y="78" width="74" height="4" rx="2" style="fill:#9fd8b5"></rect>
<rect x="34" y="87" width="68" height="4" rx="2" style="fill:#dff1e6"></rect>
<rect x="34" y="96" width="74" height="4" rx="2" style="fill:#dff1e6"></rect>
<rect x="34" y="105" width="52" height="4" rx="2" style="fill:#9fd8b5"></rect>
<rect x="34" y="114" width="70" height="4" rx="2" style="fill:#dff1e6"></rect>
<rect x="34" y="123" width="44" height="4" rx="2" style="fill:#dff1e6"></rect>
<path d="M128 76 L 150 76" style="fill:none;stroke:#27ae60;stroke-width:1.8"></path>
<polygon points="150,72 157,76 150,80" style="fill:#27ae60"></polygon>
<text x="166" y="29" style="font-size:10px;font-weight:600;fill:#1b7a43">conditions</text>
<rect x="232" y="22" width="66" height="7" rx="3.5" style="fill:#dff1e6"></rect>
<rect x="232" y="22" width="52" height="7" rx="3.5" style="fill:#27ae60"></rect>
<text x="166" y="48" style="font-size:10px;font-weight:600;fill:#1b7a43">study type</text>
<rect x="232" y="41" width="66" height="7" rx="3.5" style="fill:#dff1e6"></rect>
<rect x="232" y="41" width="38" height="7" rx="3.5" style="fill:#27ae60"></rect>
<text x="166" y="67" style="font-size:10px;font-weight:600;fill:#1b7a43">sex</text>
<rect x="232" y="60" width="66" height="7" rx="3.5" style="fill:#dff1e6"></rect>
<rect x="232" y="60" width="20" height="7" rx="3.5" style="fill:#27ae60"></rect>
<text x="166" y="86" style="font-size:10px;font-weight:600;fill:#1b7a43">min age</text>
<rect x="232" y="79" width="66" height="7" rx="3.5" style="fill:#dff1e6"></rect>
<rect x="232" y="79" width="26" height="7" rx="3.5" style="fill:#27ae60"></rect>
<text x="166" y="105" style="font-size:10px;font-weight:600;fill:#1b7a43">max age</text>
<rect x="232" y="98" width="66" height="7" rx="3.5" style="fill:#dff1e6"></rect>
<rect x="232" y="98" width="26" height="7" rx="3.5" style="fill:#27ae60"></rect>
<text x="166" y="124" style="font-size:10px;font-weight:600;fill:#1b7a43">eligibility</text>
<rect x="232" y="117" width="66" height="7" rx="3.5" style="fill:#dff1e6"></rect>
<rect x="232" y="117" width="60" height="7" rx="3.5" style="fill:#27ae60"></rect>
</svg>
```

### `efficient-frontier.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif">
<path d="M44 18 L 44 146 L 300 146" style="fill:none;stroke:#dfc283;stroke-width:1.5"></path>
<text x="38" y="26" style="font-size:10px;fill:#7d5c10;text-anchor:end">return</text>
<text x="300" y="162" style="font-size:10px;fill:#7d5c10;text-anchor:end">risk</text>
<circle cx="100" cy="120" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="120" cy="110" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="140" cy="96" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="160" cy="104" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="180" cy="88" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="200" cy="96" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="220" cy="78" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="240" cy="90" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="260" cy="70" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="150" cy="124" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="190" cy="118" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="230" cy="110" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="270" cy="96" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="210" cy="132" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="170" cy="136" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="250" cy="124" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="280" cy="84" r="3.5" style="fill:#e8cf94"></circle>
<circle cx="120" cy="134" r="3.5" style="fill:#e8cf94"></circle>
<path d="M70 132 C 92 70, 150 44, 290 30" style="fill:none;stroke:#c0922b;stroke-width:2.6;stroke-linecap:round"></path>
<circle cx="136" cy="63" r="6.5" style="fill:#c0922b;stroke:#ffffff;stroke-width:2.5"></circle>
</svg>
```

### `capsuledx.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif">
<rect x="22" y="14" width="168" height="136" rx="10" style="fill:#ffffff;stroke:#9cc0ea;stroke-width:1.5"></rect>
<ellipse cx="80" cy="84" rx="30" ry="48" style="fill:#e8f1fb"></ellipse>
<ellipse cx="132" cy="84" rx="30" ry="48" style="fill:#e8f1fb"></ellipse>
<path d="M106 26 L 106 140" style="fill:none;stroke:#9cc0ea;stroke-width:4;stroke-dasharray:7 3"></path>
<path d="M104 44 Q 74 40 56 58" style="fill:none;stroke:#4a90d9;stroke-width:1.6;stroke-linecap:round"></path>
<path d="M104 62 Q 74 58 54 76" style="fill:none;stroke:#4a90d9;stroke-width:1.6;stroke-linecap:round"></path>
<path d="M104 80 Q 74 76 54 94" style="fill:none;stroke:#4a90d9;stroke-width:1.6;stroke-linecap:round"></path>
<path d="M104 98 Q 74 94 56 112" style="fill:none;stroke:#4a90d9;stroke-width:1.6;stroke-linecap:round"></path>
<path d="M104 116 Q 76 112 62 128" style="fill:none;stroke:#4a90d9;stroke-width:1.6;stroke-linecap:round"></path>
<path d="M108 44 Q 138 40 156 58" style="fill:none;stroke:#4a90d9;stroke-width:1.6;stroke-linecap:round"></path>
<path d="M108 62 Q 138 58 158 76" style="fill:none;stroke:#4a90d9;stroke-width:1.6;stroke-linecap:round"></path>
<path d="M108 80 Q 138 76 158 94" style="fill:none;stroke:#4a90d9;stroke-width:1.6;stroke-linecap:round"></path>
<path d="M108 98 Q 138 94 156 112" style="fill:none;stroke:#4a90d9;stroke-width:1.6;stroke-linecap:round"></path>
<path d="M108 116 Q 136 112 150 128" style="fill:none;stroke:#4a90d9;stroke-width:1.6;stroke-linecap:round"></path>
<rect x="206" y="52" width="94" height="28" rx="14" style="fill:#4a90d9"></rect>
<text x="253" y="70" style="font-size:10.5px;font-weight:700;fill:#ffffff;text-anchor:middle">COVID-19 +</text>
<rect x="206" y="90" width="94" height="28" rx="14" style="fill:#ffffff;stroke:#9cc0ea;stroke-width:1.5"></rect>
<text x="253" y="108" style="font-size:10.5px;font-weight:600;fill:#2a66a8;text-anchor:middle">COVID-19 −</text>
</svg>
```

### `lyriccal.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif">
<circle cx="40" cy="30" r="4" style="fill:#cdebd9"></circle>
<circle cx="64" cy="92" r="4" style="fill:#cdebd9"></circle>
<circle cx="84" cy="52" r="4" style="fill:#cdebd9"></circle>
<circle cx="96" cy="118" r="4" style="fill:#cdebd9"></circle>
<circle cx="118" cy="30" r="4" style="fill:#cdebd9"></circle>
<circle cx="110" cy="72" r="4" style="fill:#cdebd9"></circle>
<circle cx="204" cy="30" r="4" style="fill:#cdebd9"></circle>
<circle cx="214" cy="104" r="4" style="fill:#cdebd9"></circle>
<circle cx="236" cy="62" r="4" style="fill:#cdebd9"></circle>
<circle cx="258" cy="96" r="4" style="fill:#cdebd9"></circle>
<circle cx="270" cy="36" r="4" style="fill:#cdebd9"></circle>
<circle cx="290" cy="78" r="4" style="fill:#cdebd9"></circle>
<circle cx="56" cy="124" r="4" style="fill:#cdebd9"></circle>
<circle cx="196" cy="128" r="4" style="fill:#cdebd9"></circle>
<circle cx="244" cy="124" r="4" style="fill:#cdebd9"></circle>
<circle cx="286" cy="118" r="4" style="fill:#cdebd9"></circle>
<circle cx="150" cy="24" r="4" style="fill:#cdebd9"></circle>
<circle cx="124" cy="112" r="4" style="fill:#cdebd9"></circle>
<path d="M150 66 L 186 56" style="fill:none;stroke:#27ae60;stroke-width:1.6"></path>
<path d="M150 66 L 124 88" style="fill:none;stroke:#27ae60;stroke-width:1.6"></path>
<path d="M150 66 L 170 96" style="fill:none;stroke:#27ae60;stroke-width:1.6"></path>
<circle cx="186" cy="56" r="5.5" style="fill:#ffffff;stroke:#27ae60;stroke-width:1.8"></circle>
<circle cx="124" cy="88" r="5.5" style="fill:#ffffff;stroke:#27ae60;stroke-width:1.8"></circle>
<circle cx="170" cy="96" r="5.5" style="fill:#ffffff;stroke:#27ae60;stroke-width:1.8"></circle>
<circle cx="150" cy="66" r="7.5" style="fill:#27ae60"></circle>
<text x="150" y="48" style="font-size:10px;font-weight:600;fill:#1b7a43;text-anchor:middle">your song</text>
<rect x="30" y="147" width="4" height="6" rx="2" style="fill:#93d3ad"></rect>
<rect x="38" y="145" width="4" height="10" rx="2" style="fill:#93d3ad"></rect>
<rect x="46" y="142" width="4" height="16" rx="2" style="fill:#93d3ad"></rect>
<rect x="54" y="145.5" width="4" height="9" rx="2" style="fill:#93d3ad"></rect>
<rect x="62" y="140" width="4" height="20" rx="2" style="fill:#93d3ad"></rect>
<rect x="70" y="144" width="4" height="12" rx="2" style="fill:#93d3ad"></rect>
<rect x="78" y="146.5" width="4" height="7" rx="2" style="fill:#93d3ad"></rect>
<rect x="86" y="143" width="4" height="14" rx="2" style="fill:#93d3ad"></rect>
<rect x="94" y="139" width="4" height="22" rx="2" style="fill:#93d3ad"></rect>
<rect x="102" y="144.5" width="4" height="11" rx="2" style="fill:#93d3ad"></rect>
<rect x="110" y="146" width="4" height="8" rx="2" style="fill:#93d3ad"></rect>
<rect x="118" y="141" width="4" height="18" rx="2" style="fill:#93d3ad"></rect>
<rect x="126" y="143.5" width="4" height="13" rx="2" style="fill:#93d3ad"></rect>
<rect x="134" y="147" width="4" height="6" rx="2" style="fill:#93d3ad"></rect>
<rect x="142" y="142.5" width="4" height="15" rx="2" style="fill:#93d3ad"></rect>
<rect x="150" y="139.5" width="4" height="21" rx="2" style="fill:#27ae60"></rect>
<rect x="158" y="145" width="4" height="10" rx="2" style="fill:#93d3ad"></rect>
<rect x="166" y="146.5" width="4" height="7" rx="2" style="fill:#93d3ad"></rect>
<rect x="174" y="141.5" width="4" height="17" rx="2" style="fill:#93d3ad"></rect>
<rect x="182" y="144" width="4" height="12" rx="2" style="fill:#93d3ad"></rect>
<rect x="190" y="145.5" width="4" height="9" rx="2" style="fill:#93d3ad"></rect>
<rect x="198" y="140.5" width="4" height="19" rx="2" style="fill:#93d3ad"></rect>
<rect x="206" y="143" width="4" height="14" rx="2" style="fill:#93d3ad"></rect>
<rect x="214" y="146" width="4" height="8" rx="2" style="fill:#93d3ad"></rect>
<rect x="222" y="144.5" width="4" height="11" rx="2" style="fill:#93d3ad"></rect>
<rect x="230" y="140" width="4" height="20" rx="2" style="fill:#93d3ad"></rect>
<rect x="238" y="145.5" width="4" height="9" rx="2" style="fill:#93d3ad"></rect>
<rect x="246" y="147" width="4" height="6" rx="2" style="fill:#93d3ad"></rect>
<rect x="254" y="143.5" width="4" height="13" rx="2" style="fill:#93d3ad"></rect>
<rect x="262" y="141.5" width="4" height="17" rx="2" style="fill:#93d3ad"></rect>
<rect x="270" y="145" width="4" height="10" rx="2" style="fill:#93d3ad"></rect>
<rect x="278" y="146.5" width="4" height="7" rx="2" style="fill:#93d3ad"></rect>
<rect x="286" y="144" width="4" height="12" rx="2" style="fill:#93d3ad"></rect>
</svg>
```

### `avatar-arena.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180" style="font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Helvetica, sans-serif">
<rect x="58" y="34" width="52" height="8" rx="4" style="fill:#ffffff;stroke:#f2b47c;stroke-width:1.5"></rect>
<rect x="60" y="36" width="40" height="4" rx="2" style="fill:#e67e22"></rect>
<rect x="76" y="50" width="12" height="6" style="fill:#e67e22"></rect>
<rect x="70" y="56" width="24" height="6" style="fill:#e67e22"></rect>
<rect x="70" y="62" width="6" height="6" style="fill:#e67e22"></rect>
<rect x="76" y="62" width="12" height="6" style="fill:#f8d7b8"></rect>
<rect x="88" y="62" width="6" height="6" style="fill:#e67e22"></rect>
<rect x="76" y="68" width="12" height="6" style="fill:#f8d7b8"></rect>
<rect x="64" y="74" width="36" height="6" style="fill:#e67e22"></rect>
<rect x="70" y="80" width="24" height="12" style="fill:#e67e22"></rect>
<rect x="70" y="92" width="6" height="12" style="fill:#e67e22"></rect>
<rect x="88" y="92" width="6" height="12" style="fill:#e67e22"></rect>
<rect x="104" y="52" width="5" height="30" style="fill:#a8550c"></rect>
<rect x="100" y="76" width="13" height="4" style="fill:#a8550c"></rect>
<rect x="198" y="58" width="52" height="8" rx="4" style="fill:#ffffff;stroke:#f2b47c;stroke-width:1.5"></rect>
<rect x="200" y="60" width="16" height="4" rx="2" style="fill:#c0651a"></rect>
<rect x="216" y="74" width="18" height="6" style="fill:#c0651a"></rect>
<rect x="210" y="80" width="30" height="6" style="fill:#c0651a"></rect>
<rect x="204" y="86" width="42" height="6" style="fill:#c0651a"></rect>
<rect x="216" y="86" width="6" height="6" style="fill:#ffffff"></rect>
<rect x="228" y="86" width="6" height="6" style="fill:#ffffff"></rect>
<rect x="204" y="92" width="42" height="6" style="fill:#c0651a"></rect>
<rect x="204" y="98" width="6" height="6" style="fill:#c0651a"></rect>
<rect x="216" y="98" width="6" height="6" style="fill:#c0651a"></rect>
<rect x="228" y="98" width="6" height="6" style="fill:#c0651a"></rect>
<rect x="240" y="98" width="6" height="6" style="fill:#c0651a"></rect>
<path d="M24 107 L 296 107" style="fill:none;stroke:#f2b47c;stroke-width:2;stroke-dasharray:6 4"></path>
<rect x="24" y="122" width="160" height="34" rx="7" style="fill:#ffffff;stroke:#e67e22;stroke-width:1.5"></rect>
<polygon points="36,133 43,139 36,145" style="fill:#e67e22"></polygon>
<text x="50" y="143" style="font-size:11.5px;font-weight:700;fill:#a8550c">Attack</text>
<text x="112" y="143" style="font-size:11.5px;fill:#a8550c">Defend</text>
<text x="296" y="143" style="font-size:10px;font-weight:600;fill:#a8550c;text-anchor:end">Your turn</text>
</svg>
```

## 7d. CSS

Append this block to `assets/css/custom.css` (where the old block was is fine). Keep the px values: Minimal Mistakes scales `rem` up to 22px on wide screens, which would make the card text too big. The colors match the existing CV legend.

```css
/* ─── Projects Page (v3) ─────────────────────────────── */
/* Only /projects/ uses these classes. A featured row for the two placements,
   then an auto-fill grid. No JS. Sizes are px on purpose (see spec). */

.pj {
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 28px;
  color: #4a5056;
}

.pj p { margin: 0; }

.pj .pj-intro {
  max-width: 640px;
  font-size: 17px;
  line-height: 1.55;
  color: #4a5056;
}

.pj-featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  gap: 22px;
}

.pj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr));
  gap: 20px;
}

/* ── Card ── */
.pj-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #fff;
  border: 1px solid #e0e4e8;
  border-radius: 14px;
  overflow: hidden;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}

.pj-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(31, 41, 51, .08);
}

.pj-card.c-blue:hover   { border-color: #4a90d9; }
.pj-card.c-green:hover  { border-color: #27ae60; }
.pj-card.c-purple:hover { border-color: #8e44ad; }
.pj-card.c-gold:hover   { border-color: #c0922b; }
.pj-card.c-orange:hover { border-color: #e67e22; }

/* ── Cover: category tint with a dot grid, art on top ── */
.pj-cover {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-size: 14px 14px;
}

.c-blue .pj-cover   { background-color: #e8f1fb; background-image: radial-gradient(rgba(74, 144, 217, .18) 1px, transparent 1.6px); }
.c-green .pj-cover  { background-color: #e6f5ec; background-image: radial-gradient(rgba(39, 174, 96, .16) 1px, transparent 1.6px); }
.c-purple .pj-cover { background-color: #f3e9f7; background-image: radial-gradient(rgba(142, 68, 173, .16) 1px, transparent 1.6px); }
.c-gold .pj-cover   { background-color: #faf1dc; background-image: radial-gradient(rgba(192, 146, 43, .2) 1px, transparent 1.6px); }
.c-orange .pj-cover { background-color: #fdeee0; background-image: radial-gradient(rgba(230, 126, 34, .16) 1px, transparent 1.6px); }

.pj-art {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .35s ease;
}

.pj-card:hover .pj-art { transform: scale(1.04); }

/* ── Ribbon: the result (award or paper), pinned to the bottom of the cover ── */
.pj .pj-ribbon {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: 12px;
  display: flex;
  align-items: flex-start;
  gap: 9px;
  padding: 9px 12px;
  border-radius: 9px;
  font-size: 14px;
  line-height: 1.4;
}

.pj .pj-ribbon--sm {
  left: 10px;
  right: 10px;
  bottom: 10px;
  gap: 8px;
  padding: 8px 11px;
  border-radius: 8px;
  font-size: 13px;
}

.pj-ribbon--award { background: #fffaeb; border: 1px solid #ecd9a3; color: #5f440a; }
.pj-ribbon--award strong { color: #4b3300; }
.pj-ribbon--paper { background: #f3f8fe; border: 1px solid #cfe0f4; color: #1f4f85; }
.pj-ribbon--paper strong { color: #163d68; }

.pj-ribbon-icon {
  flex: none;
  width: 17px;
  height: 17px;
  margin-top: 1px;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pj-ribbon--sm .pj-ribbon-icon { width: 16px; height: 16px; }
.pj-ribbon--award .pj-ribbon-icon { stroke: #b07f12; }
.pj-ribbon--paper .pj-ribbon-icon { stroke: #2a66a8; }

/* ── Body ── */
.pj-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1 1 auto;
  min-width: 0;
  padding: 16px 18px 18px;
}

.pj-card--featured .pj-body {
  gap: 9px;
  padding: 20px 24px 24px;
}

/* Overrides Minimal Mistakes' h2 rule and border inside .page__content. */
.pj .pj-title {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: 0;
  color: #222;
  text-wrap: balance;
}

.pj .pj-card--featured .pj-title {
  font-size: 24px;
  line-height: 1.25;
  letter-spacing: -0.01em;
}

.pj .pj-date { font-size: 13.5px; color: #686e74; }
.pj .pj-card--featured .pj-date { font-size: 14px; }

.pj .pj-desc { font-size: 15px; line-height: 1.55; color: #4a5056; }
.pj .pj-card--featured .pj-desc { font-size: 16px; }

/* ── Tags: labels only, not filters ── */
.pj .pj-tags {
  list-style: none;
  margin: 4px 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.pj .pj-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  padding: 4px 10px;
  border-radius: 999px;
  background: #f1f3f5;
  font-size: 12.5px;
  line-height: 1.3;
  color: #3d4248;
}

.pj-dot { flex: none; width: 7px; height: 7px; border-radius: 50%; }
.pj-dot.d-blue   { background: #4a90d9; }
.pj-dot.d-green  { background: #27ae60; }
.pj-dot.d-purple { background: #8e44ad; }
.pj-dot.d-gold   { background: #c0922b; }
.pj-dot.d-orange { background: #e67e22; }

/* ── Buttons. The .page__content prefix keeps Minimal Mistakes' link hover
   underline and visited color off them. ── */
.pj-actions {
  margin-top: auto;
  padding-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pj-card--featured .pj-actions { padding-top: 14px; }

.page__content .pj .pj-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-height: 44px;
  padding: 0 16px;
  border: 1px solid #d6dbe0;
  border-radius: 9px;
  background: #fff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: #222;
  text-decoration: none;
  transition: background-color .15s ease, border-color .15s ease;
}

.page__content .pj .pj-btn:hover {
  background: #f4f6f8;
  border-color: #9aa3ab;
  color: #222;
  text-decoration: none;
}

.page__content .pj .pj-btn:focus-visible {
  outline: 2px solid #222;
  outline-offset: 2px;
}

.pj-btn-icon {
  flex: none;
  width: 16px;
  height: 16px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* ── Closing tile: fills the last grid row and points to everything else ── */
.pj-more {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  min-width: 0;
  padding: 28px 24px;
  border: 1px dashed #cfd5db;
  border-radius: 14px;
  background: #fafbfc;
}

.pj-more .pj-actions { margin-top: 0; padding-top: 0; }

.pj-more-icon {
  width: 30px;
  height: 30px;
  fill: none;
  stroke: #222;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

@media (max-width: 560px) {
  .pj .pj-ribbon,
  .pj .pj-ribbon--sm { font-size: 12.5px; }
}

@media (prefers-reduced-motion: reduce) {
  .pj-card,
  .pj-art,
  .page__content .pj .pj-btn { transition: none; }
  .pj-card:hover,
  .pj-card:hover .pj-art { transform: none; }
}

/* ─── end Projects Page (v3) ─────────────────────────── */
```

## 7e. Check the page is centered

Minimal Mistakes floats `.page` to the right and keeps a left column free for the author sidebar, even with `author_profile: false`. Run the site and open `/projects/` at 1440px wide. If the "Projects" title and the cards sit right of center with an empty column on the left, add this rule to the v3 block. It only affects this page, through the `pj-page` class in the front matter:

```css
@media (min-width: 1024px) {
  .pj-page .page {
    float: none;
    width: 100%;
    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
    padding-inline: 0;
  }
}
```

Then confirm the page title's left edge lines up with the cards' left edge. Don't change the layout of any other page.

---

# Verification checklist

Run `bundle exec jekyll serve` and confirm:

1. The build has no errors and no missing-file warnings.
2. Nav reads Home, Resume, CV, Projects, Coursework, Fun. Resume opens `Evan_Lee_Resume.pdf`.
3. `/` shows the new recruiting sentence, the "Start with my Resume, CV, or Projects" line, and today's date. Its page source has `og:description` and `og:image`.
4. `/cv/`: Wing Assistant is first under 2026. Ergonosis is last under 2026 and gone from 2025. Every edit in Task 4 is in. CohortFlow links to the NeurIPS page. The only `TODO(evan)` left is the Wing logo.
5. `/coursework/`: title "Relevant Coursework", five semester sections, Summer 2024 last.
6. `/fun/`: the intro ends at "...take more pics."; Fall 2025 photo 9 reads "Oski sighting".
7. `/projects/`:
   - Featured row: Data Matchmaker with the 2nd place ribbon, EquiMatch with the 3rd of 50+ ribbon.
   - Grid order: CohortFlow (paper ribbon), ByT5 Akkadian OCR Correction, Acne Detection, CohortEx, Efficient Frontier, CapsuleDx, LyricCal, Avatar Arena, More on GitHub.
   - No Collina, no filter bar, no "Showing N of M" line.
   - All 10 covers load and scale to fill their 16:9 box. Every button link matches 7b.
   - At 1440, 1024, 768, and 390px wide: the featured cards sit side by side on wide screens and stack on narrow ones; the grid steps from 3 columns to 2 to 1; nothing scrolls sideways.
   - Hovering a card lifts it slightly and colors its border. Buttons never show an underline in any state. Tabbing to a button shows a dark outline.
8. `grep -rn "projects.js\|pj-toolbar\|pj-chip\|pj-stats\|Collina\|#tags=" _pages _includes _data assets` returns nothing.
9. No console errors on any page.
