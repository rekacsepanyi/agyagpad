(() => {
  const dialog = document.querySelector('.gallery-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const photo = dialog.querySelector('.lightbox-image');
  const caption = dialog.querySelector('figcaption');
  const status = dialog.querySelector('[role="status"]');
  const closeButton = dialog.querySelector('.lightbox-close');
  let opener;
  document.querySelectorAll('[data-gallery-link]').forEach(link => {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      // A módosított kattintás továbbra is önálló fotót nyithat új lapon.
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      opener = link;
      status.textContent = '';
      photo.alt = link.querySelector('img').alt;
      photo.src = link.href;
      caption.textContent = link.closest('figure').querySelector('figcaption').textContent;
      document.body.classList.add('lightbox-active');
      dialog.showModal();
      closeButton.focus();
    });
  });
  photo.addEventListener('error', () => {
    if (dialog.open) status.textContent = 'A fotót nem sikerült betölteni. Zárd be a nagyítót, és próbáld meg újra.';
  });
  dialog.addEventListener('keydown', event => {
    // A nagyító egyetlen interaktív eleme a bezárógomb.
    if (event.key === 'Tab') { event.preventDefault(); closeButton.focus(); }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('lightbox-active');
    if (opener?.isConnected) opener.focus({preventScroll: true});
  });
})();
