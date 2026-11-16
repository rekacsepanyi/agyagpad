(() => {
  // Egyszer használható, tíz percig érvényes jelzés; személyes adatot nem tárol.
  let receipt;
  try {
    receipt = JSON.parse(sessionStorage.getItem('agyagpad-lead-success'));
    sessionStorage.removeItem('agyagpad-lead-success');
  } catch { return; }
  const programs = ['kostolo', 'kezdo-kurzus', 'csapatepito', 'egyeb'];
  const sources = ['/', '/index.html', '/tanfolyamok', '/tanfolyamok.html', '/kapcsolat', '/kapcsolat.html'];
  if (!receipt || !Number.isFinite(receipt.createdAt) || Date.now() < receipt.createdAt || Date.now() - receipt.createdAt > 600000 || !programs.includes(receipt.program) || !sources.includes(receipt.source)) return;
  document.getElementById('koszonom-cim').textContent = 'Köszönöm, az üzeneted megérkezett!';
  document.getElementById('koszonom-visszajelzes').textContent = 'Hamarosan válaszolok a megadott e-mail-címedre, és egyeztetem veled a részleteket és a szabad időpontokat.';
  document.getElementById('koszonom-reszletek').textContent = 'Az érdeklődés elküldése még nem jelent helyfoglalást.';
  // GA4 ajánlott esemény. Mérőazonosító nélkül csak a helyi sorba kerül;
  // Google tag beállítása után dolgozható fel. Ne mérd külön URL-alapon is.
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('event', 'generate_lead', {
    form_name: 'agyagpad-erdeklodes',
    program: receipt.program,
    form_source: receipt.source
  });
})();
