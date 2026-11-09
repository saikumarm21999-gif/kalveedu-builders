document.addEventListener("DOMContentLoaded", function(){
  const CITY = {
    dpi:{label:'Dharmapuri', eyebrow:'House construction · Dharmapuri, Krishnagiri & nearby villages',
      rates:{essential:1950, standard:2300, premium:2700}, labour:399, shell:1399,
      appr:15000, soil:9000, d3:6000, wall:1150,
      authority:'DTCP, town panchayat or village panchayat, depending on where your plot is.',
      apTime:'30–60 days', phone:'+91 63810 97772', office:'Office: Near Senthilkumar, Dharmapuri 636701'},
    blr:{label:'Bengaluru', eyebrow:'House construction · Bengaluru & surrounding layouts',
      rates:{essential:2050, standard:2400, premium:2800}, labour:499, shell:1549,
      appr:25000, soil:12000, d3:9000, wall:1450,
      authority:'BBMP / Greater Bengaluru, BDA, BMRDA or gram panchayat, depending on where your plot is.',
      apTime:'30–90 days', phone:'+91 63810 97772', office:'Office: Near Senthilkumar, Dharmapuri 636701 · Bengaluru visits by appointment'}
  };
  const PKG = [
    {id:'essential', name:'Essential', for:'Solid, no-frills house for a family or rental income.'},
    {id:'standard', name:'Standard', for:'Our most chosen package. Better tiles, branded fittings.', featured:true},
    {id:'premium', name:'Premium', for:'Higher finishes, UPVC windows, larger allowances.'}
  ];
  const SPEC = [
    ['g','Structure'],
    ['Cement','Ramco / Dalmia / Chettinad, PPC & OPC 53','UltraTech / Ramco, OPC 53','UltraTech / Ramco, OPC 53'],
    ['Steel','Fe550D, ISI brand (Kamachi / Agni)','Fe550D, JSW Neosteel','Fe550D, Tata Tiscon'],
    ['Walls','Solid concrete block, 6" / 4"','Wire-cut red brick or interlock','Wire-cut red brick'],
    ['Concrete','M20, design mix','M20 / M25 as per structural design','M25, design mix'],
    ['Ceiling height','10 ft floor to floor','10 ft floor to floor','10.5 ft floor to floor'],
    ['g','Flooring'],
    ['Living, rooms & kitchen','Vitrified tiles up to ₹45/sq.ft','Vitrified tiles up to ₹60/sq.ft','Large-format tiles or granite up to ₹110/sq.ft'],
    ['Staircase','Granite up to ₹80/sq.ft','Granite up to ₹110/sq.ft','Granite up to ₹160/sq.ft'],
    ['Balcony & parking','Anti-skid tiles up to ₹40/sq.ft','Anti-skid tiles up to ₹55/sq.ft','Anti-skid tiles up to ₹75/sq.ft'],
    ['g','Kitchen & bathrooms'],
    ['Kitchen counter','Black granite, single sink up to ₹2,500','Black granite, sink up to ₹4,500','Granite or quartz, sink up to ₹8,000'],
    ['Bathroom wall tiles','Up to 7 ft, ₹40/sq.ft','Up to 7 ft, ₹55/sq.ft','Full height, ₹80/sq.ft'],
    ['Sanitary & CP fittings','₹25,000 per bathroom (Cera / Parryware)','₹40,000 per bathroom (Hindware / Parryware)','₹65,000 per bathroom (Jaquar)'],
    ['Plumbing pipes','CPVC / UPVC, Ashirvad or Supreme','CPVC / UPVC, Ashirvad','CPVC / UPVC, Astral or Ashirvad'],
    ['g','Doors & windows'],
    ['Main door','Teak frame, flush shutter with veneer, ₹20,000','Teak frame and teak shutter, ₹35,000','Designer teak door, ₹55,000'],
    ['Internal doors','Sal wood frame, laminated flush door, ₹8,000 each','Sal wood frame, laminated flush door, ₹11,000 each','Teak frame, membrane / laminated, ₹15,000 each'],
    ['Bathroom doors','PVC','WPC','WPC with frame'],
    ['Windows','Aluminium sliding with MS grill','Aluminium sliding with MS grill, mosquito mesh','UPVC with grill and mosquito mesh'],
    ['g','Electrical & painting'],
    ['Wires & switches','Finolex / Polycab wires, Anchor Roma switches','Finolex / Polycab wires, Legrand switches','Polycab / Havells wires, Schneider / Legrand modular'],
    ['Interior paint','Putty + Asian Tractor Emulsion','Putty + Asian Apcolite Premium Emulsion','Putty + Asian Royale'],
    ['Exterior paint','Primer + Asian Ace Exterior','Primer + Asian Apex','Primer + Asian Apex Ultima'],
    ['g','Water & services'],
    ['Underground sump','6,000 litres','8,000 litres','10,000 litres'],
    ['Overhead tank','1,000 litre, branded','1,500 litre, branded','2,000 litre, branded'],
    ['Septic tank','As per site, 6,000 litres','As per site, 8,000 litres','As per site, 10,000 litres'],
    ['g','Design & warranty'],
    ['Drawings','2D plan + structural drawing','2D plan + structural + basic 3D elevation','2D plan + structural + full 3D elevation'],
    ['Warranty','10-yr structure, 1-yr waterproofing','10-yr structure, 2-yr waterproofing','10-yr structure, 3-yr waterproofing']
  ];
  const STAGES_COST = [
    ['Design & site setup',3],['Foundation & plinth',13],['RCC columns, beams & slabs',27],['Brickwork & plastering',14],
    ['Electrical',7],['Plumbing & sanitary',9],['Flooring & tiling',10],['Doors & windows',8],['Painting',6],['Handover & cleaning',3]
  ];
  const PAY = [
    ['Booking','Signed quote and site visit report',2],
    ['Drawings final','2D plan, structural drawing and elevation approved by you',8],
    ['Foundation & plinth','Footing size, steel and plinth level photos, engineer sign-off',15],
    ['All slabs cast','Slab steel check before each pour, cube test results',25],
    ['Brickwork & plaster','Wall alignment, plaster finish, curing log',15],
    ['Electrical & plumbing rough-in','Pipe and conduit layout photos, pressure test',10],
    ['Flooring & tiling','Tile brands and bills against your allowance',10],
    ['Painting & fittings','Paint brand, fixture list against package',10],
    ['Handover','Walk-through, snag list closed, keys and warranty card',5]
  ];
  const STAGES_SHELL = [['Design & site setup',5],['Foundation & plinth',22],['RCC columns, beams & slabs',40],['Brickwork & plastering',25],['Conduits, sleeves & weathering course',8]];
  const PAY_SHELL = [
    ['Booking','Signed quote and site visit report',5],
    ['Drawings final','2D plan and structural drawing approved by you',5],
    ['Foundation & plinth','Footing size, steel and plinth level photos, engineer sign-off',20],
    ['All slabs cast','Slab steel check before each pour, cube test results',35],
    ['Brickwork & plaster','Wall alignment, plaster finish, curing log',25],
    ['Structure handover','Conduits, sleeves and terrace slope checked; drawings handed over',10]
  ];
  const PAY_LABOUR = [
    ['Booking','Signed scope and labour rate',5],
    ['Foundation & plinth','Engineer sign-off on footing and plinth',15],
    ['All slabs cast','Slab check before each pour',30],
    ['Brickwork & plaster','Wall alignment and plaster finish',20],
    ['Electrical, plumbing & flooring','Layout photos and level checks',20],
    ['Finishing & handover','Snag list closed',10]
  ];
  const TRACK = [
    ['done','Site setup & soil test','6 Jul 2026','Completed'],
    ['done','Foundation & plinth','12 Aug 2026','Completed'],
    ['done','Ground floor slab','19 Sep 2026','Completed'],
    ['now','First floor brickwork','This week','In progress'],
    ['','First floor slab','Target 14 Nov 2026',''],
    ['','Plastering & electrical rough-in','Target Dec 2026',''],
    ['','Flooring, painting & fittings','Target Jan 2027',''],
    ['','Handover','Target 20 Jan 2027','']
  ];

  const st = {city:'dpi', ct:'turnkey', pkg:'standard'};
  try{ const c = localStorage.getItem('nh-city'); if(c && CITY[c]) st.city = c; }catch(e){}

  const NULLEL = new Proxy(function(){}, {
    get(t, k){ if(k === Symbol.toPrimitive) return () => ''; if(k === 'querySelectorAll') return () => [];
      if(k === 'value' || k === 'textContent' || k === 'innerHTML') return ''; if(k === 'checked' || k === 'hidden') return false;
      if(k === 'classList') return {add(){}, remove(){}, toggle(){}, contains(){ return false; }}; if(k === 'style' || k === 'dataset') return {};
      return NULLEL; },
    set(){ return true; }, apply(){ return NULLEL; } });
  const $ = id => document.getElementById(id) || NULLEL;
  const MULTI = document.querySelectorAll('.page').length > 1;
  const sizeAdj = (area, floors) => (area > 0 && area < 1000 ? 125 : 0) + (floors === 1 ? 100 : 0);
  const inr = n => '₹' + Math.round(n).toLocaleString('en-IN');
  const lakh = n => n >= 1e7 ? '₹' + (n/1e7).toFixed(2) + ' Cr' : '₹' + (n/1e5).toFixed(2) + ' L';
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));

  function bindCompare(){
    const b = $('cmp-btn'); if(!b) return;
    b.addEventListener('click', () => { const t = $('spec-compare'), open = t.hidden; t.hidden = !open; b.setAttribute('aria-expanded', String(open)); b.textContent = open ? 'Hide comparison' : 'Compare all three packages side by side'; });
  }
  function renderSpec(){
    $('spec-body').innerHTML = SPEC.map(r => r[0]==='g'
      ? `<tr class="group"><th colspan="4" scope="colgroup">${r[1]}</th></tr>`
      : `<tr><th scope="row">${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join('');
  }
  function renderPkgCards(anim){
    const c = CITY[st.city];
    $('pk-cards').innerHTML = PKG.map(p => `<button type="button" class="pk${p.featured?' featured':''}" id="pkc-${p.id}" data-pk="${p.id}" aria-pressed="${p.id===st.pkg}" aria-controls="spec-one">
      ${p.featured?'<span class="tag">Most chosen</span>':''}
      <span class="pk-name">${p.name}</span>
      <span class="rate">${inr(c.rates[p.id])}<small> / sq.ft</small></span>
      <span class="for">${p.for}</span>
      <span class="note">Starting rate, excluding GST · ${c.label}</span>
      <span class="see">See what's included</span></button>`).join('');
    $('pk-cards').querySelectorAll('[data-pk]').forEach(b => b.addEventListener('click', () => { st.pkg = b.dataset.pk; renderPkgCards(true); calc(); }));
    $('shell-card').innerHTML = `<div><span class="tag">For villages and phased building</span><h3 style="margin-top:8px">Structure only</h3><p class="note" style="margin-top:4px">Foundation, RCC frame, walls, plastering inside and out, conduits and pipe sleeves, terrace weathering course. You finish floors, doors, painting and fittings later, when your budget allows.</p></div><div style="text-align:right"><div class="rate">${inr(c.shell)}<small style="font-size:.85rem;color:var(--muted)"> / sq.ft</small></div><p class="note">Starting rate, excluding GST</p></div>`;
    $('pkg-seg').innerHTML = PKG.map(p => `<button type="button" id="pk-${p.id}" data-pkg="${p.id}" aria-pressed="${p.id===st.pkg}">${p.name} · ${inr(c.rates[p.id])}</button>`).join('');
    $('pkg-seg').querySelectorAll('button').forEach(b => b.addEventListener('click', () => { st.pkg = b.dataset.pkg; renderPkgCards(true); calc(); }));
    renderSpecOne(anim);
  }
  function renderSpecOne(anim){
    const c = CITY[st.city], col = PKG.findIndex(p => p.id === st.pkg) + 1, p = PKG[col - 1], rate = c.rates[p.id];
    const groups = []; let g = null;
    SPEC.forEach(row => { if(row[0] === 'g'){ g = {name: row[1], rows: []}; groups.push(g); } else if(g) g.rows.push([row[0], row[col]]); });
    const el = $('spec-one');
    el.innerHTML = `<div class="head"><div><p class="eyebrow">${c.label} · ${inr(rate)} per sq.ft</p><h3>What the ${p.name} package includes</h3></div>
      <div class="ex">1,800 sq.ft G+1 house: <b>${lakh(1800 * rate)}</b></div></div>
      <div class="spec-groups">${groups.map(gr => `<div class="spec-group"><h4>${gr.name}</h4><dl>${gr.rows.map(rw => `<div><dt>${rw[0]}</dt><dd>${rw[1]}</dd></div>`).join('')}</dl></div>`).join('')}</div>`;
    el.classList.remove('anim');
    if(anim && !reduce){ void el.offsetWidth; el.classList.add('anim'); }
  }
  const TYPES = [
    {name:'Independent house', meta:'800–2,000 sq.ft · G or G+1', text:'Family homes on village and town plots, with sit-out, pooja room and vastu-checked plan.', area:1000, floors:1, pkg:'essential', icon:'<path d="M4 20V10l8-6 8 6v10h-5v-6H9v6z"/>'},
    {name:'Duplex villa', meta:'1,800–3,000 sq.ft · G+1', text:'Car porch, balcony, terrace garden and an elevation of your choice.', area:1800, floors:2, pkg:'standard', icon:'<path d="M3 21V9l6-4 6 4v12M15 21V12l6-3v12M7 13h4M7 17h4"/>'},
    {name:'Apartments & rental flats', meta:'2–6 units · G+2 or G+3', text:'One flat per floor or two per floor, built for steady rent near the SIPCOT park and Bengaluru outskirts.', area:2700, floors:3, pkg:'standard', icon:'<path d="M5 21V3h10v18M15 9h4v12M8 7h4M8 11h4M8 15h4M3 21h18"/>'},
    {name:'Shop + house', meta:'Shops below, home above · G+1', text:'Shutters on the road side and a family home or rental floor upstairs.', area:1600, floors:2, pkg:'essential', icon:'<path d="M3 21V11h18v10M3 11l2-6h14l2 6M7 21v-5h4v5M15 15h3"/>'},
    {name:'Renovation & extensions', meta:'Add a floor · rework · repairs', text:'New floor on an old house, kitchen and bathroom rework, waterproofing and cracks.', area:0, floors:0, pkg:null, icon:'<path d="M14 6l4 4M4 20l3-1 11-11-2-2L5 17zM15 4l5 5"/>'}
  ];
  function renderTypes(){
    const c = CITY[st.city];
    $('types-grid').innerHTML = TYPES.map(t => {
      const from = t.pkg ? lakh(t.area * (c.rates[t.pkg] + sizeAdj(t.area, t.floors))) : 'After a site visit';
      const note = t.pkg ? `From, for ${t.area.toLocaleString('en-IN')} sq.ft (${PKG.find(p => p.id === t.pkg).name})` : 'Quoted in writing';
      return `<article class="type"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t.icon}</svg>
        <h3>${t.name}</h3><span class="meta">${t.meta}</span>
        <div class="from"><small>${note}</small><b${t.pkg ? '' : ' class="txt"'}>${from}</b></div></article>`;
    }).join('');
    const sr = document.querySelector('.stat b[data-prefix]'); if(sr){ sr.dataset.count = c.rates.essential; sr.textContent = inr(c.rates.essential); }
  }
  function countUp(){
    if(reduce || !window.IntersectionObserver) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if(!e.isIntersecting) return; io.unobserve(e.target);
      const el = e.target, end = Number(el.dataset.count), pre = el.dataset.prefix || '', t0 = performance.now();
      if(!end) return;
      const step = now => { const k = Math.min(1, (now - t0) / 1100), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
        el.textContent = pre + (el.dataset.comma ? v.toLocaleString('en-IN') : v); if(k < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }), {threshold: .6});
    document.querySelectorAll('.stat b[data-count]').forEach(el => io.observe(el));
  }
  function renderExtras(){
    const c = CITY[st.city];
    $('ex-col').textContent = c.label + ' rate';
    const rows = [
      ['Government approval fees','Paid at actuals, official receipt shared','At actuals'],
      ['Approval handling (our service)','Drawings, filing and follow-up, flat fee', inr(c.appr)],
      ['Soil test','Per plot, before foundation design', inr(c.soil)],
      ['3D elevation (Essential package)','Per design, two revisions', inr(c.d3)],
      ['Compound wall, 5 ft','Per running foot', inr(c.wall)],
      ['Extra compound wall height','Per running foot, per extra foot', inr(Math.round(c.wall*0.18))],
      ['Larger sump','Per extra litre', '₹28'],
      ['Elevation features (cladding, louvres)','Per design, quoted before work', 'Quoted in writing'],
      ['Borewell, EB and water connection deposits','Paid by owner directly', 'At actuals'],
      ['Modular kitchen, wardrobes, false ceiling','Optional interiors package', 'Quoted in writing']
    ];
    $('ex-body').innerHTML = rows.map(r => `<tr><th scope="row">${r[0]}</th><td>${r[1]}</td><td class="n">${r[2]}</td></tr>`).join('');
  }
  function renderApprovals(){
    const c = CITY[st.city];
    $('ap-lede').textContent = 'Approving authority: ' + c.authority + ' Typical time: ' + c.apTime + '. Government fees are paid at actuals and every receipt is shared with you.';
    const cards = st.city==='dpi' ? [
      ['Village panchayat approval','Most plots outside town limits. We prepare the plan, file it and follow up until the approval copy is in your hand.', inr(c.appr)],
      ['DTCP / town panchayat approval','For plots in Dharmapuri town, Harur, Palacode and other town panchayats, filed through the single-window portal.', inr(c.appr)],
      ['Plan and 3D elevation only','Vastu-checked 2D floor plan and a 3D front elevation, even if you build with your own team.', 'From ' + inr(c.d3)]
    ] : [
      ['BBMP / Greater Bengaluru sanction','Plots within city corporation limits, filed online through the building plan system by a registered architect.', inr(c.appr)],
      ['BDA / BMRDA / panchayat sanction','Plots in layouts and outskirts outside corporation limits, with the right authority for your khata.', inr(c.appr)],
      ['Plan and 3D elevation only','2D floor plan meeting setback and FAR rules, plus a 3D elevation.', 'From ' + inr(c.d3)]
    ];
    $('ap-cards').innerHTML = cards.map(k => `<div class="card"><h3>${k[0]}</h3><p>${k[1]}</p><div class="trow"><span>Our fee</span><span>${k[2]}</span></div></div>`).join('');
  }
  function renderTracker(){
    $('tracker-list').innerHTML = TRACK.map(t => `<div class="tk ${t[0]}"><span class="dot" aria-hidden="true"></span>
      <div><div style="font-weight:600">${t[1]}</div>${t[3]?`<span class="pill ${t[0]==='done'?'ok':'wip'}">${t[3]}</span>`:''}</div>
      <span class="meta">${t[2]}</span></div>`).join('');
  }

  function calc(){
    const c = CITY[st.city];
    const per = Math.max(0, Number($('in-area').value) || 0);
    const floors = Number($('in-floors').value) || 1;
    const area = per * floors;
    const turnkey = st.ct === 'turnkey', shell = st.ct === 'shell';
    const adj = (turnkey || shell) ? sizeAdj(area, floors) : 0;
    const rate = turnkey ? c.rates[st.pkg] + adj : shell ? c.shell + adj : c.labour;
    const base = area * rate;
    const appr = $('ad-appr').checked ? c.appr : 0;
    const soil = $('ad-soil').checked ? c.soil : 0;
    const d3 = $('ad-3d').checked ? c.d3 : 0;
    const wallFt = Math.max(0, Number($('in-wall').value) || 0);
    const wall = wallFt * c.wall;
    const total = base + appr + soil + d3 + wall;

    $('ad-appr-p').textContent = '(' + inr(c.appr) + ')';
    $('ad-soil-p').textContent = '(' + inr(c.soil) + ')';
    $('ad-3d-p').textContent = '(' + inr(c.d3) + ')';
    $('wall-rate').textContent = inr(c.wall) + ' per running ft for a 5 ft wall';
    $('pkg-field').hidden = !turnkey;

    $('r-total').textContent = inr(total);
    $('r-area').textContent = area.toLocaleString('en-IN') + ' sq.ft';
    $('r-rate').textContent = inr(rate) + ' / sq.ft';
    const lo = Math.round(3 + area/600), hi = lo + 2;
    $('r-time').textContent = area ? lo + '–' + hi + ' months' : '–';

    if(turnkey){
      $('r-note').textContent = 'Construction ' + lakh(base) + ' + add-ons ' + lakh(appr+soil+d3+wall) + '. Rate covers materials, labour and supervision, excluding GST' + (adj ? ', and includes a +' + inr(adj) + '/sq.ft small or single-floor house adjustment' : '') + '. Government approval fees are extra, at actuals.';
      $('bars-title').textContent = 'Where your money goes';
      $('r-bars').innerHTML = STAGES_COST.map(s => `<div class="bar"><span>${s[0]}</span><div class="track"><div class="fill" style="width:${s[1]/27*100}%"></div></div><span class="amt">${inr(base*s[1]/100)}</span></div>`).join('');
    } else if(shell){
      $('r-note').textContent = 'Structure only: foundation, RCC frame, walls, plastering inside and out, conduits, pipe sleeves and terrace weathering course, excluding GST' + (adj ? ', including a +' + inr(adj) + '/sq.ft small or single-floor house adjustment' : '') + '. You finish flooring, doors, painting and fittings later, at your own pace.';
      $('bars-title').textContent = 'Where your money goes';
      $('r-bars').innerHTML = STAGES_SHELL.map(s => `<div class="bar"><span>${s[0]}</span><div class="track"><div class="fill" style="width:${s[1]/40*100}%"></div></div><span class="amt">${inr(base*s[1]/100)}</span></div>`).join('');
    } else {
      const mLo = area * (c.rates.standard - c.labour) * 0.9, mHi = area * (c.rates.standard - c.labour) * 1.05;
      $('r-note').textContent = 'Labour, mesthiri team and site engineer only. You buy the materials. For a Standard-level finish, expect to spend about ' + lakh(mLo) + ' – ' + lakh(mHi) + ' on materials. We give you a quantity list for every stage.';
      $('bars-title').textContent = 'Your total project budget';
      const mid = (mLo + mHi) / 2, all = base + mid;
      const rows = [['Labour + supervision (to us)', base],['Materials (you buy, estimate)', mid],['Add-ons', appr+soil+d3+wall]];
      const mx = Math.max(...rows.map(r=>r[1]), 1);
      $('r-bars').innerHTML = rows.map(r => `<div class="bar"><span>${r[0]}</span><div class="track"><div class="fill" style="width:${r[1]/mx*100}%"></div></div><span class="amt">${inr(r[1])}</span></div>`).join('')
        + `<p class="note" style="margin-top:6px">All-in project estimate: about ${lakh(all + appr + soil + d3 + wall)}</p>`;
    }

    const plan = turnkey ? PAY : shell ? PAY_SHELL : PAY_LABOUR;
    $('pay-body').innerHTML = plan.map(p => `<tr><th scope="row">${p[0]}</th><td>${p[1]}</td><td class="n">${p[2]}%</td><td class="n">${inr(base*p[2]/100)}</td></tr>`).join('')
      + `<tr><th scope="row">Total construction</th><td class="note">Add-ons are billed separately when done</td><td class="n">100%</td><td class="n"><b>${inr(base)}</b></td></tr>`;
  }

  function ticket(){
    const c = CITY[st.city];
    const base = 1800 * c.rates.standard;
    $('tk-city').textContent = c.label;
    $('tk-rate').textContent = inr(c.rates.standard) + ' / sq.ft';
    $('tk-base').textContent = inr(base);
    $('tk-appr').textContent = inr(c.appr);
    $('tk-soil').textContent = inr(c.soil);
    $('tk-total').textContent = inr(base + c.appr + c.soil);
  }

  function setCity(city){
    st.city = city;
    try{ localStorage.setItem('nh-city', city); }catch(e){}
    document.querySelectorAll('.city button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.city===city)));
    const c = CITY[city];
    $('hero-eyebrow').textContent = c.eyebrow;
    $('c-phone').textContent = c.phone;
    $('c-office').textContent = c.office;
    document.querySelectorAll('.kw-city').forEach(s => s.textContent = c.label);
    const digits = c.phone.replace(/\D/g, ''), waText = encodeURIComponent('Hello Kalvettu Builders, I would like a free site visit in ' + c.label + '.');
    ['wa-float','mb-wa'].forEach(id => { const el = $(id); if(el) el.href = 'https://wa.me/' + digits + '?text=' + waText; });
    if($('mb-call')) $('mb-call').href = 'tel:+' + digits;
    updateDesignPrices();
    renderPkgCards(); renderTypes(); renderExtras(); renderApprovals(); ticket(); calc();
  }

  document.querySelectorAll('.city button').forEach(b => b.addEventListener('click', () => setCity(b.dataset.city)));
  document.querySelectorAll('[data-ct]').forEach(b => b.addEventListener('click', () => {
    st.ct = b.dataset.ct;
    document.querySelectorAll('[data-ct]').forEach(x => x.setAttribute('aria-pressed', String(x===b)));
    calc();
  }));
  ['in-area','in-floors','ad-appr','ad-soil','ad-3d','in-wall'].forEach(id => $(id).addEventListener('input', calc));

  $('lead-form').addEventListener('submit', e => {
    e.preventDefault();
    const v = id => $(id).value.trim();
    const msg = `Hello Kalvettu Builders,\nI'd like a free site visit.\n\nName: ${v('f-name')||'-'}\nPhone: ${v('f-phone')||'-'}\nCity: ${CITY[st.city].label}\nPlot location: ${v('f-place')||'-'}\nPlot size: ${v('f-plot')||'-'}\nNeed: ${v('f-need')}\nNotes: ${v('f-msg')||'-'}`;
    $('lead-out').textContent = msg;
    $('copy-status').textContent = '';
    $('wa-btn').href = 'https://wa.me/' + CITY[st.city].phone.replace(/\D/g, '') + '?text=' + encodeURIComponent(msg);
  });
  $('copy-btn').addEventListener('click', () => {
    const text = $('lead-out').textContent;
    const done = ok => $('copy-status').textContent = ok ? 'Copied. Paste it into WhatsApp.' : 'Select the message above and copy it.';
    try{
      navigator.clipboard.writeText(text).then(() => done(true), () => { selectOut(); done(false); });
    }catch(err){ selectOut(); done(false); }
  });
  function selectOut(){ const r = document.createRange(); r.selectNodeContents($('lead-out')); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }

  const HAS3D = (() => { try{ const c = document.createElement('canvas'); return !!(window.THREE && THREE.WebGLRenderer && (c.getContext('webgl2') || c.getContext('webgl'))); }catch(e){ return false; } })();
  /* ---------- house design renders (2D fallback) ---------- */
  const DESIGNS = [
    {id:'thendral', name:'Thendral', meaning:'breeze', use:'3 BHK family home', floors:2, per:900, pkg:'standard', m:{W:9, D:10}, w:330, roof:'flat', wall:'#efe9df', wall2:'#59636b', clad:'wood', cant:true, park:true},
    {id:'kaveri', name:'Kaveri', meaning:'river', use:'2 BHK village home with sit-out', floors:1, per:1100, pkg:'essential', m:{W:11, D:9}, w:380, roof:'tile', wall:'#f1e3c8', wall2:'#8c5a3c', clad:null, cant:false, park:false},
    {id:'malar', name:'Malar', meaning:'blossom', use:'Three rental flats, one per floor', floors:3, per:900, pkg:'standard', m:{W:8, D:10}, w:300, roof:'flat', wall:'#e6eeee', wall2:'#2f6f73', clad:'stone', cant:false, park:true},
    {id:'vaanam', name:'Vaanam', meaning:'sky', use:'4 BHK duplex with terrace garden', floors:2, per:1200, pkg:'premium', m:{W:10.5, D:11}, w:360, roof:'flat', wall:'#f7f7f5', wall2:'#33373b', clad:'stone', cant:true, park:true}
  ];
  const rng = s => () => (s = (s * 16807) % 2147483647, (s - 1) / 2147483646);
  function mix(hex, to, a){
    const p = h => [1,3,5].map(i => parseInt(h.slice(i,i+2),16));
    const A = p(hex), B = p(to);
    return 'rgb(' + A.map((v,i) => Math.round(v + (B[i]-v)*a)).join(',') + ')';
  }
  function isDark(){ return false; }
  function rrect(ctx, x, y, w, h, r){
    ctx.beginPath();
    if(ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h);
    ctx.fill();
  }
  function win(ctx, x, y, w, h, dark, frame){
    ctx.fillStyle = frame; ctx.fillRect(x-7, y-9, w+14, 5);           // sunshade (chajja)
    ctx.fillStyle = dark ? '#1d1f22' : '#555b60'; ctx.fillRect(x-3, y-3, w+6, h+6);
    ctx.save();
    if(dark){ ctx.shadowColor = 'rgba(255,190,90,.85)'; ctx.shadowBlur = 16; }
    ctx.fillStyle = dark ? '#ffcf7a' : '#a9c4d6'; ctx.fillRect(x, y, w, h);
    ctx.restore();
    if(!dark){ ctx.fillStyle = 'rgba(255,255,255,.38)'; ctx.beginPath(); ctx.moveTo(x, y+h*.7); ctx.lineTo(x+w*.45, y); ctx.lineTo(x+w*.62, y); ctx.lineTo(x, y+h); ctx.closePath(); ctx.fill(); }
    ctx.strokeStyle = 'rgba(0,0,0,.28)'; ctx.lineWidth = 1;                 // MS grill
    for(let gx = x + 8; gx < x + w; gx += 9){ ctx.beginPath(); ctx.moveTo(gx, y); ctx.lineTo(gx, y+h); ctx.stroke(); }
    ctx.fillStyle = dark ? '#1d1f22' : '#555b60'; ctx.fillRect(x + w/2 - 1.5, y, 3, h);
  }
  function car(ctx, cx, gy, dark){
    ctx.fillStyle = dark ? '#5b6b7c' : '#b8412f';
    rrect(ctx, cx-44, gy-32, 88, 22, 8); rrect(ctx, cx-27, gy-48, 54, 20, 8);
    ctx.fillStyle = dark ? '#2a3542' : '#cfe0ea'; rrect(ctx, cx-22, gy-45, 44, 13, 4);
    ctx.fillStyle = '#16181a';
    [cx-26, cx+26].forEach(wx => { ctx.beginPath(); ctx.arc(wx, gy-10, 8, 0, Math.PI*2); ctx.fill(); });
  }
  function drawHouse(cv, d, t){
    const dark = isDark();
    const r = cv.getBoundingClientRect();
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const pw = Math.max(320, Math.round((r.width || 800) * dpr));
    if(cv.width !== pw){ cv.width = pw; cv.height = Math.round(pw * 0.625); }
    const ctx = cv.getContext('2d');
    ctx.setTransform(cv.width/800, 0, 0, cv.width/800, 0, 0);
    const night = '#1b2440';
    // sky
    const g = ctx.createLinearGradient(0, 0, 0, 390);
    if(dark){ g.addColorStop(0,'#0e1830'); g.addColorStop(.62,'#2b3a64'); g.addColorStop(1,'#c47a5c'); }
    else { g.addColorStop(0,'#78afe0'); g.addColorStop(.7,'#cfe3f2'); g.addColorStop(1,'#eef3ee'); }
    ctx.fillStyle = g; ctx.fillRect(0, 0, 800, 392);
    if(dark){ const s = rng(11); ctx.fillStyle = 'rgba(255,255,255,.75)'; for(let i=0;i<70;i++) ctx.fillRect(s()*800, s()*230, 1.6, 1.6);
      ctx.fillStyle = '#f2e9cf'; ctx.beginPath(); ctx.arc(660, 82, 20, 0, Math.PI*2); ctx.fill(); }
    else { ctx.save(); ctx.shadowColor = 'rgba(255,240,180,.9)'; ctx.shadowBlur = 40; ctx.fillStyle = '#fff4c8'; ctx.beginPath(); ctx.arc(650, 88, 28, 0, Math.PI*2); ctx.fill(); ctx.restore(); }
    // clouds
    ctx.fillStyle = dark ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.88)';
    for(let k=0;k<4;k++){
      const cx = ((k*260 + (t||0)*0.012*(k+1)) % 1060) - 130, cy = 52 + k*30;
      [[0,0,46,15],[30,-9,32,14],[-28,-5,28,12]].forEach(e => { ctx.beginPath(); ctx.ellipse(cx+e[0], cy+e[1], e[2], e[3], 0, 0, Math.PI*2); ctx.fill(); });
    }
    // hills
    ctx.fillStyle = dark ? '#23304c' : '#a8bfae';
    ctx.beginPath(); ctx.moveTo(0,392); ctx.bezierCurveTo(140,300,260,330,380,350); ctx.bezierCurveTo(500,310,640,300,800,350); ctx.lineTo(800,392); ctx.closePath(); ctx.fill();
    ctx.fillStyle = dark ? '#2b3a4c' : '#8fae95';
    ctx.beginPath(); ctx.moveTo(0,392); ctx.bezierCurveTo(200,350,320,372,460,368); ctx.bezierCurveTo(600,362,700,350,800,372); ctx.lineTo(800,392); ctx.closePath(); ctx.fill();
    // ground and road
    ctx.fillStyle = dark ? '#2f2a24' : '#cdbf9f'; ctx.fillRect(0, 386, 800, 66);
    ctx.fillStyle = dark ? '#1d1f22' : '#8b9096'; ctx.fillRect(0, 448, 800, 52);
    ctx.fillStyle = dark ? 'rgba(255,255,255,.35)' : 'rgba(255,255,255,.8)'; for(let x=10;x<800;x+=60) ctx.fillRect(x, 472, 30, 3);

    // house
    const W1 = dark ? mix(d.wall, night, .5) : d.wall, W2 = dark ? mix(d.wall2, night, .45) : d.wall2;
    const base = 392, fh = 92, pl = 12, x0 = 400 - d.w/2, x1 = x0 + d.w, g0 = base - pl, top = g0 - d.floors*fh;
    ctx.fillStyle = dark ? '#4a463f' : '#b6af9f'; ctx.fillRect(x0-8, g0, d.w+16, pl);
    if(d.roof === 'tile'){                                          // sit-out pillars under the tiled roof
      ctx.fillStyle = W2; ctx.fillRect(x0-24, top+6, 9, g0-top-6); ctx.fillRect(x1+15, top+6, 9, g0-top-6);
    }
    for(let i=0;i<d.floors;i++){ const y = g0-(i+1)*fh; ctx.fillStyle = W1; ctx.fillRect(x0, y, d.w, fh); ctx.fillStyle = W2; ctx.fillRect(x0-4, y+fh-6, d.w+8, 6); }
    if(d.cant && d.floors > 1){
      for(let i=1;i<d.floors;i++){ const y = g0-(i+1)*fh; ctx.fillStyle = W2; ctx.fillRect(x0-26, y, 26 + d.w*.38, fh); }
      ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(x0-26, g0-fh, 26 + d.w*.38, 12);
    }
    if(d.park){ const pw2 = d.w*.36; ctx.fillStyle = dark ? '#121517' : '#3a4046'; ctx.fillRect(x0+8, g0-fh+18, pw2, fh-18); car(ctx, x0+8+pw2/2, g0, dark); }
    const dx = x0 + d.w*(d.park ? .42 : .46);
    ctx.fillStyle = '#3b2a1d'; ctx.fillRect(dx-4, g0-80, 52, 80);
    ctx.fillStyle = dark ? '#5e3e25' : '#8a5a33'; ctx.fillRect(dx, g0-76, 44, 76);
    ctx.strokeStyle = 'rgba(0,0,0,.25)'; [12,22,32].forEach(o => { ctx.beginPath(); ctx.moveTo(dx+o, g0-70); ctx.lineTo(dx+o, g0-6); ctx.stroke(); });
    win(ctx, x0 + d.w*.6, g0-72, 64, 46, dark, W2);
    if(!d.park) win(ctx, x0 + d.w*.12, g0-72, 64, 46, dark, W2);
    for(let i=1;i<d.floors;i++){
      const y = g0-(i+1)*fh;
      if(d.cant){
        const bx = x0-18, bw = d.w*.38 + 10;
        ctx.save(); if(dark){ ctx.shadowColor = 'rgba(255,190,90,.7)'; ctx.shadowBlur = 14; }
        ctx.fillStyle = dark ? '#f5c46e' : '#9fbcd0'; ctx.fillRect(bx+8, y+14, bw-16, fh-42); ctx.restore();
        ctx.fillStyle = dark ? 'rgba(255,220,160,.22)' : 'rgba(225,238,246,.6)'; ctx.fillRect(bx, y+fh-40, bw, 32);
        ctx.fillStyle = dark ? '#8d949a' : '#d2d7db'; ctx.fillRect(bx, y+fh-42, bw, 3);
      } else {
        win(ctx, x0 + d.w*.08, y+20, 56, 46, dark, W2);
      }
      win(ctx, x0 + d.w*.44, y+20, 56, 46, dark, W2);
      win(ctx, x0 + d.w*.64, y+20, 56, 46, dark, W2);
    }
    if(d.clad){
      const cx = x1 - 44, ch = g0 - top;
      if(d.clad === 'wood'){
        ctx.fillStyle = dark ? '#5c3c22' : '#8a5a33'; ctx.fillRect(cx, top, 34, ch);
        ctx.fillStyle = 'rgba(0,0,0,.28)'; for(let y=top+4;y<g0;y+=7) ctx.fillRect(cx, y, 34, 2);
      } else {
        ctx.fillStyle = dark ? '#5a564f' : '#a39c90'; ctx.fillRect(cx, top, 34, ch);
        const s = rng(5); ctx.strokeStyle = 'rgba(0,0,0,.22)';
        for(let y=top;y<g0;y+=12){ ctx.beginPath(); ctx.moveTo(cx, y); ctx.lineTo(cx+34, y); ctx.stroke(); const vx = cx + 6 + s()*22; ctx.beginPath(); ctx.moveTo(vx, y); ctx.lineTo(vx, y+12); ctx.stroke(); }
      }
    }
    if(d.roof === 'flat'){
      ctx.fillStyle = W2; ctx.fillRect(x0-6, top-14, d.w+12, 14);
      const hx = x0 + d.w*.16;
      ctx.fillStyle = W1; ctx.fillRect(hx, top-58, 92, 44);
      ctx.fillStyle = W2; ctx.fillRect(hx-5, top-63, 102, 6);
      ctx.fillStyle = '#3b2a1d'; ctx.fillRect(hx+12, top-50, 22, 36);
      ctx.fillStyle = dark ? '#151617' : '#2d2f31'; ctx.fillRect(hx+52, top-88, 32, 25); ctx.beginPath(); ctx.ellipse(hx+68, top-88, 16, 5, 0, 0, Math.PI*2); ctx.fill();
      if(d.id === 'vaanam'){ ctx.fillStyle = dark ? '#1f3a24' : '#4e8a45'; [[x1-110,top-22,12],[x1-86,top-26,15],[x1-60,top-21,11]].forEach(p => { ctx.beginPath(); ctx.arc(p[0], p[1], p[2], 0, Math.PI*2); ctx.fill(); }); }
    } else {
      ctx.fillStyle = dark ? '#6a3324' : '#b4553a';
      ctx.beginPath(); ctx.moveTo(x0-34, top+8); ctx.lineTo(x1+34, top+8); ctx.lineTo(x1-48, top-62); ctx.lineTo(x0+48, top-62); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,.2)'; ctx.lineWidth = 1.5;
      for(let k=1;k<7;k++){ const y = top+8-k*10, f = k/7, l = (x0-34) + f*82, rr = (x1+34) - f*82; ctx.beginPath(); ctx.moveTo(l, y); ctx.lineTo(rr, y); ctx.stroke(); }
      ctx.fillStyle = dark ? '#4a2318' : '#8a3d28'; ctx.fillRect(x0+44, top-66, d.w-88, 6);
    }
    // compound wall and gate
    const wallC = dark ? mix('#d9d2c3', night, .5) : '#d9d2c3', cap = dark ? '#5d5850' : '#9c9488';
    ctx.fillStyle = wallC; ctx.fillRect(40, 406, 288, 28); ctx.fillRect(476, 406, 284, 28);
    ctx.fillStyle = cap; ctx.fillRect(36, 401, 296, 6); ctx.fillRect(472, 401, 292, 6);
    ctx.fillStyle = cap; ctx.fillRect(322, 388, 13, 46); ctx.fillRect(466, 388, 13, 46);
    ctx.fillStyle = W2; ctx.fillRect(319, 384, 19, 6); ctx.fillRect(463, 384, 19, 6);
    ctx.strokeStyle = dark ? '#8d949a' : '#2c2f33'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(335, 410); ctx.lineTo(466, 410); ctx.moveTo(335, 432); ctx.lineTo(466, 432); ctx.stroke();
    ctx.lineWidth = 1.5; for(let x=342;x<466;x+=8){ ctx.beginPath(); ctx.moveTo(x, 410); ctx.lineTo(x, 432); ctx.stroke(); }
    // coconut tree and shrubs
    const leaf = dark ? '#1f3a26' : '#3f7d3a';
    ctx.strokeStyle = dark ? '#4b3826' : '#7a5c3e'; ctx.lineWidth = 9; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(96, 440); ctx.quadraticCurveTo(66, 330, 118, 226); ctx.stroke();
    ctx.strokeStyle = leaf; ctx.lineWidth = 5;
    const sway = Math.sin((t||0)/900) * 4;
    [[-78,22],[-60,-18],[-20,-40],[24,-38],[64,-14],[80,26],[40,40],[-40,44]].forEach(f => { ctx.beginPath(); ctx.moveTo(118, 226); ctx.quadraticCurveTo(118 + f[0]*.5, 226 + f[1] - 26, 118 + f[0] + sway, 226 + f[1] + 22); ctx.stroke(); });
    ctx.lineCap = 'butt';
    ctx.fillStyle = leaf;
    [[58,408,18],[300,404,14],[510,404,16],[752,400,22],[724,410,14]].forEach(p => { ctx.beginPath(); ctx.arc(p[0], p[1], p[2], 0, Math.PI*2); ctx.fill(); });
  }

  function updateDesignPrices(){
    const c = CITY[st.city];
    DESIGNS.forEach(d => { const el = document.getElementById('dp-' + d.id); if(el) el.textContent = lakh(d.per * d.floors * (c.rates[d.pkg] + sizeAdj(d.per * d.floors, d.floors))); });
  }
  function buildDesigns(){
    const pkgName = id => PKG.find(p => p.id === id).name;
    const fl = n => n === 1 ? 'Ground floor' : 'G+' + (n-1);
    $('designs-grid').innerHTML = DESIGNS.map(d => `<article class="design">
      <div class="render">${HAS3D
        ? `<img id="im-${d.id}" ${STATIC_IMG ? `src="${STATIC_IMG}designs/${d.id}.jpg" ` : ''}width="960" height="600" loading="lazy" alt="3D render of the ${d.name} house design, ${fl(d.floors)}">`
        : `<canvas id="cv-${d.id}" width="800" height="500" role="img" aria-label="Design concept render of the ${d.name} house, ${fl(d.floors)}"></canvas>`}
        <div class="cap"><span>Design concept</span>${HAS3D ? `<button type="button" class="btn solid sm" id="v3-${d.id}" data-view="${d.id}">View in 3D</button>` : ''}</div></div>
      <div class="info">
        <h3>${d.name}<small>“${d.meaning}” · ${d.use}</small></h3>
        <div class="facts"><span>${fl(d.floors)}</span><span>${(d.per*d.floors).toLocaleString('en-IN')} sq.ft</span><span>${pkgName(d.pkg)} package</span></div>
        <div class="row"><div><div class="note">Estimated build cost · <span class="kw-city">${CITY[st.city].label}</span></div><div class="est" id="dp-${d.id}"></div></div>
        <button type="button" class="btn ghost sm" id="use-${d.id}" data-design="${d.id}">Estimate this design</button></div>
      </div></article>`).join('');
    $('designs-grid').querySelectorAll('[data-design]').forEach(b => b.addEventListener('click', () => {
      const d = DESIGNS.find(x => x.id === b.dataset.design);
      st.ct = 'turnkey'; st.pkg = d.pkg;
      document.querySelectorAll('[data-ct]').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.ct === 'turnkey')));
      $('in-area').value = d.per; $('in-floors').value = String(d.floors);
      renderPkgCards(); calc();
      if(MULTI) location.hash = 'estimate';
      else if(document.getElementById('estimate')) $('estimate').scrollIntoView({behavior: reduce ? 'auto' : 'smooth'});
      else location.href = ROOT + 'cost-calculator/?design=' + d.id + '#estimate';
    }));
  }
  function drawAll(){
    if(HAS3D && ok3D){ refresh3D(); return; }
    DESIGNS.forEach(d => { const cv = document.getElementById('cv-' + d.id); if(cv) drawHouse(cv, d, 0); });
    drawHouse($('hero-canvas'), DESIGNS[heroIdx], heroT);
  }

  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  let heroIdx = 0, heroT = 0, lastSwap = 0, lastFrame = 0, userPicked = 0;
  function heroCaption(){
    const d = DESIGNS[heroIdx];
    $('hero-cap').textContent = 'Design concept · ' + d.name + ' · ' + (d.floors === 1 ? 'Ground floor' : 'G+' + (d.floors-1));
    $('hero-dots').querySelectorAll('button').forEach((b,i) => b.setAttribute('aria-pressed', String(i === heroIdx)));
  }
  function buildDots(){
    $('hero-dots').innerHTML = DESIGNS.map((d,i) => `<button type="button" id="hd-${d.id}" aria-label="Show ${d.name}" aria-pressed="${i===0}"></button>`).join('');
    $('hero-dots').querySelectorAll('button').forEach((b,i) => b.addEventListener('click', () => {
      heroIdx = i; userPicked = performance.now(); heroCaption();
      if(HAS3D) loadDesign(i, true); else drawHouse($('hero-canvas'), DESIGNS[heroIdx], heroT);
    }));
  }
  function loop(now){
    if(!document.hidden && now - lastFrame > 40){
      heroT = now; lastFrame = now;
      if(now - lastSwap > 6500 && now - userPicked > 15000){ lastSwap = now; if(now > 6500){ heroIdx = (heroIdx + 1) % DESIGNS.length; heroCaption(); } }
      drawHouse($('hero-canvas'), DESIGNS[heroIdx], heroT);
    }
    requestAnimationFrame(loop);
  }

  /* ---------- area landing pages ---------- */
  const ROOT = window.KB_ROOT || '';
  const AREA_BASE = ROOT, AREA_END = '/', STATIC_IMG = ROOT + 'assets/';
  const BLR_SOIL = 'Soil varies street to street; a soil test before foundation design is part of every quote.';
  const AREAS = [
    {slug:'house-construction-in-dharmapuri', name:'Dharmapuri', city:'dpi', auth:'DTCP or Dharmapuri municipality, depending on your plot', soil:'Red soil with rock pockets. A soil test sets the footing depth.', intro:'Plots around the Collectorate, Nethaji Bypass, Pidamaneri and the new bus stand at A. Settyahalli are building fast', demand:'Family homes, and shops with rooms above'},
    {slug:'house-construction-in-krishnagiri', name:'Krishnagiri', city:'dpi', auth:'DTCP or Krishnagiri municipality, depending on your plot', soil:'Mixed red soil and hard rock.', intro:'From the Bengaluru bypass to Bayanapalli and Royakottai Road', demand:'Duplex homes and rental floors'},
    {slug:'house-construction-in-pennagaram', name:'Pennagaram', city:'dpi', auth:'Town panchayat or village panchayat', soil:'Rocky ground is common. Rock breaking, if needed, is priced before work starts.', intro:'On the Hogenakkal road, in town and in the villages around it', demand:'Single-floor family homes and homestays'},
    {slug:'house-construction-in-palacode', name:'Palacode', city:'dpi', auth:'Town panchayat or village panchayat', soil:'Red soil, generally good bearing.', intro:'On the Dharmapuri–Hosur highway (NH 844), close to the Karnataka border', demand:'G+1 homes and shops on the highway frontage'},
    {slug:'house-construction-in-harur', name:'Harur', city:'dpi', auth:'Harur municipality or village panchayat', soil:'Sandy loam in places, so we check bearing capacity before design.', intro:'Along the Dharmapuri–Harur road (SH 60A), now being widened to four lanes', demand:'Family homes and ground-floor commercial units'},
    {slug:'house-construction-in-pappireddipatti', name:'Pappireddipatti', city:'dpi', auth:'Town panchayat or village panchayat', soil:'Red soil.', intro:'In the town and the villages towards Bommidi and Kadathur', demand:'Village homes with sit-outs'},
    {slug:'house-construction-in-karimangalam', name:'Karimangalam', city:'dpi', auth:'Town panchayat or village panchayat', soil:'Red soil with gravel.', intro:'On the Salem main road towards Krishnagiri', demand:'G+1 family homes'},
    {slug:'house-construction-in-nallampalli', name:'Nallampalli', city:'dpi', auth:'Village panchayat or DTCP, depending on your layout', soil:'Red soil with gravel.', intro:'Next to the new SIPCOT industrial park at Adhiyamankottai, Thadangam and Balajangamanahalli', demand:'Rental houses and staff rooms as the industrial park fills up'},
    {slug:'house-construction-in-morappur', name:'Morappur', city:'dpi', auth:'Village panchayat', soil:'Red soil.', intro:'Around the railway station and the Harur road', demand:'Single-floor homes'},
    {slug:'house-construction-in-whitefield', name:'Whitefield', city:'blr', auth:'BBMP / Greater Bengaluru', soil:BLR_SOIL, intro:'Plots in Whitefield, Varthur and Kadugodi', demand:'G+2 and G+3 homes with a rental floor'},
    {slug:'house-construction-in-sarjapur-road', name:'Sarjapur Road', city:'blr', auth:'BBMP or gram panchayat, depending on your khata', soil:BLR_SOIL, intro:'From Kaikondrahalli to Dommasandra', demand:'Duplex homes on 30×40 and 30×50 plots'},
    {slug:'house-construction-in-electronic-city', name:'Electronic City', city:'blr', auth:'BBMP, BMRDA or panchayat, depending on your khata', soil:BLR_SOIL, intro:'Neeladri Nagar, Hosa Road and Chandapura', demand:'Rental buildings for working professionals'},
    {slug:'house-construction-in-hoskote', name:'Hoskote', city:'blr', auth:'Hoskote planning authority, town municipal council or panchayat', soil:BLR_SOIL, intro:'On Old Madras Road beyond KR Puram', demand:'Independent houses on larger, lower-cost plots'},
    {slug:'house-construction-in-anekal', name:'Anekal', city:'blr', auth:'Anekal planning authority, town municipal council or panchayat', soil:BLR_SOIL, intro:'Anekal town, Chandapura and Jigani', demand:'G+1 homes and rental floors near the industrial areas'},
    {slug:'house-construction-in-attibele', name:'Attibele', city:'blr', auth:'Attibele town panchayat or BMRDA, depending on your plot', soil:BLR_SOIL, intro:'At the Tamil Nadu border, minutes from Hosur', demand:'Homes for families working across Hosur and Electronic City'},
    {slug:'house-construction-in-yelahanka', name:'Yelahanka', city:'blr', auth:'BBMP / Greater Bengaluru', soil:BLR_SOIL, intro:'Yelahanka New Town, Jakkur and Bagalur Road', demand:'Duplex and G+2 homes near the airport road'},
    {slug:'house-construction-in-kengeri', name:'Kengeri', city:'blr', auth:'BBMP or BDA, depending on your layout', soil:BLR_SOIL, intro:'Kengeri Satellite Town, RR Nagar and the Mysuru Road layouts', demand:'G+2 homes with a rental floor'}
  ];
  function buildAreaLinks(){
    ['dpi','blr'].forEach(k => { $('chips-' + k).innerHTML = AREAS.filter(a => a.city === k).map(a => `<a href="${AREA_BASE}${a.slug}${AREA_END}" data-slug="${a.slug}">${a.name}</a>`).join(''); });
    $('foot-areas').innerHTML = AREAS.map(a => `<a href="${AREA_BASE}${a.slug}${AREA_END}" style="color:var(--muted);margin-right:14px">${a.name}</a>`).join('');
  }
  function renderArea(a){
    const c = CITY[a.city];
    $('area-view').hidden = false;
    $('av-crumb').textContent = a.name;
    $('av-h1').textContent = 'House construction in ' + a.name;
    $('av-city').textContent = a.name;
    $('av-intro').textContent = a.intro + '. We build turnkey homes and labour-plus-supervision projects here at the rates published on this page, with an engineer on every site and weekly photo updates.';
    const fact = (k,v) => `<div class="trow"><span>${k}</span><span style="font-family:var(--f-body);text-align:right">${esc(v)}</span></div>`;
    $('av-facts').innerHTML = fact('Turnkey rates', inr(c.rates.essential) + ' – ' + inr(c.rates.premium) + ' / sq.ft')
      + fact('Labour + supervision', inr(c.labour) + ' / sq.ft')
      + fact('Plan approval', a.auth)
      + fact('Ground conditions', a.soil)
      + fact('Most built here', a.demand)
      + fact('1,800 sq.ft G+1 (Standard)', lakh(1800 * c.rates.standard));
    document.querySelectorAll('.chips a').forEach(x => x.setAttribute('aria-current', x.dataset.slug === a.slug ? 'page' : 'false'));
    document.title = 'House construction in ' + a.name + ' · Kalvettu Builders';
  }
  function showPage(name){
    if(!MULTI) return;
    document.querySelectorAll('.page').forEach(p => { p.hidden = p.dataset.page !== name; });
    document.querySelectorAll('[data-nav]').forEach(a => a.setAttribute('aria-current', a.dataset.nav === name ? 'page' : 'false'));
    closeMenu();
    window.dispatchEvent(new Event('resize'));
  }
  function route(){
    const h = decodeURIComponent(location.hash.slice(1));
    const a = AREAS.find(x => x.slug === h);
    if(MULTI && !a){
      const pg = h && document.querySelector('.page[data-page="' + h + '"]');
      const el = !pg && h ? document.getElementById(h) : null;
      const group = pg ? h : el && el.closest('.page') ? el.closest('.page').dataset.page : 'home';
      showPage(group);
      if(el && group !== 'home') requestAnimationFrame(() => el.scrollIntoView({block: 'start'}));
      else if(el) requestAnimationFrame(() => el.scrollIntoView({block: 'start'}));
      else window.scrollTo({top: 0, behavior: 'auto'});
    }
    if(a){
      showPage('areas');
      if(st.city !== a.city) setCity(a.city);
      renderArea(a);
      window.scrollTo({top:0, behavior:'auto'});
    } else {
      $('area-view').hidden = true;
      document.title = 'Kalvettu Builders';
      document.querySelectorAll('.chips a').forEach(x => x.setAttribute('aria-current', 'false'));
    }
  }

  /* ---------- 3D scene (three.js) ---------- */
  const STAGES = [
    ['Foundation & plinth', 15], ['RCC columns & slabs', 25], ['Brickwork & plaster', 15],
    ['Doors, windows & railings', 10], ['Elevation, terrace & roof', 20], ['Compound wall & handover', 5]
  ];
  const STAGE_DUR = 1.15, FH = 3.1, PL = 0.45;
  const TX = {}, MT = {};
  function cTex(key, w, h, draw, rx, ry){
    if(TX[key]) return TX[key];
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    draw(c.getContext('2d'), w, h);
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rx || 1, ry || 1);
    t.encoding = THREE.sRGBEncoding; t.anisotropy = 8;
    return (TX[key] = t);
  }
  function speckle(x, w, h, seed, n, a, rgb){
    const r = rng(seed);
    for(let i=0;i<n;i++){ x.fillStyle = 'rgba(' + rgb + ',' + (a*r()).toFixed(3) + ')'; const s = 1 + r()*2.5; x.fillRect(r()*w, r()*h, s, s); }
  }
  const texPlaster = col => cTex('pl' + col, 256, 256, (x,w,h) => { x.fillStyle = col; x.fillRect(0,0,w,h); speckle(x,w,h,3,2600,.07,'0,0,0'); speckle(x,w,h,7,2600,.09,'255,255,255'); }, 3, 3);
  const texWood = () => cTex('wood', 256, 256, (x,w,h) => {
    x.fillStyle = '#5a3418'; x.fillRect(0,0,w,h); const r = rng(4);
    for(let y=0;y<h;y+=16){
      x.fillStyle = `rgb(${150+r()*40|0},${88+r()*28|0},${48+r()*18|0})`; x.fillRect(0, y, w, 12);
      for(let k=0;k<5;k++){ x.strokeStyle = 'rgba(70,35,12,.3)'; x.beginPath(); x.moveTo(0, y+2+r()*8); x.bezierCurveTo(w*.3, y+r()*12, w*.6, y+r()*12, w, y+2+r()*8); x.stroke(); }
      x.fillStyle = 'rgba(25,12,4,.7)'; x.fillRect(0, y+12, w, 4);
    }
  }, 1, 5);
  const texStone = () => cTex('stone', 512, 512, (x,w,h) => {
    x.fillStyle = '#4e4840'; x.fillRect(0,0,w,h); const r = rng(9); let y = 0;
    while(y < h){ const bh = 16 + r()*20; let xx = -r()*40;
      while(xx < w){ const bw = 38 + r()*70, t = 112 + r()*70 | 0; x.fillStyle = `rgb(${t+14},${t+5},${t-12})`; x.fillRect(xx+2, y+2, bw-4, bh-4); xx += bw; }
      y += bh; }
    speckle(x,w,h,12,6000,.12,'0,0,0');
  }, 1, 3);
  const texTile = () => cTex('tile', 256, 256, (x,w,h) => {
    x.fillStyle = '#6a2716'; x.fillRect(0,0,w,h);
    for(let row=0;row<8;row++){ const y = row*32;
      for(let i=-1;i<9;i++){ const cx = i*32 + (row%2 ? 16 : 0);
        const g = x.createLinearGradient(cx-16,0,cx+16,0); g.addColorStop(0,'#8a3720'); g.addColorStop(.5,'#cc6640'); g.addColorStop(1,'#8a3720');
        x.fillStyle = g; x.beginPath(); x.moveTo(cx-15,y); x.lineTo(cx+15,y); x.lineTo(cx+15,y+26); x.quadraticCurveTo(cx,y+34,cx-15,y+26); x.closePath(); x.fill(); } }
  }, 7, 7);
  const texGrass = () => cTex('grass', 256, 256, (x,w,h) => { x.fillStyle = '#5d7c38'; x.fillRect(0,0,w,h); speckle(x,w,h,2,7000,.35,'35,62,22'); speckle(x,w,h,5,5000,.3,'150,175,85'); }, 40, 40);
  const texPaver = () => cTex('paver', 256, 256, (x,w,h) => {
    x.fillStyle = '#5c5751'; x.fillRect(0,0,w,h); const r = rng(8);
    for(let yy=0;yy<h;yy+=32) for(let xx=-64;xx<w;xx+=64){ const o = (yy/32)%2 ? 32 : 0, t = 150 + r()*40 | 0; x.fillStyle = `rgb(${t+10},${t-4},${t-22})`; x.fillRect(xx+o+2, yy+2, 60, 28); }
  }, 5, 3);
  const texAsphalt = () => cTex('asph', 256, 256, (x,w,h) => { x.fillStyle = '#3b3d40'; x.fillRect(0,0,w,h); speckle(x,w,h,6,8000,.22,'255,255,255'); speckle(x,w,h,1,6000,.4,'0,0,0'); }, 30, 3);
  const texLeaf = () => cTex('leaf', 64, 256, (x,w,h) => {
    x.clearRect(0,0,w,h); x.lineCap = 'round';
    for(let y=6;y<h-4;y+=6){ const len = (w/2 - 2) * Math.sin(Math.PI * y / h) * .95;
      x.strokeStyle = (y/6)%2 ? '#3d6f27' : '#4f8a33'; x.lineWidth = 2.6;
      x.beginPath(); x.moveTo(w/2, y); x.lineTo(w/2 - len, y + 12); x.moveTo(w/2, y); x.lineTo(w/2 + len, y + 12); x.stroke(); }
    x.strokeStyle = '#6b7a35'; x.lineWidth = 3; x.beginPath(); x.moveTo(w/2, 0); x.lineTo(w/2, h); x.stroke();
  });
  function skyTex(night, env){
    return cTex('sky' + night + env, 4, 256, (x,w,h) => {
      const g = x.createLinearGradient(0,0,0,h);
      if(night){ g.addColorStop(0,'#0b1428'); g.addColorStop(.55,'#24345e'); g.addColorStop(.78,'#b8705a'); g.addColorStop(.8, env ? '#2a241e' : '#b8705a'); g.addColorStop(1, env ? '#1a1612' : '#d9926c'); }
      else { g.addColorStop(0,'#5d9bd6'); g.addColorStop(.6,'#bcd8ee'); g.addColorStop(.78,'#eef3f0'); g.addColorStop(.8, env ? '#8b8068' : '#eef3f0'); g.addColorStop(1, env ? '#6d644f' : '#f4f1e8'); }
      x.fillStyle = g; x.fillRect(0,0,w,h);
    });
  }
  const mat = (key, o) => MT[key] || (MT[key] = new THREE.MeshStandardMaterial(o));
  function makeEnv(renderer, night){
    const pm = new THREE.PMREMGenerator(renderer);
    const es = new THREE.Scene();
    es.add(new THREE.Mesh(new THREE.SphereGeometry(50, 32, 16), new THREE.MeshBasicMaterial({map: skyTex(night, true), side: THREE.BackSide})));
    const rt = pm.fromScene(es, 0.03); pm.dispose();
    return rt.texture;
  }
  function setupRenderer(r, night){
    r.outputEncoding = THREE.sRGBEncoding;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = night ? 1.0 : 0.82;
    r.shadowMap.enabled = true; r.shadowMap.type = THREE.PCFSoftShadowMap;
  }

  function buildScene(d, night){
    const scene = new THREE.Scene();
    scene.background = skyTex(night, false);
    scene.fog = new THREE.Fog(night ? 0x2a3557 : 0xd4e3ec, 60, 170);
    const parts = [];
    const put = (m, stage, mode, noShadow) => {
      m.castShadow = !noShadow; m.receiveShadow = true;
      if(stage != null){ m.userData.stage = stage; m.userData.mode = mode || 'y'; parts.push(m); }
      scene.add(m); return m;
    };
    const B = (w, h, dp, mt, x, y, z, stage, mode, noShadow) => { const g = new THREE.BoxGeometry(w, h, dp); g.translate(0, h/2, 0); const m = new THREE.Mesh(g, mt); m.position.set(x, y, z); return put(m, stage, mode, noShadow); };

    // light
    scene.add(new THREE.HemisphereLight(night ? 0x4a5a98 : 0xd8eaff, night ? 0x1a140e : 0x8c7a58, night ? 0.5 : 0.5));
    const sun = new THREE.DirectionalLight(night ? 0xa9bcff : 0xfff0d6, night ? 0.45 : 2.7);
    sun.position.set(night ? -16 : 18, night ? 22 : 24, night ? 8 : 14);
    sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, {left:-22, right:22, top:22, bottom:-22, near:1, far:90});
    sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.03;
    scene.add(sun);

    const W = d.m.W, D = d.m.D, x0 = -W/2, x1 = W/2, zf = D/2, zb = -D/2;
    const top = PL + d.floors*FH, yard = 6.5, zw = zf + yard;

    // ground, road, far hills
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(240, 240), mat('grass', {map: texGrass(), roughness: 1}));
    ground.rotation.x = -Math.PI/2; ground.receiveShadow = true; scene.add(ground);
    const road = new THREE.Mesh(new THREE.PlaneGeometry(240, 8), mat('asph', {map: texAsphalt(), roughness: .95}));
    road.rotation.x = -Math.PI/2; road.position.set(0, .02, zw + 5.2); road.receiveShadow = true; scene.add(road);
    for(let x=-60;x<60;x+=6) B(2.6, .02, .16, mat('lane', {color: 0xe8e6dc, roughness: .6}), x, .02, zw + 5.2, null, null, true);
    const pave = new THREE.Mesh(new THREE.PlaneGeometry(W + 6, yard + D + 3), mat('paver', {map: texPaver(), roughness: .9}));
    pave.rotation.x = -Math.PI/2; pave.position.set(0, .015, zf + yard/2 - (D+3)/2 + yard/2 - yard/2); pave.receiveShadow = true;
    pave.position.z = (zw + (zb - 2)) / 2; pave.scale.y = (zw - (zb - 2)) / (yard + D + 3);
    scene.add(pave);

    // materials
    const wallM = mat('w' + d.wall, {map: texPlaster(d.wall), roughness: .92});
    const w2M = mat('w2' + d.wall2, {map: texPlaster(d.wall2), roughness: .85});
    const conc = mat('conc', {map: texPlaster('#a8a49b'), roughness: .95});
    const frameM = mat('frame', {color: 0x2b2e32, roughness: .45, metalness: .5});
    const glassM = mat('glass' + night, night
      ? {color: 0x2a1d0e, emissive: 0xffae55, emissiveIntensity: 1.25, roughness: .25, metalness: .1}
      : {color: 0x2a3d4c, roughness: .04, metalness: .95, envMapIntensity: 1.5});
    const railM = mat('rail', {color: 0xcfe2ec, transparent: true, opacity: .32, roughness: .05, metalness: .3, depthWrite: false});
    const woodM = mat('wood', {map: texWood(), roughness: .55});
    const stoneM = mat('stone', {map: texStone(), roughness: .9});
    const steelM = mat('steel', {color: 0x8b9298, roughness: .3, metalness: .85});
    const darkM = mat('dark', {color: 0x1c1e21, roughness: .7});
    const lampM = mat('lamp' + night, {color: 0xfff1d0, emissive: night ? 0xffc46a : 0x000000, emissiveIntensity: night ? 2 : 0});
    const PW = d.park ? W * .4 : 0;
    const doorX = d.park ? x0 + PW + 0.9 : 0;

    function win(x, y, w, h, z, face, stage){
      if(face === 'f'){
        B(w + .2, h + .2, .12, frameM, x, y - .1, z + .02, stage, 's');
        B(w, h, .05, glassM, x, y, z + .08, stage, 's', true);
        const n = Math.max(2, Math.round(w / .28));
        for(let k=1;k<n;k++) B(.03, h, .03, frameM, x - w/2 + k*(w/n), y, z + .14, stage, 's', true);
        B(w + .7, .09, .65, w2M, x, y + h + .25, z + .32, stage, 's');
      } else {
        const s = face === 'r' ? 1 : -1;
        B(.12, h + .2, w + .2, frameM, x + s*.02, y - .1, z, stage, 's');
        B(.05, h, w, glassM, x + s*.08, y, z, stage, 's', true);
        B(.65, .09, w + .7, w2M, x + s*.32, y + h + .25, z, stage, 's');
      }
    }

    // plinth and steps
    B(W + .6, PL, D + .6, conc, 0, 0, 0, 0);
    if(d.roof === 'tile') B(W - 1, PL, 2.2, conc, 0, 0, zf + 1.3, 0);
    else { B(1.9, .3, 1.1, conc, doorX, 0, zf + .85, 0); B(1.9, .15, .5, conc, doorX, .3, zf + .55, 0); }

    for(let i=0;i<d.floors;i++){
      const y = PL + i*FH;
      const cols = [[x0+.16, zf-.16], [x1-.16, zf-.16], [x0+.16, zb+.16], [x1-.16, zb+.16], [0, zb+.16]];
      if(d.park && i === 0) cols.push([x0 + PW, zf - .16]);
      cols.forEach(c => B(.32, FH - .22, .32, conc, c[0], y, c[1], 1));
      B(W + .3, .22, D + .3, w2M, 0, y + FH - .22, 0, 1);
      if(d.park && i === 0){
        B(W - PW, FH - .22, D - .04, wallM, x0 + PW + (W - PW)/2, y, 0, 2);
        B(PW, FH - .22, D*.45, wallM, x0 + PW/2, y, zb + D*.225, 2);
      } else B(W - .04, FH - .22, D - .04, wallM, 0, y, 0, 2);

      if(i === 0){
        B(1.35, 2.45, .08, frameM, doorX, y, zf + .02, 3, 's');
        B(1.1, 2.3, .1, woodM, doorX, y, zf + .06, 3, 's');
        B(.25, .12, .12, lampM, doorX + .9, y + 2.4, zf + .1, 3, 's', true);
        win(x1 - 2.2, y + .9, 1.6, 1.45, zf, 'f', 3);
        if(!d.park) win(x0 + 2.4, y + .9, 1.6, 1.45, zf, 'f', 3);
        win(x1, y + .9, 1.4, 1.4, 0, 'r', 3);
        if(!d.park) win(x0, y + .9, 1.4, 1.4, -1, 'l', 3);
      } else {
        if(d.cant){
          const cw = W*.4 + 1.1, cx = x0 - 1.1 + cw/2, cz0 = zb + 1, cz1 = zf + .7, czc = (cz0 + cz1)/2;
          B(cw, FH, cz1 - cz0, w2M, cx, y - .0, czc, 2);
          B(cw - .9, 2.35, .06, glassM, cx, y + .3, cz1 + .02, 3, 's', true);
          B(cw, .16, 1.3, w2M, cx, y, cz1 + .64, 2);
          B(cw - .1, 1.05, .05, railM, cx, y + .16, cz1 + 1.25, 3, 'y', true);
          B(cw - .1, .06, .07, steelM, cx, y + 1.21, cz1 + 1.25, 3, 's', true);
          win(x0 + W*.58, y + .9, 1.4, 1.4, zf, 'f', 3);
          win(x1 - 2.2, y + .9, 1.4, 1.4, zf, 'f', 3);
        } else {
          win(x0 + 1.6, y + .9, 1.3, 1.4, zf, 'f', 3);
          win(x0 + W*.48, y + .9, 1.3, 1.4, zf, 'f', 3);
          B(W*.34, .14, 1.0, w2M, x1 - 1.9, y, zf + .5, 2);
          for(let k=0;k<9;k++) B(.04, 1.0, .04, steelM, x1 - 1.9 - W*.17 + .1 + k*(W*.34 - .2)/8, y + .14, zf + .96, 3, 'y', true);
          B(W*.34, .06, .08, steelM, x1 - 1.9, y + 1.14, zf + .96, 3, 's', true);
          B(1.0, 2.2, .06, glassM, x1 - 1.9, y + .15, zf + .03, 3, 's', true);
        }
        win(x1, y + .9, 1.4, 1.4, 0, 'r', 3);
        win(x0 - (d.cant ? 1.1 : 0), y + .9, 1.3, 1.4, -2.2, 'l', 3);
      }
    }

    if(d.clad) B(1.1, top - PL, .2, d.clad === 'wood' ? woodM : stoneM, x1 - .85, PL, zf + .1, 4);

    if(d.roof === 'flat'){
      B(W + .3, 1.0, .16, w2M, 0, top, zf + .07, 4); B(W + .3, 1.0, .16, w2M, 0, top, zb - .07, 4);
      B(.16, 1.0, D + .3, w2M, x0 - .07, top, 0, 4); B(.16, 1.0, D + .3, w2M, x1 + .07, top, 0, 4);
      if(d.cant){ const cw = W*.4 + 1.1, cx = x0 - 1.1 + cw/2; B(cw, 1.0, .16, w2M, cx, top, zf + .78, 4); B(.16, 1.0, D - .3, w2M, x0 - 1.18, top, (zb + 1 + zf + .7)/2, 4); }
      const hx = x0 + 2.3, hz = zb + 2.3;
      B(3.0, 2.6, 3.6, wallM, hx, top, hz, 4);
      B(3.5, .18, 4.1, w2M, hx, top + 2.6, hz, 4);
      B(.95, 2.05, .07, woodM, hx, top, hz + 1.82, 4, 's');
      const tg = new THREE.CylinderGeometry(.62, .62, 1.25, 20); tg.translate(0, .625, 0);
      const tank = new THREE.Mesh(tg, darkM); tank.position.set(hx + .5, top + 2.78, hz - .4); put(tank, 4, 'y');
      if(d.id === 'vaanam'){
        [[1.2,-2.4],[x1-.7,-2.4],[1.2,1.8],[x1-.7,1.8]].forEach(p => B(.14, 2.5, .14, woodM, p[0], top, p[1], 4));
        for(let k=0;k<7;k++) B(.08, .14, 4.6, woodM, 1.2 + k*(x1 - 1.9)/6, top + 2.5, -.3, 4, 's');
        [[2,2.6],[3.4,2.6],[x1-1.2,2.6]].forEach(p => { const s = new THREE.Mesh(new THREE.IcosahedronGeometry(.45, 1), mat('sh2', {color: 0x4c7f36, roughness: .9, flatShading: true})); s.position.set(p[0], top + .5, p[1]); put(s, 4, 's'); });
      }
    } else {
      const rg = new THREE.ConeGeometry(1, 2.6, 4, 1); rg.rotateY(Math.PI/4); rg.translate(0, 1.3, 0);
      const roof = new THREE.Mesh(rg, mat('tile', {map: texTile(), roughness: .8}));
      roof.scale.set((W + 1.8)/Math.SQRT2, 1, (D + 3.6)/Math.SQRT2); roof.position.set(0, top - .05, .9); put(roof, 4, 'y');
      [x0 + .6, x0 + W*.3, x1 - W*.3, x1 - .6].forEach(px => { const cg = new THREE.CylinderGeometry(.14, .16, FH - .1, 14); cg.translate(0, (FH - .1)/2, 0); const p = new THREE.Mesh(cg, w2M); p.position.set(px, PL, zf + 2.1); put(p, 1, 'y'); });
    }

    // compound wall, gate, lamps
    const cwM = mat('cw', {map: texPlaster('#d8d0c0'), roughness: .95});
    const gateX = d.park ? x0 + PW/2 : 0, gw = 4.2, sx = W/2 + 3;
    B(gateX - gw/2 + sx, 1.25, .22, cwM, (-sx + gateX - gw/2)/2, 0, zw, 5);
    B(sx - (gateX + gw/2), 1.25, .22, cwM, (sx + gateX + gw/2)/2, 0, zw, 5);
    B(.22, 1.25, zw - (zb - 2), cwM, -sx, 0, (zw + zb - 2)/2, 5);
    B(.22, 1.25, zw - (zb - 2), cwM, sx, 0, (zw + zb - 2)/2, 5);
    B(2 * sx, 1.25, .22, cwM, 0, 0, zb - 2, 5);
    [gateX - gw/2 - .25, gateX + gw/2 + .25].forEach(px => { B(.5, 1.7, .5, w2M, px, 0, zw, 5); B(.3, .3, .3, lampM, px, 1.7, zw, 5, 's', true); });
    for(let k=0;k<=20;k++) B(.035, 1.3, .035, frameM, gateX - gw/2 + k*gw/20, .05, zw, 5, 'y', true);
    B(gw, .06, .06, frameM, gateX, 1.3, zw, 5, 's', true); B(gw, .06, .06, frameM, gateX, .15, zw, 5, 's', true);

    // car
    if(d.park){
      const cx = x0 + PW/2, cz = zf - 2.6, paint = mat('car', {color: 0x9e2a1f, roughness: .25, metalness: .6});
      B(1.8, .7, 4.2, paint, cx, .3, cz, 5); B(1.6, .6, 2.3, mat('cabin', {color: 0x1b2229, roughness: .1, metalness: .9}), cx, 1.0, cz - .2, 5);
      [[-.85,-1.35],[.85,-1.35],[-.85,1.35],[.85,1.35]].forEach(p => { const wg = new THREE.CylinderGeometry(.34, .34, .25, 18); wg.rotateZ(Math.PI/2); wg.translate(0, .34, 0); const wh = new THREE.Mesh(wg, darkM); wh.position.set(cx + p[0], 0, cz + p[1]); put(wh, 5, 's'); });
    }

    // palms and shrubs
    function palm(px, pz, hgt, lean, rot){
      const trunkM = mat('trunk', {color: 0x7a6248, roughness: .95});
      const g = new THREE.Group(); g.position.set(px, 0, pz); g.rotation.y = rot;
      let cy = 0, cx = 0; const seg = 7;
      for(let s=0;s<seg;s++){ const h = hgt/seg, a = lean*(s/seg);
        const cg = new THREE.CylinderGeometry(.16 - s*.008, .2 - s*.008, h + .05, 9); cg.translate(0, h/2, 0);
        const m = new THREE.Mesh(cg, trunkM); m.position.set(cx, cy, 0); m.rotation.z = -a; m.castShadow = true; g.add(m);
        cx += Math.sin(a)*h; cy += Math.cos(a)*h; }
      const lm = mat('leaf', {map: texLeaf(), alphaTest: .45, side: THREE.DoubleSide, roughness: .8});
      for(let k=0;k<13;k++){ const lg = new THREE.PlaneGeometry(.8, 3.6); lg.translate(0, 1.8, 0);
        const l = new THREE.Mesh(lg, lm); l.position.set(cx, cy, 0); l.rotation.order = 'YXZ'; l.rotation.y = k*Math.PI*2/13; l.rotation.x = 1.0 + (k%3)*.25; g.add(l); }
      scene.add(g);
    }
    palm(x0 - 4.6, zf + 3.4, 8.5, .35, .3);
    palm(x1 + 5.5, zb + .5, 9.5, -.25, 1.2);
    palm(x1 + 9, zf + 1, 7.5, .3, 2.4);
    const shrubM = [mat('s1', {color: 0x4a7a33, roughness: .9, flatShading: true}), mat('s2', {color: 0x5c8a3a, roughness: .9, flatShading: true})];
    const sr = rng(21);
    for(let k=0;k<10;k++){ const sx2 = -sx + .9 + sr()*(2*sx - 1.8); if(Math.abs(sx2 - gateX) < gw/2 + .8) continue;
      const s = new THREE.Mesh(new THREE.IcosahedronGeometry(.45 + sr()*.35, 1), shrubM[k%2]); s.position.set(sx2, .4, zw - .8); s.castShadow = true; scene.add(s); }

    if(night){
      const pl = new THREE.PointLight(0xffb866, 1.6, 10, 2); pl.position.set(doorX, PL + 2.6, zf + 1.2); scene.add(pl);
      const gl = new THREE.PointLight(0xffc77a, 1.0, 9, 2); gl.position.set(gateX, 2.2, zw + .6); scene.add(gl);
    }
    return {scene, parts, top};
  }

  function frameCam(cam, d, target){
    const H = PL + d.floors*FH, R = Math.max(d.m.W, d.m.D)*2.1 + 15 + d.floors*2.6;
    target.set(0, H*.42, 1.2);
    cam.position.set(R*.62, H*.42 + R*.26, R*.8);
    cam.lookAt(target);
  }
  function disposeScene(s){ s.traverse(o => { if(o.geometry) o.geometry.dispose(); }); }

  const V = {r: null, scene: null, cam: null, ctl: null, parts: [], idx: 0, night: null, building: false, t0: 0, visible: true, env: {}, target: null, ang: 0};
  function initViewer(){
    const cv = $('hero-canvas');
    $('hero-render').classList.add('r3d');
    $('stage-ui').hidden = false; $('rebuild').hidden = false; $('hero-hint').hidden = false;
    V.r = new THREE.WebGLRenderer({canvas: cv, antialias: true});
    V.r.setPixelRatio(Math.min(1.75, window.devicePixelRatio || 1));
    V.cam = new THREE.PerspectiveCamera(32, 1.25, .1, 500);
    V.target = new THREE.Vector3();
    if(THREE.OrbitControls){
      V.ctl = new THREE.OrbitControls(V.cam, cv);
      Object.assign(V.ctl, {enableDamping: true, dampingFactor: .08, enablePan: false, enableZoom: false, minPolarAngle: .55, maxPolarAngle: 1.45, autoRotate: !reduce, autoRotateSpeed: .55});
      cv.style.touchAction = 'pan-y';
      V.ctl.addEventListener('start', () => { V.ctl.autoRotate = false; clearTimeout(V.rt); });
      V.ctl.addEventListener('end', () => { if(!reduce) V.rt = setTimeout(() => V.ctl.autoRotate = true, 6000); });
    }
    const size = () => { const w = cv.clientWidth, h = cv.clientHeight; if(!w || !h) return; V.r.setSize(w, h, false); V.cam.aspect = w/h; V.cam.updateProjectionMatrix(); };
    if(window.ResizeObserver) new ResizeObserver(size).observe(cv); else window.addEventListener('resize', size);
    size();
    if(window.IntersectionObserver) new IntersectionObserver(es => { V.visible = es[0].isIntersecting; }).observe(cv);
    $('rebuild').addEventListener('click', () => startBuild());
    loadDesign(0, false);
    requestAnimationFrame(tick);
  }
  function loadDesign(i, build){
    const night = isDark();
    if(V.scene) disposeScene(V.scene);
    V.idx = i; heroIdx = i; heroCaption();
    setupRenderer(V.r, night);
    if(!V.env[night]) V.env[night] = makeEnv(V.r, night);
    const S = buildScene(DESIGNS[i], night);
    S.scene.environment = V.env[night];
    V.scene = S.scene; V.parts = S.parts; V.night = night;
    frameCam(V.cam, DESIGNS[i], V.target);
    if(V.ctl){ V.ctl.target.copy(V.target); V.ctl.update(); }
    if(build) startBuild(); else { V.building = false; showStage(-1); }
  }
  function startBuild(){
    if(reduce){ showStage(-1); return; }
    V.building = true; V.t0 = performance.now();
    V.parts.forEach(p => { if(p.userData.mode === 's') p.scale.set(.001, .001, .001); else p.scale.set(1, .001, 1); });
  }
  function showStage(s){
    const d = DESIGNS[V.idx], cost = d.per * d.floors * (CITY[st.city].rates[d.pkg] + sizeAdj(d.per * d.floors, d.floors));
    if(s < 0){
      $('stage-chip').textContent = 'Finished · ' + d.name;
      $('stage-pay').textContent = PKG.find(p => p.id === d.pkg).name + ' package · ' + lakh(cost) + ' in ' + CITY[st.city].label;
      $('stage-fill').style.width = '100%';
    } else {
      $('stage-chip').textContent = 'Stage ' + (s + 1) + ' of 6 · ' + STAGES[s][0];
      $('stage-pay').textContent = 'Pay after it is checked: ' + STAGES[s][1] + '% · ' + lakh(cost * STAGES[s][1] / 100);
    }
  }
  const ease = k => 1 - Math.pow(1 - k, 3);
  function tick(now){
    requestAnimationFrame(tick);
    if(!V.visible || document.hidden || !V.scene) return;
    if(V.building){
      const e = (now - V.t0) / 1000;
      V.parts.forEach(p => {
        const k = Math.min(1, Math.max(0, (e - p.userData.stage*STAGE_DUR) / (STAGE_DUR*.85)));
        const v = Math.max(.001, ease(k));
        if(p.userData.mode === 's') p.scale.set(v, v, v); else p.scale.y = v;
      });
      const s = Math.min(5, Math.floor(e / STAGE_DUR));
      showStage(s);
      $('stage-fill').style.width = Math.min(100, e / (6*STAGE_DUR) * 100) + '%';
      if(e > 6*STAGE_DUR + .2){ V.building = false; showStage(-1); }
    }
    if(V.ctl) V.ctl.update();
    else if(!reduce){ V.ang += .0025; const p = V.cam.position, r = Math.hypot(p.x, p.z); p.x = Math.sin(V.ang + .66)*r; p.z = Math.cos(V.ang + .66)*r; V.cam.lookAt(V.target); }
    V.r.render(V.scene, V.cam);
  }
  function renderThumbs(){
    const night = isDark();
    if(STATIC_IMG && !night) return;
    let r;
    try{ r = new THREE.WebGLRenderer({antialias: true, preserveDrawingBuffer: true}); }catch(e){ return; }
    setupRenderer(r, night); r.setPixelRatio(1); r.setSize(960, 600, false);
    const env = makeEnv(r, night), cam = new THREE.PerspectiveCamera(30, 960/600, .1, 500), tg = new THREE.Vector3();
    DESIGNS.forEach((d, i) => {
      const S = buildScene(d, night); S.scene.environment = env;
      frameCam(cam, d, tg);
      const ang = [.0, -.35, .25, -.15][i], p = cam.position, rr = Math.hypot(p.x, p.z), a0 = Math.atan2(p.x, p.z) + ang;
      p.x = Math.sin(a0)*rr; p.z = Math.cos(a0)*rr; p.lerp(tg, .24); p.y -= 1.5; cam.lookAt(tg);
      r.render(S.scene, cam);
      const img = document.getElementById('im-' + d.id); if(img) img.src = r.domElement.toDataURL('image/jpeg', .9);
      disposeScene(S.scene);
    });
    {
      const d = DESIGNS[0], S = buildScene(d, night); S.scene.environment = env;
      frameCam(cam, d, tg); const p = cam.position; p.lerp(tg, .12); p.y -= .8; cam.lookAt(tg);
      for(let s=0;s<6;s++){
        S.parts.forEach(pt => { const v = pt.userData.stage <= s ? 1 : .001; pt.scale.set(v, v, v); });
        r.render(S.scene, cam);
        const img = document.getElementById('st-' + s); if(img) img.src = r.domElement.toDataURL('image/jpeg', .88);
      }
      disposeScene(S.scene);
    }
    r.dispose(); if(r.forceContextLoss) r.forceContextLoss();
  }
  let rf;
  function refresh3D(){
    clearTimeout(rf);
    rf = setTimeout(() => { const n = isDark(); if(V.r && V.night !== n){ loadDesign(V.idx, false); renderThumbs(); } }, 120);
  }
  function tilt(){
    if(reduce || !window.matchMedia || !matchMedia('(pointer: fine)').matches) return;
    document.querySelectorAll('.design').forEach(el => {
      el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(), px = (e.clientX - r.left)/r.width - .5, py = (e.clientY - r.top)/r.height - .5;
        el.style.transform = `perspective(1000px) rotateX(${(-py*5).toFixed(2)}deg) rotateY(${(px*6).toFixed(2)}deg) translateY(-4px)`; });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- scroll-driven build story ---------- */
  const SV = {on: false};
  function initStory(){
    const cv = document.getElementById('story-canvas'), steps = [...document.querySelectorAll('.steps-story li')];
    if(!cv || !steps.length) return;
    const setActive = i => { steps.forEach((li, k) => li.classList.toggle('on', k === i)); $('story-chip').textContent = 'Stage ' + (i + 1) + ' of 6 · ' + STAGES[i][0]; };
    const progress = () => {
      const list = document.querySelector('.steps-story'), r = list.getBoundingClientRect(), mid = window.innerHeight * .55;
      return Math.min(1, Math.max(0, (mid - r.top) / Math.max(1, r.height - window.innerHeight * .3)));
    };
    if(!(HAS3D && window.THREE)){
      cv.hidden = true; const img = $('story-img'); img.hidden = false;
      const srcFor = i => { const st = document.getElementById('st-' + i); return st && st.getAttribute('src') ? st.getAttribute('src') : (STATIC_IMG ? STATIC_IMG + 'stages/stage-' + i + '.jpg' : ''); };
      let last = -1;
      const upd = () => { const p = progress(), i = Math.min(5, Math.floor(p * 6)); $('story-fill').style.width = (p * 100) + '%'; if(i !== last){ last = i; setActive(i); const s2 = srcFor(i); if(s2) img.src = s2; img.alt = '3D illustration of the ' + STAGES[i][0].toLowerCase() + ' stage'; } };
      window.addEventListener('scroll', upd, {passive: true}); upd(); return;
    }
    const start = () => {
      if(SV.on) return; SV.on = true;
      SV.r = new THREE.WebGLRenderer({canvas: cv, antialias: true});
      SV.r.setPixelRatio(Math.min(1.75, window.devicePixelRatio || 1));
      setupRenderer(SV.r, false);
      const S = buildScene(DESIGNS[0], false); S.scene.environment = makeEnv(SV.r, false);
      SV.scene = S.scene; SV.parts = S.parts;
      SV.cam = new THREE.PerspectiveCamera(32, 1.25, .1, 500); SV.tg = new THREE.Vector3();
      frameCam(SV.cam, DESIGNS[0], SV.tg); SV.cam.position.lerp(SV.tg, .1);
      SV.r0 = Math.hypot(SV.cam.position.x, SV.cam.position.z); SV.a0 = Math.atan2(SV.cam.position.x, SV.cam.position.z); SV.y0 = SV.cam.position.y;
      const size = () => { const w = cv.clientWidth, h = cv.clientHeight; if(!w || !h) return; SV.r.setSize(w, h, false); SV.cam.aspect = w / h; SV.cam.updateProjectionMatrix(); draw(); };
      if(window.ResizeObserver) new ResizeObserver(size).observe(cv);
      size();
      let raf = 0; const req = () => { if(!raf) raf = requestAnimationFrame(() => { raf = 0; draw(); }); };
      window.addEventListener('scroll', req, {passive: true}); window.addEventListener('resize', req);
    };
    let last = -1;
    function draw(){
      if(!SV.scene) return;
      const p = progress(), g = p * 6.2;
      SV.parts.forEach(pt => { const k = Math.min(1, Math.max(0, g - pt.userData.stage)), v = Math.max(.001, 1 - Math.pow(1 - k, 3));
        if(pt.userData.mode === 's') pt.scale.set(v, v, v); else pt.scale.set(1, v, 1); });
      const a = SV.a0 - .5 + p * 1.1;
      SV.cam.position.set(Math.sin(a) * SV.r0, SV.y0 + (1 - p) * 2.5, Math.cos(a) * SV.r0); SV.cam.lookAt(SV.tg);
      SV.r.render(SV.scene, SV.cam);
      $('story-fill').style.width = (p * 100) + '%';
      const i = Math.min(5, Math.floor(p * 6)); if(i !== last){ last = i; setActive(i); }
    }
    setActive(0);
    if(window.IntersectionObserver){ const io = new IntersectionObserver(es => { if(es[0].isIntersecting){ io.disconnect(); start(); } }, {rootMargin: '300px'}); io.observe(cv); }
    else start();
  }
  function closeMenu(){ const b = document.getElementById('menu-btn'), n = document.getElementById('site-nav'); if(b && n){ b.setAttribute('aria-expanded', 'false'); n.classList.remove('open'); } }
  (function(){
    const b = document.getElementById('menu-btn'), n = document.getElementById('site-nav'); if(!b || !n) return;
    b.addEventListener('click', () => { const open = b.getAttribute('aria-expanded') !== 'true'; b.setAttribute('aria-expanded', String(open)); n.classList.toggle('open', open); });
    n.addEventListener('click', e => { if(e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
  })();
  (function(){
    const cur = document.body.getAttribute('data-page-name');
    if(cur) document.querySelectorAll('[data-nav]').forEach(a => a.setAttribute('aria-current', a.dataset.nav === cur ? 'page' : 'false'));
  })();
  function presetFromQuery(){
    try{ const q = new URLSearchParams(location.search).get('design'); const d = DESIGNS.find(x => x.id === q); if(!d || !document.getElementById('in-area')) return;
      st.ct = 'turnkey'; st.pkg = d.pkg; document.querySelectorAll('[data-ct]').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.ct === 'turnkey')));
      $('in-area').value = d.per; $('in-floors').value = String(d.floors); renderPkgCards(); calc(); }catch(_){}
  }
  renderSpec(); bindCompare(); renderTracker(); countUp(); buildDesigns(); buildDots(); buildAreaLinks(); setCity(st.city);
  presetFromQuery();
  route();
  window.addEventListener('hashchange', route);
    let ok3D = false;
  const hasHero = !!document.getElementById('hero-canvas');
  if(HAS3D && hasHero){
    try{
      initViewer(); ok3D = true;
      setTimeout(() => { try{ renderThumbs(); }catch(e){ console.warn(e); } }, 60);
      document.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => {
        loadDesign(DESIGNS.findIndex(x => x.id === b.dataset.view), true);
        $('hero-render').scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'center'});
      }));
    }catch(e){ console.warn('3D unavailable', e); }
  }
  if(HAS3D && !hasHero && document.querySelector('img[id^="im-"],img[id^="st-"]')){ ok3D = true; setTimeout(() => { try{ renderThumbs(); }catch(e){} }, 60); }
  try{ initStory(); }catch(e){ console.warn(e); }
  if(!ok3D && hasHero){
    $('hero-render').classList.remove('r3d');
    if(HAS3D) document.querySelectorAll('.design img').forEach(img => { const d = DESIGNS.find(x => 'im-' + x.id === img.id); const c = document.createElement('canvas'); c.id = 'cv-' + d.id; c.width = 800; c.height = 500; img.replaceWith(c); });
    DESIGNS.forEach(d => { const cv = document.getElementById('cv-' + d.id); if(cv) drawHouse(cv, d, 0); });
    drawHouse($('hero-canvas'), DESIGNS[heroIdx], heroT);
    if(!reduce) requestAnimationFrame(loop);
  }
  let rz; window.addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(drawAll, 150); });
  if(window.matchMedia){ const mq = matchMedia('(prefers-color-scheme: dark)'); (mq.addEventListener ? mq.addEventListener('change', drawAll) : mq.addListener(drawAll)); }
  new MutationObserver(drawAll).observe(document.documentElement, {attributes:true, attributeFilter:['data-theme']});
});
