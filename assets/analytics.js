/* Kalvettu Builders analytics. Paste your IDs below to switch tracking on. */
window.KB = { ga4: '', pixel: '' };   // e.g. ga4: 'G-XXXXXXX', pixel: '1234567890'
(function (k) {
  if (k.ga4) {
    var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + k.ga4; document.head.appendChild(s);
    window.dataLayer = window.dataLayer || []; window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date()); gtag('config', k.ga4);
  }
  if (k.pixel) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v;
      s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', k.pixel); fbq('track', 'PageView');
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a'); if (!a) return;
    var h = a.getAttribute('href') || '', m = h.indexOf('wa.me') > -1 ? 'whatsapp' : h.indexOf('tel:') === 0 ? 'call' : '';
    if (!m) return;
    try { if (window.gtag) gtag('event', 'generate_lead', { method: m }); if (window.fbq) fbq('track', 'Contact', { method: m }); } catch (_) {}
  });
})(window.KB);
