(function(){
var l1=document.createElement('link');l1.rel='preconnect';l1.href='https://fonts.googleapis.com';document.head.appendChild(l1);
var l2=document.createElement('link');l2.rel='preconnect';l2.href='https://fonts.gstatic.com';l2.crossOrigin='anonymous';document.head.appendChild(l2);
var l3=document.createElement('link');l3.rel='stylesheet';l3.href='https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&display=swap';document.head.appendChild(l3);
var s=document.createElement('style');s.textContent="\n:root{--pp-ease:cubic-bezier(.22,1,.36,1)}\n.pp-rail a.is-active{background:#4F7CFF;box-shadow:0 0 12px rgba(79,124,255,.45)}\n@media (max-width:900px){.pp-rail{display:none}}\n#ledger,#held,#measured,#review{position:relative;isolation:isolate;perspective:1200px}\n#ledger::before,#held::before,#measured::before{\n  content:\"\";position:absolute;inset:-10% -5% auto;height:70%;pointer-events:none;z-index:0;\n  background:radial-gradient(ellipse at 30% 20%,rgba(36,87,230,.16),transparent 55%),\n             radial-gradient(ellipse at 80% 10%,rgba(20,184,122,.08),transparent 45%);\n  opacity:.9\n}\n#held::before{background:radial-gradient(ellipse at 70% 15%,rgba(240,162,2,.18),transparent 55%),radial-gradient(ellipse at 20% 40%,rgba(255,90,69,.08),transparent 50%)}\n#measured::before{background:radial-gradient(ellipse at 50% 0%,rgba(79,124,255,.14),transparent 60%)}\n#ledger > *,#held > *,#measured > *,#review > *{position:relative;z-index:1}\n.pp-page,.pp-section-1,.pp-body,.pp-claim-text,.pp-source,.pp-token-label,.pp-btn-primary,.pp-btn-secondary{font-family:\"Manrope\",system-ui,sans-serif!important}\n.pp-h2-1,.pp-brand,.pp-claim-text-1{font-family:\"Fraunces\",Georgia,serif!important;letter-spacing:-.02em}\n.pp-guide{\n  display:flex;align-items:center;gap:14px;max-width:40rem;margin:0 0 22px;\n  padding:12px 14px;border:1px solid #2a3348;background:rgba(14,20,36,.9);\n  transform-style:preserve-3d;transition:transform 280ms var(--pp-ease), border-color 280ms ease\n}\n.pp-guide:hover{transform:translateY(-2px) rotateX(2deg);border-color:#4F7CFF}\n.pp-guide canvas{width:52px;height:64px;flex:0 0 auto;display:block;border-radius:8px;background:linear-gradient(180deg,#121a2c,#0b1020)}\n.pp-guide p{margin:0;color:#f4f7ff;font:500 14px/1.45 Manrope,system-ui,sans-serif}\n.pp-guide small{display:block;margin-top:4px;color:#a8b0c4;font:600 10px/1.2 Manrope,system-ui,sans-serif;letter-spacing:.14em;text-transform:uppercase}\n.pp-stage{transform-style:preserve-3d;transition:transform 350ms var(--pp-ease)}\n.pp-claim-card,.pp-held,.pp-metric{\n  transform-style:preserve-3d;transform:translateZ(0) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(var(--ty,0px));\n  transition:transform 220ms var(--pp-ease), box-shadow 220ms var(--pp-ease), border-color 220ms ease;\n  will-change:transform;cursor:pointer;position:relative\n}\n.pp-claim-card::after,.pp-held::after,.pp-metric::after{\n  content:\"\";position:absolute;inset:0;pointer-events:none;border-radius:inherit;\n  background:linear-gradient(135deg,rgba(255,255,255,.06),transparent 40%);\n  opacity:0;transition:opacity 220ms ease\n}\n.pp-claim-card:hover::after,.pp-held:hover::after,.pp-metric:hover::after,.pp-claim-card.is-hot::after,.pp-held.is-hot::after,.pp-metric.is-hot::after{opacity:1}\n.pp-claim-card.is-hot,.pp-metric.is-hot{box-shadow:0 18px 40px rgba(7,11,22,.45), 0 0 0 1px rgba(79,124,255,.35)}\n.pp-held.is-hot{box-shadow:0 18px 40px rgba(7,11,22,.45), 0 0 0 1px rgba(240,162,2,.45)}\n.pp-claim-card.is-in,.pp-held.is-in,.pp-metric.is-in{animation:pp-rise 650ms var(--pp-ease) both}\n@keyframes pp-rise{from{opacity:0;transform:translateY(28px) rotateX(8deg) scale(.98)}to{opacity:1;transform:translateY(0) rotateX(0) scale(1)}}\n.pp-visual{transform:translateZ(24px);transition:transform 400ms var(--pp-ease), filter 400ms ease;filter:saturate(1.05)}\n#held.is-active .pp-visual{transform:translateZ(40px) rotateY(-4deg)}\n.pp-btn-primary,.pp-btn-secondary{transition:transform 220ms var(--pp-ease), background 220ms ease}\n.pp-btn-primary:hover,.pp-btn-secondary:hover{transform:translateY(-1px)}\n.pp-floor{\n  position:absolute;left:8%;right:8%;bottom:8px;height:1px;z-index:0;pointer-events:none;\n  background:linear-gradient(90deg,transparent,#2a3348,transparent);opacity:.7\n}\n@media (prefers-reduced-motion:reduce){\n  .pp-claim-card,.pp-held,.pp-metric,.pp-guide,.pp-visual{transition:none!important;animation:none!important;transform:none!important}\n}\n";document.head.appendChild(s);
})();

