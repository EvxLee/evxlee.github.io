(function () {
  var carousels = document.querySelectorAll('.photo-carousel');
  if (!carousels.length) return;

  // One lightbox is shared by every carousel on the page.
  var box = document.createElement('div');
  box.className = 'photo-lightbox';
  box.setAttribute('aria-hidden', 'true');
  box.innerHTML =
    '<button class="photo-lightbox-close" type="button" aria-label="Close">&times;</button>' +
    '<button class="photo-lightbox-btn prev" type="button" aria-label="Previous photo">&#8249;</button>' +
    '<img alt="">' +
    '<button class="photo-lightbox-btn next" type="button" aria-label="Next photo">&#8250;</button>' +
    '<p class="photo-lightbox-caption"></p>';
  document.body.appendChild(box);

  var boxImg     = box.querySelector('img');
  var boxCaption = box.querySelector('.photo-lightbox-caption');
  var openOn     = null; // carousel currently shown in the lightbox

  function openBox(carousel) {
    openOn = carousel;
    paintBox();
    box.classList.add('open');
    box.setAttribute('aria-hidden', 'false');
    document.body.classList.add('photo-lightbox-lock');
  }

  function closeBox() {
    box.classList.remove('open');
    box.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('photo-lightbox-lock');
    if (openOn) openOn.focus();
    openOn = null;
  }

  function paintBox() {
    if (!openOn) return;
    var slide = openOn.querySelector('.photo-slide.active');
    boxImg.src = slide.dataset.full;
    boxImg.alt = slide.querySelector('img').alt;
    boxCaption.textContent = openOn.querySelector('.photo-caption.active').textContent;

    var multi = openOn.querySelectorAll('.photo-slide').length > 1;
    box.querySelectorAll('.photo-lightbox-btn').forEach(function (b) {
      b.style.display = multi ? '' : 'none';
    });
  }

  box.querySelector('.photo-lightbox-close').addEventListener('click', closeBox);
  box.querySelector('.photo-lightbox-btn.prev').addEventListener('click', function (e) {
    e.stopPropagation();
    if (openOn) openOn.photoGoTo(openOn.photoIndex - 1);
  });
  box.querySelector('.photo-lightbox-btn.next').addEventListener('click', function (e) {
    e.stopPropagation();
    if (openOn) openOn.photoGoTo(openOn.photoIndex + 1);
  });
  box.addEventListener('click', function (e) {
    if (e.target === box) closeBox(); // click the backdrop to dismiss
  });

  document.addEventListener('keydown', function (e) {
    if (!openOn) return;
    if (e.key === 'Escape') closeBox();
    else if (e.key === 'ArrowLeft') openOn.photoGoTo(openOn.photoIndex - 1);
    else if (e.key === 'ArrowRight') openOn.photoGoTo(openOn.photoIndex + 1);
  });

  carousels.forEach(function (c) {
    var slides   = c.querySelectorAll('.photo-slide');
    var captions = c.querySelectorAll('.photo-caption');
    var thumbs   = c.querySelectorAll('.photo-thumb');
    var strip    = c.querySelector('.photo-filmstrip');
    var counter  = c.querySelector('.photo-counter');
    if (!slides.length) return;

    c.photoIndex = 0;

    c.photoGoTo = function (n) {
      var next = ((n % slides.length) + slides.length) % slides.length;
      slides[c.photoIndex].classList.remove('active');
      captions[c.photoIndex].classList.remove('active');
      if (thumbs.length) {
        thumbs[c.photoIndex].classList.remove('active');
        thumbs[c.photoIndex].setAttribute('aria-selected', 'false');
      }

      c.photoIndex = next;

      slides[next].classList.add('active');
      captions[next].classList.add('active');
      if (thumbs.length) {
        thumbs[next].classList.add('active');
        thumbs[next].setAttribute('aria-selected', 'true');
      }
      if (counter && slides.length > 1) {
        counter.textContent = (next + 1) + ' / ' + slides.length;
      }

      // Keep the active thumbnail centred without scrolling the page itself.
      if (strip) {
        var t = thumbs[next];
        strip.scrollLeft = t.offsetLeft - (strip.clientWidth - t.clientWidth) / 2;
      }

      // Warm the neighbouring full-size images so flipping feels instant.
      [next - 1, next + 1].forEach(function (i) {
        var s = slides[((i % slides.length) + slides.length) % slides.length];
        s.querySelector('img').loading = 'eager';
      });

      if (openOn === c) paintBox();
    };

    // Single-photo semesters render without arrows or a filmstrip.
    var prevBtn = c.querySelector('.photo-btn.prev');
    var nextBtn = c.querySelector('.photo-btn.next');
    if (prevBtn) prevBtn.addEventListener('click', function () { c.photoGoTo(c.photoIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { c.photoGoTo(c.photoIndex + 1); });

    thumbs.forEach(function (t) {
      t.addEventListener('click', function () {
        c.photoGoTo(parseInt(t.dataset.index, 10));
      });
    });

    c.querySelector('.photo-frame').addEventListener('click', function () {
      openBox(c);
    });

    // Arrow keys work once the carousel itself has focus.
    c.addEventListener('keydown', function (e) {
      if (openOn) return; // the lightbox owns the keyboard while it is open
      if (e.key === 'ArrowLeft') { e.preventDefault(); c.photoGoTo(c.photoIndex - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); c.photoGoTo(c.photoIndex + 1); }
    });

    // Horizontal swipe on touch devices.
    var startX = null, startY = null;
    c.addEventListener('touchstart', function (e) {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });
    c.addEventListener('touchend', function (e) {
      if (startX === null) return;
      var dx = e.changedTouches[0].clientX - startX;
      var dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
        c.photoGoTo(c.photoIndex + (dx < 0 ? 1 : -1));
      }
      startX = startY = null;
    }, { passive: true });

    c.photoGoTo(0);
  });

  // Swipe inside the lightbox too.
  var lbX = null, lbY = null;
  box.addEventListener('touchstart', function (e) {
    lbX = e.touches[0].clientX;
    lbY = e.touches[0].clientY;
  }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (lbX === null || !openOn) return;
    var dx = e.changedTouches[0].clientX - lbX;
    var dy = e.changedTouches[0].clientY - lbY;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) {
      openOn.photoGoTo(openOn.photoIndex + (dx < 0 ? 1 : -1));
    }
    lbX = lbY = null;
  }, { passive: true });
})();
