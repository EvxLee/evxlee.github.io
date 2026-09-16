---
title: "Projects"
permalink: /projects/
layout: single
author_profile: false
classes: wide
---

<p class="pj-intro">A collection of things I've built.</p>
<p class="pj-stats" hidden></p>

<link rel="stylesheet" href="/assets/css/custom.css">

<div class="pj">

  <!-- Filter toolbar. Chips are generated from the cards by projects.js, which also
       removes the `hidden` attribute, so without JS this whole bar stays out of the way.
       The Clear button is a sibling of the live region, not inside it, so screen readers
       only re-announce the count text. -->
  <div class="pj-toolbar" hidden>
    <div class="pj-chips" role="group" aria-label="Filter projects by tag"></div>
    <div class="pj-status-wrap">
      <p class="pj-status" role="status" aria-live="polite"></p>
      <button type="button" class="pj-clear" hidden>Clear</button>
    </div>
  </div>

  <!-- Featured = the two newest projects. Move the `pj-featured` class to change which
       cards get the heavier treatment (the "Featured" kicker is rendered from CSS).
       `data-cat` on a card is its first tag and drives the category colour (left rule,
       hover border); projects.js re-syncs it from the first tag pill at load. -->
  <div class="pj-grid">

  <article class="pj-card pj-featured" data-cat="NLP">
    <h3 class="pj-title">CohortEx</h3>
    <p class="pj-date">Jun 2026 - Jul 2026</p>
    <p class="pj-desc">Automated pipeline that reads biomedical papers and extracts who was in the study: conditions, age range, sex, and eligibility rules, as structured data.</p>
    <div class="pj-foot">
      <ul class="pj-tags">
        <li class="pj-tag" data-cat="NLP">NLP</li>
        <li class="pj-tag" data-cat="Healthcare">Healthcare</li>
      </ul>
      <a class="pj-link" href="https://github.com/EvxLee/Cohortex" target="_blank" rel="noopener">GitHub →</a>
    </div>
  </article>

  <article class="pj-card pj-featured" data-cat="NLP">
    <h3 class="pj-title">Collina</h3>
    <p class="pj-date">June 2026 - Aug 2026</p>
    <p class="pj-desc">Debate AI Referee fun game! On pause but hope to finish.</p>
    <div class="pj-foot">
      <ul class="pj-tags">
        <li class="pj-tag" data-cat="NLP">NLP</li>
        <li class="pj-tag" data-cat="Games">Games</li>
      </ul>
      <a class="pj-link" href="https://github.com/EvxLee/Collina" target="_blank" rel="noopener">GitHub →</a>
    </div>
  </article>

  <article class="pj-card" data-cat="Computer Vision">
    <h3 class="pj-title">Acne Detection</h3>
    <p class="pj-date">Apr 2026 – May 2026</p>
    <p class="pj-desc">Trained object detection models to localize acne lesions in facial photos, then built a classifier that had to identify acne in a completely different dermatology dataset it was never trained on.</p>
    <div class="pj-foot">
      <ul class="pj-tags">
        <li class="pj-tag" data-cat="Computer Vision">Computer Vision</li>
        <li class="pj-tag" data-cat="Machine Learning">Machine Learning</li>
        <li class="pj-tag" data-cat="Healthcare">Healthcare</li>
      </ul>
      <a class="pj-link" href="https://github.com/EvxLee/AcneDetection" target="_blank" rel="noopener">GitHub →</a>
    </div>
  </article>

  <article class="pj-card" data-cat="NLP">
    <h3 class="pj-title">Byt5 Akkadian OCR Correction</h3>
    <p class="pj-date">Jan 2026 - Apr 2026</p>
    <p class="pj-desc">Fine-tuned a byte-level language model to fix OCR errors in scanned Akkadian cuneiform transliterations, cutting character error rate by 74% so texts can enter FactGrid's public database with less manual cleanup.</p>
    <div class="pj-foot">
      <ul class="pj-tags">
        <li class="pj-tag" data-cat="NLP">NLP</li>
        <li class="pj-tag" data-cat="Machine Learning">Machine Learning</li>
      </ul>
      <a class="pj-link" href="https://github.com/EvxLee/Byt5-Akkadian-OCR-Correction" target="_blank" rel="noopener">GitHub →</a>
    </div>
  </article>

  <article class="pj-card" data-cat="Agentic AI">
    <h3 class="pj-title">Data Matchmaker Benchmark AI Agent</h3>
    <p class="pj-date">Dec 2025 - Jan 2026</p>
    <p class="pj-award"><svg class="pj-award-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/></svg><span class="pj-award-body"><span class="pj-award-label">Award</span> <span class="pj-award-text"><strong>2nd place</strong>, OpenAI-sponsored Finance Agent track, AgentX / AgentBeats (Berkeley RDI)</span></span></p>
    <p class="pj-desc">Evaluator agent that scores other AI agents’ accuracy on data integration tasks</p>
    <div class="pj-foot">
      <ul class="pj-tags">
        <li class="pj-tag" data-cat="Agentic AI">Agentic AI</li>
      </ul>
      <a class="pj-link" href="https://github.com/EvxLee/data-matchmaker-benchmark" target="_blank" rel="noopener">GitHub →</a>
    </div>
  </article>

  <article class="pj-card" data-cat="Finance">
    <h3 class="pj-title">Efficient Frontier</h3>
    <p class="pj-date">Dec 2025</p>
    <p class="pj-desc">Stock Time-Series Analysis & Portfolio Modeling. Data science and machine learning applications to financial market analysis using stock data from Yahoo Finance.</p>
    <div class="pj-foot">
      <ul class="pj-tags">
        <li class="pj-tag" data-cat="Finance">Finance</li>
        <li class="pj-tag" data-cat="Data Analysis">Data Analysis</li>
        <li class="pj-tag" data-cat="Machine Learning">Machine Learning</li>
      </ul>
      <a class="pj-link" href="https://github.com/EvxLee/Efficient-Frontier" target="_blank" rel="noopener">GitHub →</a>
    </div>
  </article>

  <article class="pj-card" data-cat="Computer Vision">
    <h3 class="pj-title">CapsuleDx</h3>
    <p class="pj-date">Dec 2025</p>
    <p class="pj-desc">Capsule Network project using chest X-ray image dataset to develop a classification model that can accurately distinguish between COVID-19 positive and negative cases.</p>
    <div class="pj-foot">
      <ul class="pj-tags">
        <li class="pj-tag" data-cat="Computer Vision">Computer Vision</li>
        <li class="pj-tag" data-cat="Machine Learning">Machine Learning</li>
        <li class="pj-tag" data-cat="Healthcare">Healthcare</li>
      </ul>
      <a class="pj-link" href="https://colab.research.google.com/drive/1-bXlW8Q1fiX6VBu5v-NBPpSm3bd-sDno?authuser=2" target="_blank" rel="noopener">Colab →</a>
    </div>
  </article>

  <article class="pj-card" data-cat="Machine Learning">
    <h3 class="pj-title">EquiMatch</h3>
    <p class="pj-date">Nov 2025</p>
    <p class="pj-award"><svg class="pj-award-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/></svg><span class="pj-award-body"><span class="pj-award-label">Award</span> <span class="pj-award-text"><strong>3rd of 50+ teams</strong>, UC Berkeley 7th Annual Datathon for Social Good</span></span></p>
    <p class="pj-desc">College matching platform designed to help underserved students find their perfect college based on equity metrics.</p>
    <div class="pj-foot">
      <ul class="pj-tags">
        <li class="pj-tag" data-cat="Machine Learning">Machine Learning</li>
        <li class="pj-tag" data-cat="Data Analysis">Data Analysis</li>
      </ul>
      <a class="pj-link" href="https://github.com/EvxLee/EquiMatch" target="_blank" rel="noopener">GitHub →</a>
    </div>
  </article>

  <article class="pj-card" data-cat="NLP">
    <h3 class="pj-title">LyricCal</h3>
    <p class="pj-date">Sep 2025 – Dec 2025</p>
    <p class="pj-desc">Personalized song recommender that analyzes song mood and acoustic features to find mathematically most similar tracks.</p>
    <div class="pj-foot">
      <ul class="pj-tags">
        <li class="pj-tag" data-cat="NLP">NLP</li>
        <li class="pj-tag" data-cat="Machine Learning">Machine Learning</li>
      </ul>
      <a class="pj-link" href="https://github.com/EvxLee/LyricCal" target="_blank" rel="noopener">GitHub →</a>
    </div>
  </article>

  <article class="pj-card" data-cat="Games">
    <h3 class="pj-title">Avatar Arena</h3>
    <p class="pj-date">Jun 2025</p>
    <p class="pj-desc">Browser turn-based RPG built using HTML, CSS, and JavaScript.</p>
    <div class="pj-foot">
      <ul class="pj-tags">
        <li class="pj-tag" data-cat="Games">Games</li>
        <li class="pj-tag" data-cat="Web">Web</li>
      </ul>
      <a class="pj-link" href="https://github.com/EvxLee/AvatarArena" target="_blank" rel="noopener">GitHub →</a>
    </div>
  </article>

  </div>
</div>

<script src="/assets/js/projects.js"></script>
