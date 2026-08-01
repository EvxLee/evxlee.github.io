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
