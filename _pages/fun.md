---
title: "Photos"
permalink: /fun/
layout: single
author_profile: false
fun_tab: photos
---

<link rel="stylesheet" href="/assets/css/custom.css">

{% include fun-nav.html %}

A collection of photos from things outside of school. I don't usually like to take photos, so hopefully this will encourage me to take more pics. Photos before September 2026 are on an old Iphone 14...

Each semester is its own reel — flip left to right with the arrows (or arrow keys), jump around with the thumbnails, and click a photo to blow it up.

{% for sem in site.data.photos %}
## <span class="fun-section-icon">{{ sem.icon }}</span> {{ sem.name }}

{% include photo-carousel.html semester=sem %}

{% unless forloop.last %}---{% endunless %}
{% endfor %}

<script src="/assets/js/photo-slideshow.js"></script>
