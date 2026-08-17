/**
 * ProofPress below-world layer
 * Adapts 21st interaction patterns into Webflow shell — does NOT replace CMS ledger.
 *
 * References:
 * 1. https://21st.dev/@tom_ui/components/tilt-card — pointer spotlight / glare
 * 2. https://21st.dev/@ruixen.ui/components/scroll-tilted-grid — scroll rise → focus → exit tilt
 * 3. https://21st.dev/@kedhareswer.12110626/components/scroll-cards — depth-stack chapter feel
 *
 * Tokens: design-system/ProofPress/MASTER.md
 */
(function () {
  var l1 = document.createElement('link');
  l1.rel = 'preconnect';
  l1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(l1);
  var l2 = document.createElement('link');
  l2.rel = 'preconnect';
  l2.href = 'https://fonts.gstatic.com';
  l2.crossOrigin = 'anonymous';
  document.head.appendChild(l2);
  var l3 = document.createElement('link');
  l3.rel = 'stylesheet';
  l3.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&display=swap';
  document.head.appendChild(l3);

  var css = [
    ':root{--pp-ease:cubic-bezier(.22,1,.36,1);--pp-ink:#070B16;--pp-signal:#2457E6;--pp-signal-soft:#4F7CFF;--pp-mint:#14B87A;--pp-amber:#F0A202;--pp-line:#2A3348;--pp-paper:#F4F7FF;--pp-mist:#A8B0C4}',
    '.pp-rail a.is-active{background:var(--pp-signal-soft);box-shadow:0 0 12px rgba(79,124,255,.45)}',
    '@media (max-width:900px){.pp-rail{display:none}}',
    '#ledger,#held,#measured,#review{position:relative;isolation:isolate;perspective:1400px}',
    '#ledger::before,#held::before,#measured::before{content:"";position:absolute;inset:-12% -6% auto;height:72%;pointer-events:none;z-index:0;opacity:.95}',
    '#ledger::before{background:radial-gradient(ellipse at 28% 18%,rgba(36,87,230,.18),transparent 55%),radial-gradient(ellipse at 82% 8%,rgba(20,184,122,.1),transparent 48%)}',
    '#held::before{background:radial-gradient(ellipse at 72% 12%,rgba(240,162,2,.2),transparent 55%),radial-gradient(ellipse at 18% 42%,rgba(255,90,69,.1),transparent 50%)}',
    '#measured::before{background:radial-gradient(ellipse at 50% 0%,rgba(79,124,255,.16),transparent 62%)}',
    '#ledger > *,#held > *,#measured > *,#review > *{position:relative;z-index:1}',
    '.pp-page,.pp-section-1,.pp-body,.pp-claim-text,.pp-source,.pp-token-label,.pp-btn-primary,.pp-btn-secondary{font-family:"Manrope",system-ui,sans-serif!important}',
    '.pp-h2-1,.pp-brand,.pp-claim-text-1{font-family:"Fraunces",Georgia,serif!important;letter-spacing:-.02em}',
    '.pp-guide{display:flex;align-items:center;gap:14px;max-width:40rem;margin:0 0 22px;padding:12px 14px;border:1px solid var(--pp-line);background:rgba(14,20,36,.92);transform-style:preserve-3d;transition:transform 280ms var(--pp-ease),border-color 280ms ease}',
    '.pp-guide:hover,.pp-guide:focus-within{transform:translateY(-2px) rotateX(2deg);border-color:var(--pp-signal-soft)}',
    '.pp-guide canvas{width:52px;height:64px;flex:0 0 auto;display:block;border-radius:8px;background:linear-gradient(180deg,#121a2c,#0b1020)}',
    '.pp-guide p{margin:0;color:var(--pp-paper);font:500 14px/1.45 Manrope,system-ui,sans-serif}',
    '.pp-guide small{display:block;margin-top:4px;color:var(--pp-mist);font:600 10px/1.2 Manrope,system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase}',
    /* 21st Tilt Card → spotlight cards */
    '.pp-claim-card,.pp-held,.pp-metric{--rx:0deg;--ry:0deg;--ty:0px;--sx:50%;--sy:40%;transform-style:preserve-3d;transform:translateZ(0) rotateX(var(--rx)) rotateY(var(--ry)) translateY(var(--ty)) scale(var(--sc,1));transition:transform 220ms var(--pp-ease),box-shadow 220ms var(--pp-ease);will-change:transform;cursor:pointer;position:relative;overflow:hidden;outline:none}',
    '.pp-claim-card:focus-visible,.pp-held:focus-visible,.pp-metric:focus-visible{box-shadow:0 0 0 2px var(--pp-ink),0 0 0 4px var(--pp-signal-soft)}',
    '.pp-claim-card .pp-spot,.pp-held .pp-spot,.pp-metric .pp-spot{position:absolute;inset:-20%;pointer-events:none;opacity:0;transition:opacity 220ms ease;background:radial-gradient(circle at var(--sx) var(--sy),rgba(255,255,255,.16),transparent 42%)}',
    '.pp-claim-card.is-hot .pp-spot,.pp-held.is-hot .pp-spot,.pp-metric.is-hot .pp-spot,.pp-claim-card:focus-visible .pp-spot,.pp-held:focus-visible .pp-spot,.pp-metric:focus-visible .pp-spot{opacity:1}',
    '.pp-claim-card.is-hot,.pp-metric.is-hot{box-shadow:0 20px 44px rgba(7,11,22,.48),0 0 0 1px rgba(79,124,255,.4)}',
    '.pp-held.is-hot{box-shadow:0 20px 44px rgba(7,11,22,.48),0 0 0 1px rgba(240,162,2,.5)}',
    /* 21st ScrollTiltedGrid → scroll progress states */
    '.pp-claim-card.is-scroll,.pp-held.is-scroll,.pp-metric.is-scroll{transition:transform 80ms linear,box-shadow 220ms var(--pp-ease)}',
    '.pp-visual{transform:translateZ(28px);transition:transform 400ms var(--pp-ease),filter 400ms ease;filter:saturate(1.05)}',
    /* 21st Scroll Cards → depth stack on held */
    '#held.pp-depth-active .pp-held{transform:translateZ(36px) rotateX(var(--rx)) rotateY(var(--ry)) scale(1.02)}',
    '#held .pp-barrier{position:absolute;left:8%;right:8%;top:42%;height:2px;z-index:0;pointer-events:none;background:linear-gradient(90deg,transparent,rgba(240,162,2,.55),transparent);box-shadow:0 0 18px rgba(240,162,2,.35);opacity:0;transition:opacity 400ms var(--pp-ease)}',
    '#held.is-active .pp-barrier{opacity:1}',
    '.pp-btn-primary,.pp-btn-secondary{transition:transform 220ms var(--pp-ease),background 220ms ease;min-height:44px}',
    '.pp-btn-primary:hover,.pp-btn-secondary:hover{transform:translateY(-1px)}',
    '.pp-floor{position:absolute;left:8%;right:8%;bottom:8px;height:1px;z-index:0;pointer-events:none;background:linear-gradient(90deg,transparent,var(--pp-line),transparent);opacity:.7}',
    '.pp-metric .pp-claim-text-1{font-variant-numeric:tabular-nums}',
    '@media (prefers-reduced-motion:reduce){.pp-claim-card,.pp-held,.pp-metric,.pp-guide,.pp-visual{transition:none!important;animation:none!important;transform:none!important}.pp-claim-card .pp-spot,.pp-held .pp-spot,.pp-metric .pp-spot,#held .pp-barrier{opacity:0!important}}'
  ].join('');

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduced = mq.matches;
  mq.addEventListener('change', function (e) { reduced = e.matches; });

  var ids = ['immersive', 'ledger', 'held', 'measured', 'review'];
  var frame = document.querySelector('.pp-portal-iframe iframe') || document.querySelector('#immersive iframe');
  function markRail() {
    var y = window.scrollY + window.innerHeight * 0.32;
    var active = 'immersive';
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= y) active = id;
    });
    document.querySelectorAll('.pp-rail a').forEach(function (a) {
      a.classList.toggle('is-active', a.getAttribute('href') === '#' + active);
    });
    ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.classList.toggle('is-active', id === active);
    });
    if (frame && frame.contentWindow) {
      try {
        frame.contentWindow.postMessage(active === 'immersive' ? 'pp-page-loud' : 'pp-page-quiet', '*');
      } catch (e) {}
    }
  }
  window.addEventListener('scroll', markRail, { passive: true });
  markRail();

  if (frame && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        try {
          en.target.contentWindow.postMessage(en.isIntersecting ? 'pp-resume' : 'pp-pause', '*');
        } catch (e) {}
      });
    }, { threshold: 0.2 }).observe(frame);
  }

  function drawGuide(canvas, kind) {
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = 52 * dpr;
    canvas.height = 64 * dpr;
    ctx.scale(dpr, dpr);
    var accent = kind === 'auditor' ? '#f0a202' : '#2457e6';
    var mint = kind === 'auditor' ? '#ff5a45' : '#14b87a';
    function paint(t) {
      ctx.clearRect(0, 0, 52, 64);
      ctx.fillStyle = '#0b1020';
      ctx.fillRect(0, 0, 52, 64);
      var bob = reduced ? 0 : Math.sin(t * 0.004) * 2;
      ctx.fillStyle = '#1a2744';
      ctx.beginPath();
      ctx.moveTo(24, 18 + bob);
      ctx.arcTo(36, 18 + bob, 36, 40 + bob, 8);
      ctx.arcTo(36, 40 + bob, 16, 40 + bob, 8);
      ctx.arcTo(16, 40 + bob, 16, 18 + bob, 8);
      ctx.arcTo(16, 18 + bob, 36, 18 + bob, 8);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.arc(26, 14 + bob, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = accent;
      ctx.fillRect(18, 12 + bob, 16, 4);
      ctx.fillStyle = mint;
      ctx.beginPath();
      ctx.arc(32, 4 + bob, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(36, 24 + bob);
      ctx.quadraticCurveTo(46, 20 + (reduced ? 0 : Math.sin(t * 0.01) * 4), 42, 32 + bob);
      ctx.stroke();
      if (kind === 'auditor') {
        ctx.strokeStyle = 'rgba(240,162,2,.7)';
        ctx.strokeRect(6, 44, 40, 8);
      }
    }
    if (reduced) {
      paint(0);
      return;
    }
    var start = performance.now();
    (function loop(now) {
      paint(now - start);
      requestAnimationFrame(loop);
    })(start);
  }

  function injectGuide(sectionId, kind, title, line) {
    var sec = document.getElementById(sectionId);
    if (!sec || sec.querySelector('.pp-guide')) return;
    var box = document.createElement('div');
    box.className = 'pp-guide';
    box.innerHTML = '<canvas width="52" height="64" aria-hidden="true"></canvas><div><p></p><small></small></div>';
    box.querySelector('p').textContent = line;
    box.querySelector('small').textContent = title;
    var heading = sec.querySelector('h2, .pp-h2-1, .pp-eyebrow');
    if (heading) sec.insertBefore(box, heading);
    else sec.prepend(box);
    drawGuide(box.querySelector('canvas'), kind);
  }

  injectGuide('ledger', 'scout', 'Scout · handoff', 'This is the real ledger. Hover or focus a card—Approved CMS only.');
  injectGuide('held', 'auditor', 'Auditor · quarantine', 'Amber means held. This claim does not ship as public proof until a human approves a source.');
  injectGuide('measured', 'scout', 'Scout · measured', 'Observed Lighthouse scores from this build—not targets. Inspect the metrics.');

  function ensureSpot(el) {
    if (!el.querySelector('.pp-spot')) {
      var spot = document.createElement('span');
      spot.className = 'pp-spot';
      spot.setAttribute('aria-hidden', 'true');
      el.appendChild(spot);
    }
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
  }

  function bindTiltSpotlight(el) {
    ensureSpot(el);
    function setFromPoint(clientX, clientY, hot) {
      var r = el.getBoundingClientRect();
      var px = (clientX - r.left) / r.width - 0.5;
      var py = (clientY - r.top) / r.height - 0.5;
      if (!reduced) {
        el.style.setProperty('--ry', (px * 12).toFixed(2) + 'deg');
        el.style.setProperty('--rx', (-py * 9).toFixed(2) + 'deg');
        el.style.setProperty('--ty', '-5px');
        el.style.setProperty('--sc', '1.015');
      }
      el.style.setProperty('--sx', ((px + 0.5) * 100).toFixed(1) + '%');
      el.style.setProperty('--sy', ((py + 0.5) * 100).toFixed(1) + '%');
      el.classList.toggle('is-hot', !!hot);
    }
    function reset() {
      el.style.setProperty('--ry', '0deg');
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ty', '0px');
      el.style.setProperty('--sc', '1');
      el.classList.remove('is-hot');
    }
    el.addEventListener('pointermove', function (e) {
      setFromPoint(e.clientX, e.clientY, true);
    });
    el.addEventListener('pointerleave', reset);
    el.addEventListener('blur', reset);
    el.addEventListener('focus', function () {
      var r = el.getBoundingClientRect();
      setFromPoint(r.left + r.width * 0.5, r.top + r.height * 0.35, true);
    });
  }

  var cards = [].slice.call(document.querySelectorAll('.pp-claim-card, .pp-held, .pp-metric'));
  cards.forEach(bindTiltSpotlight);

  /* ScrollTiltedGrid: map viewport progress → tilt/scale */
  function updateScrollTilt() {
    if (reduced) return;
    var vh = window.innerHeight || 1;
    cards.forEach(function (el) {
      if (el.classList.contains('is-hot')) return;
      var r = el.getBoundingClientRect();
      var mid = r.top + r.height * 0.5;
      var p = (mid / vh) * 2 - 1; /* -1 top … 0 center … 1 bottom */
      var enter = Math.max(0, Math.min(1, 1 - Math.abs(p)));
      var tiltX = (1 - enter) * (p < 0 ? 10 : -6);
      var ty = (1 - enter) * (p > 0 ? 18 : -8);
      var sc = 0.96 + enter * 0.04;
      el.classList.add('is-scroll');
      el.style.setProperty('--rx', tiltX.toFixed(2) + 'deg');
      el.style.setProperty('--ry', (p * -4).toFixed(2) + 'deg');
      el.style.setProperty('--ty', ty.toFixed(1) + 'px');
      el.style.setProperty('--sc', sc.toFixed(3));
    });
  }
  window.addEventListener('scroll', updateScrollTilt, { passive: true });
  window.addEventListener('resize', updateScrollTilt);
  updateScrollTilt();

  /* Held depth barrier (scroll-cards stack cue) */
  var held = document.getElementById('held');
  if (held && !held.querySelector('.pp-barrier')) {
    var bar = document.createElement('div');
    bar.className = 'pp-barrier';
    bar.setAttribute('aria-hidden', 'true');
    held.appendChild(bar);
  }

  /* Measured: count-up when entering view */
  function animateCount(el) {
    var target = el.getAttribute('data-pp-count');
    if (!target || el.getAttribute('data-pp-done')) return;
    el.setAttribute('data-pp-done', '1');
    if (reduced || !/^\d+$/.test(target)) {
      el.textContent = target;
      return;
    }
    var end = parseInt(target, 10);
    var start = performance.now();
    var dur = 900;
    (function tick(now) {
      var t = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(end * eased));
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    })(start);
  }

  document.querySelectorAll('#measured .pp-claim-text-1').forEach(function (el) {
    var raw = (el.textContent || '').trim();
    if (/^\d+$/.test(raw)) {
      el.setAttribute('data-pp-count', raw);
      el.textContent = reduced ? raw : '0';
    }
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.style.opacity = '1';
        en.target.style.transform = 'none';
        if (en.target.id === 'held') en.target.classList.add('pp-depth-active');
        if (en.target.id === 'measured') {
          en.target.querySelectorAll('[data-pp-count]').forEach(animateCount);
        }
      });
    }, { threshold: 0.14 });

    ['#ledger', '#held', '#measured', '#review'].forEach(function (sel) {
      var el = document.querySelector(sel);
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 500ms cubic-bezier(.22,1,.36,1), transform 500ms cubic-bezier(.22,1,.36,1)';
      io.observe(el);
    });
  }

  if (!reduced) {
    window.addEventListener('scroll', function () {
      var h = document.getElementById('held');
      if (!h) return;
      var vis = h.querySelector('.pp-visual');
      if (!vis) return;
      var r = h.getBoundingClientRect();
      var p = 1 - Math.min(1, Math.max(0, r.top / window.innerHeight));
      vis.style.transform = 'translateZ(' + (20 + p * 32) + 'px) rotateY(' + (-p * 7) + 'deg)';
    }, { passive: true });
  }

  ['ledger', 'held', 'measured'].forEach(function (id) {
    var sec = document.getElementById(id);
    if (!sec || sec.querySelector('.pp-floor')) return;
    var f = document.createElement('div');
    f.className = 'pp-floor';
    f.setAttribute('aria-hidden', 'true');
    sec.appendChild(f);
  });
})();
