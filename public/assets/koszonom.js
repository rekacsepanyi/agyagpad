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
  // A kapcsolt Google tag feldolgozza a GA4-parancsot, ha a látogató
  // engedélyezte a mérést. Ne hozz létre második URL-alapú konverziót.
  window.agyagpadTrackLead?.({
    form_name: 'agyagpad-erdeklodes',
    program: receipt.program,
    form_source: receipt.source
  });
})();
