(() => {
  // Basic consent mode: a Google-kód csak analitikai engedély után töltődik be.
  const key = 'agyagpad-analytics-consent';
  const maxAge = 180 * 24 * 60 * 60 * 1000;
  const live = location.protocol === 'https:' && location.hostname === 'agyagpad-muhely.netlify.app';
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });
  window.gtag('set', 'allow_google_signals', false);
  window.gtag('set', 'allow_ad_personalization_signals', false);
  window.gtag('set', 'ads_data_redaction', true);
  window.gtag('js', new Date());
  let choice = null;
  try {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved && ['granted', 'denied'].includes(saved.value) && Number.isFinite(saved.time) && Date.now() >= saved.time && Date.now() - saved.time < maxAge) choice = saved.value;
  } catch { /* A választó tiltott tárhely mellett is használható. */ }
  let loaded = false;
  let pendingLead;
  window.agyagpadTrackLead = parameters => {
    if (choice === 'granted') window.gtag('event', 'generate_lead', parameters);
    else if (choice === null) pendingLead = parameters;
  };
  function clearAnalyticsCookies() {
    document.cookie.split(';').map(cookie => cookie.trim().split('=')[0]).filter(name => name === '_ga' || name.startsWith('_ga_')).forEach(name => {
      for (const domain of ['', '; domain=' + location.hostname, '; domain=.' + location.hostname]) {
        document.cookie = name + '=; Max-Age=0; path=/' + domain + '; SameSite=Lax';
      }
    });
  }
  function enable() {
    window.gtag('consent', 'update', {analytics_storage: 'granted'});
    if (pendingLead) {
      window.gtag('event', 'generate_lead', pendingLead);
      pendingLead = undefined;
    }
    if (!live || loaded) return;
    loaded = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-W96CCPWJ';
    document.head.append(script);
  }
  if (choice === 'granted') enable();
  if (choice === 'denied') clearAnalyticsCookies();
  document.addEventListener('DOMContentLoaded', () => {
    const panel = document.createElement('section');
    panel.className = 'measurement-choice';
    panel.setAttribute('aria-labelledby', 'meresi-beallitas-cim');
    panel.innerHTML = '<div class="wrap measurement-layout"><div><h2 id="meresi-beallitas-cim">Segítesz jobbá tenni az oldalt?</h2><p>Engedélyeddel a Google Analytics segítségével mérem az oldal használatát és a sikeres érdeklődéseket. A nevedet, e-mail-címedet és üzeneted szövegét nem küldöm a mérésbe. Az űrlap elutasítás esetén is működik. <a href="/adatkezeles#latogatottsag">Részletek az adatkezelésről</a></p></div><div class="measurement-actions"><button class="button outline" type="button" data-measurement="denied">Elutasítom</button><button class="button" type="button" data-measurement="granted">Engedélyezem</button></div></div>';
    panel.hidden = choice !== null;
    document.body.append(panel);
    let opener;
    const settings = document.createElement('button');
    settings.type = 'button';
    settings.className = 'measurement-settings';
    settings.textContent = 'Mérési beállítások';
    settings.addEventListener('click', () => {
      opener = settings;
      panel.hidden = false;
      panel.querySelector('button').focus();
    });
    document.querySelector('.footer-bottom>div')?.append(settings);
    panel.addEventListener('click', event => {
      const button = event.target.closest('[data-measurement]');
      if (!button) return;
      choice = button.dataset.measurement;
      try { localStorage.setItem(key, JSON.stringify({value: choice, time: Date.now()})); } catch { /* A döntés erre az oldalra továbbra is érvényes. */ }
      panel.hidden = true;
      if (choice === 'granted') enable();
      else {
        pendingLead = undefined;
        window['ga-disable-G-NVP2Z1B13Y'] = true;
        window.gtag('consent', 'update', {analytics_storage: 'denied'});
        clearAnalyticsCookies();
        // A már betöltött kód leállításához friss lap kell; a döntés megmarad.
        if (loaded) { location.reload(); return; }
      }
      if (choice === 'granted') window['ga-disable-G-NVP2Z1B13Y'] = false;
      (opener || settings).focus({preventScroll: true});
    });
  });
})();
