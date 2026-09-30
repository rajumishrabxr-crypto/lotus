const WA_NUMBER = '8797354898';
const PHONE_NUMBER = '+91 8797354898';
const INSTA_URL = 'https://instagram.com/kanchanmishra8731?stkn=MTFhYjl3N3Z6b3J0eg%3D%3D';

function whatsappUrl(message = 'Hello Lotus Beauty Parlour, I would like to enquire about your services.') {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function phoneHref() { return `tel:${PHONE_NUMBER.replace(/\s+/g,'')}`; }

function icon(name, size=18) {
  const common = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"`;
  const p = {
    arrow:`<svg ${common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`,
    message:`<svg ${common}><path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 8.6 8.6 0 0 1-3.8-.9L3 20l1.2-4.2A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8.5 13.2h.01M12 13.2h.01M15.5 13.2h.01"/></svg>`,
    phone:`<svg ${common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></svg>`,
    menu:`<svg ${common}><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
    close:`<svg ${common}><path d="m6 6 12 12M18 6 6 18"/></svg>`,
    map:`<svg ${common}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
    instagram:`<svg ${common}><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.7" r=".7" fill="currentColor" stroke="none"/></svg>`,
    calendar:`<svg ${common}><rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 9h18"/></svg>`,
    check:`<svg ${common}><path d="m5 12 4.3 4.3L19 7"/></svg>`,
    clock:`<svg ${common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
    users:`<svg ${common}><path d="M16 20v-1.5a4.5 4.5 0 0 0-4.5-4.5H7.5A4.5 4.5 0 0 0 3 18.5V20"/><circle cx="9.5" cy="7.5" r="3.5"/><path d="M16 4.8a3.2 3.2 0 0 1 0 6.3M21 20v-1.5a4.5 4.5 0 0 0-3.3-4.3"/></svg>`,
    rupee:`<svg ${common}><path d="M6 4h12M6 8h12M9 4c4.3 0 6 1.5 6 4s-1.7 4-6 4l7 8"/></svg>`,
    heart:`<svg ${common}><path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8a4.7 4.7 0 0 1 8-3.3l.8.8.8-.8a4.7 4.7 0 0 1 8 3.3Z"/></svg>`,
    sparkles:`<svg ${common}><path d="m12 3 1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3ZM19 14l.6 2.4L22 17l-2.4.6L19 20l-.6-2.4L16 17l2.4-.6L19 14ZM5 14l.5 1.8L7 16.3l-1.5.5L5 18.5l-.5-1.7-1.5-.5 1.5-.5L5 14Z"/></svg>`,
    shield:`<svg ${common}><path d="M12 21s8-3.8 8-10.4V5l-8-3-8 3v5.6C4 17.2 12 21 12 21Z"/><path d="m8.5 11.8 2.3 2.3 4.7-5"/></svg>`,
    send:`<svg ${common}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>`
  };
  return p[name] || '';
}

const navLinks = [
  ['About','about.html'],['Services','services.html'],['Pricing','pricing.html'],['Gallery','gallery.html'],['Bridal','bridal-packages.html'],['Contact','contact.html']
];

function headerHtml(){
  const links = navLinks.map(([name,href]) => `<a href="${href}">${name}</a>`).join('');
  return `<div class="topbar"><div class="container">Appointments & enquiries <b>${PHONE_NUMBER}</b><span>•</span> Near Railway Station Ticket Counter, Dumraon</div></div>
  <header class="header"><div class="container nav"><a href="index.html" class="brand"><span class="brand-mark">L</span><span><b>Lotus</b><small>BEAUTY PARLOUR</small></span></a>
  <nav id="mainNav">${links}<a class="nav-cta" href="appointment.html">${icon('calendar',16)} Book Appointment</a></nav>
  <button class="menu" id="menuButton" aria-label="Open menu">${icon('menu',24)}</button></div></header>`;
}

function footerHtml(){
  return `<footer><div class="container footer-grid"><div><a href="index.html" class="brand"><span class="brand-mark">L</span><span><b>Lotus</b><small>BEAUTY PARLOUR</small></span></a><p>A welcoming beauty destination for women in Dumraon, from everyday grooming to bridal beauty.</p><div class="socials"><a href="${whatsappUrl()}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('message')}</a><a href="${INSTA_URL}" target="_blank" rel="noopener" aria-label="Instagram">${icon('instagram')}</a><a href="${phoneHref()}" aria-label="Call">${icon('phone')}</a></div></div><div><h4>Explore</h4><a href="services.html">Services</a><a href="pricing.html">Pricing</a><a href="gallery.html">Gallery</a><a href="bridal-packages.html">Bridal Packages</a></div><div><h4>Visit us</h4><p>${icon('map',16)} Near Railway Station Ticket Counter, Dumraon, Bihar</p><a href="https://maps.app.goo.gl/tVYzAg6STHcnmckL8" target="_blank" rel="noopener" class="text-link">Get directions ${icon('arrow',15)}</a></div></div><div class="copyright"><div class="container">© <span class="year"></span> Lotus Beauty Parlour. Owned & operated by Kanchan Mishra.</div></div></footer>`;
}

function floatingHtml(){
  return `<div class="floating"><a class="float-wa" href="${whatsappUrl()}" target="_blank" rel="noopener">${icon('message')} <span>WhatsApp</span></a><a class="float-call" href="${phoneHref()}" aria-label="Call">${icon('phone')}</a></div>`;
}

function ctaHtml(){
  return `<section class="cta"><div class="container cta-inner"><div><div class="eyebrow">Ready when you are</div><h2 class="serif">Your beauty, your moment.</h2><p>Tell us what you need and we’ll help you plan the right service.</p></div><div class="cta-actions"><a href="appointment.html" class="btn btn-primary">Book an appointment ${icon('arrow',17)}</a><a href="${whatsappUrl()}" target="_blank" rel="noopener" class="btn btn-outline">${icon('message',17)} WhatsApp us</a></div></div></section>`;
}

function serviceCard(name,desc,price,img){
  return `<article class="service-card"><div class="service-img" style="background-image:url('${img}')"></div><div class="service-body"><div><h3>${name}</h3><p>${desc}</p></div><b>${price}</b></div></article>`;
}

function sectionTitle(eyebrow,title,text='',action=''){
  return `<div class="section-head"><div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2></div>${text?`<p>${text}</p>`:''}${action||''}</div>`;
}

const img={hair:'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85',facial:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=85',nails:'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85',makeup:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=85',bridal:'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85',wax:'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=85'};

function initChrome(){
  document.getElementById('site-header')?.insertAdjacentHTML('afterbegin',headerHtml());
  document.getElementById('site-footer')?.insertAdjacentHTML('afterbegin',footerHtml());
  document.body.insertAdjacentHTML('beforeend',floatingHtml());
  document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
  const btn=document.getElementById('menuButton');const nav=document.getElementById('mainNav');
  btn?.addEventListener('click',()=>{const open=nav.classList.toggle('mobile-open');btn.innerHTML=icon(open?'close':'menu',24);btn.setAttribute('aria-label',open?'Close menu':'Open menu')});
}

function bindAppointmentForm(){
  const form=document.getElementById('appointmentForm'); if(!form)return;
  const msg=document.getElementById('formMessage');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const fd=new FormData(form); const name=fd.get('name')||''; const phone=fd.get('phone')||''; const service=fd.get('service')||'Not specified'; const date=fd.get('date')||'Not specified'; const message=fd.get('message')||'';
    const text=`Hello Lotus Beauty Parlour, I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred date: ${date}\nMessage: ${message}`;
    msg.classList.remove('hidden'); msg.textContent='Your enquiry is ready. WhatsApp will open with your details.';
    window.open(whatsappUrl(text),'_blank','noopener');
  });
}

document.addEventListener('DOMContentLoaded',()=>{initChrome();bindAppointmentForm();});