(function(){
  var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ids=['immersive','ledger','held','measured','review'];
  function markRail(){
    var y=window.scrollY+window.innerHeight*0.32, active='immersive';
    ids.forEach(function(id){var el=document.getElementById(id); if(el&&el.offsetTop<=y) active=id;});
    document.querySelectorAll('.pp-rail a').forEach(function(a){a.classList.toggle('is-active', a.getAttribute('href')==='#'+active);});
    ids.forEach(function(id){var el=document.getElementById(id); if(el) el.classList.toggle('is-active', id===active);});
  }
  window.addEventListener('scroll',markRail,{passive:true});
  markRail();

  var frame=document.querySelector('.pp-portal-iframe iframe')||document.querySelector('#immersive iframe');
  if(frame&&'IntersectionObserver' in window){
    new IntersectionObserver(function(entries){
      entries.forEach(function(en){try{en.target.contentWindow.postMessage(en.isIntersecting?'pp-resume':'pp-pause','*')}catch(e){}});
    },{threshold:0.2}).observe(frame);
  }

  function drawGuide(canvas, kind){
    var ctx=canvas.getContext('2d');
    var dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=52*dpr; canvas.height=64*dpr; ctx.scale(dpr,dpr);
    var accent=kind==='auditor'?'#f0a202':'#2457e6';
    var mint=kind==='auditor'?'#ff5a45':'#14b87a';
    function paint(t){
      ctx.clearRect(0,0,52,64);
      ctx.fillStyle='#0b1020'; ctx.fillRect(0,0,52,64);
      var bob=Math.sin(t*0.004)*2;
      ctx.fillStyle='#1a2744';
      ctx.beginPath(); ctx.roundRect(16,18+bob,20,22,8); ctx.fill();
      ctx.beginPath(); ctx.arc(26,14+bob,9,0,Math.PI*2); ctx.fill();
      ctx.fillStyle=accent; ctx.fillRect(18,12+bob,16,4);
      ctx.fillStyle=mint; ctx.beginPath(); ctx.arc(32,4+bob,3,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle=accent; ctx.lineWidth=2;
      ctx.beginPath(); ctx.moveTo(36,24+bob); ctx.quadraticCurveTo(46,20+Math.sin(t*0.01)*4,42,32+bob); ctx.stroke();
      if(kind==='auditor'){
        ctx.strokeStyle='rgba(240,162,2,.7)'; ctx.strokeRect(6,44,40,8);
      }
    }
    if(reduced){paint(0); return;}
    var start=performance.now();
    (function loop(now){ paint(now-start); requestAnimationFrame(loop); })(start);
  }

  function injectGuide(sectionId, kind, title, line){
    var sec=document.getElementById(sectionId);
    if(!sec||sec.querySelector('.pp-guide')) return;
    var box=document.createElement('div');
    box.className='pp-guide';
    box.innerHTML='<canvas width="52" height="64" aria-hidden="true"></canvas><div><p></p><small></small></div>';
    box.querySelector('p').textContent=line;
    box.querySelector('small').textContent=title;
    var heading=sec.querySelector('h2, .pp-h2-1, .pp-eyebrow');
    if(heading) sec.insertBefore(box, heading);
    else sec.prepend(box);
    drawGuide(box.querySelector('canvas'), kind);
  }

  injectGuide('ledger','scout','Scout · handoff','This is the real ledger. Hover a card—Approved CMS only. I leave the invented claims above.');
  injectGuide('held','auditor','Auditor · quarantine','Amber means held. This claim does not ship as public proof until a human approves a source.');
  injectGuide('measured','scout','Scout · measured','Observed Lighthouse scores from this build—not targets. Tilt the metrics to inspect.');

  function bindTilt(el){
    if(reduced) return;
    el.addEventListener('pointermove', function(e){
      var r=el.getBoundingClientRect();
      var px=(e.clientX-r.left)/r.width-0.5;
      var py=(e.clientY-r.top)/r.height-0.5;
      el.style.setProperty('--ry', (px*10).toFixed(2)+'deg');
      el.style.setProperty('--rx', (-py*8).toFixed(2)+'deg');
      el.style.setProperty('--ty', (-4).toFixed(1)+'px');
      el.classList.add('is-hot');
    });
    el.addEventListener('pointerleave', function(){
      el.style.setProperty('--ry','0deg');
      el.style.setProperty('--rx','0deg');
      el.style.setProperty('--ty','0px');
      el.classList.remove('is-hot');
    });
  }

  var cards=[].slice.call(document.querySelectorAll('.pp-claim-card, .pp-held, .pp-metric'));
  cards.forEach(bindTilt);

  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          en.target.classList.add('is-in');
          en.target.style.opacity='1';
          en.target.style.transform='none';
        }
      });
    },{threshold:0.14});
    ['#ledger','#held','#measured','#review'].forEach(function(sel){
      var el=document.querySelector(sel);
      if(!el) return;
      el.style.opacity='0';
      el.style.transform='translateY(24px)';
      el.style.transition='opacity 500ms cubic-bezier(.22,1,.36,1), transform 500ms cubic-bezier(.22,1,.36,1)';
      io.observe(el);
    });
    cards.forEach(function(c,i){
      c.style.animationDelay=(i%5)*70+'ms';
      io.observe(c);
    });
  }

  // Parallax depth on active section visuals
  if(!reduced){
    window.addEventListener('scroll', function(){
      var held=document.getElementById('held');
      if(!held) return;
      var vis=held.querySelector('.pp-visual');
      if(!vis) return;
      var r=held.getBoundingClientRect();
      var p=1-Math.min(1,Math.max(0,r.top/window.innerHeight));
      vis.style.transform='translateZ('+(20+p*28)+'px) rotateY('+(-p*6)+'deg)';
    },{passive:true});
  }

  // Floor lines for stage feel
  ['ledger','held','measured'].forEach(function(id){
    var sec=document.getElementById(id);
    if(!sec||sec.querySelector('.pp-floor')) return;
    var f=document.createElement('div'); f.className='pp-floor'; sec.appendChild(f);
  });
})();

