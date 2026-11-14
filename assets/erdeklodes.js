(() => {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  const status = form.querySelector('[role="status"]');
  const button = form.querySelector('[type="submit"]');
  const fields = [...form.querySelectorAll('input:not([type="hidden"]),select,textarea')].filter(field => field.name !== 'bot-field');
  const program = form.elements.program;
  const validPrograms = ['kostolo', 'kezdo-kurzus', 'csapatepito', 'egyeb'];
  const initial = new URLSearchParams(location.search).get('program');
  if (validPrograms.includes(initial)) program.value = initial;
  const clear = field => {
    field.removeAttribute('aria-invalid');
    document.getElementById(field.id + '-error').textContent = '';
  };
  const showError = (field, message) => {
    field.setAttribute('aria-invalid', 'true');
    document.getElementById(field.id + '-error').textContent = message;
  };
  function validate(field) {
    if (field.required && !field.value.trim()) {
      return field.id === 'name' ? 'Add meg a neved.' : field.id === 'email' ? 'Add meg az e-mail-címed.' : 'Válassz programot vagy érdeklődési témát.';
    }
    if (field.id === 'email' && field.validity.typeMismatch) return 'Adj meg egy érvényes e-mail-címet.';
    if (field.id === 'program' && !validPrograms.includes(field.value)) return 'Válassz a felsorolt programok közül.';
    if (field.maxLength > 0 && field.value.length > field.maxLength) return `Legfeljebb ${field.maxLength} karaktert adhatsz meg.`;
    return '';
  }
  fields.forEach(field => {
    const update = () => {
      if (field.hasAttribute('aria-invalid')) {
        const error = validate(field);
        if (error) showError(field, error); else clear(field);
      }
      if (!form.hasAttribute('aria-busy')) status.textContent = '';
    };
    field.addEventListener('input', update);
    field.addEventListener('change', update);
  });
  let pending = false;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (pending) return;
    status.textContent = '';
    let firstInvalid;
    for (const field of fields) {
      const error = validate(field);
      if (error) { showError(field, error); firstInvalid ||= field; } else clear(field);
    }
    if (firstInvalid) {
      status.textContent = 'Ellenőrizd a megjelölt mezőket.';
      firstInvalid.focus();
      return;
    }
    const config = window.AGYAGPAD_FORM_CONFIG || {};
    if (!config.enabled || location.protocol !== 'https:' || !Array.isArray(config.allowedHosts) || !config.allowedHosts.includes(location.hostname)) {
      status.textContent = 'Az üzenetküldés jelenleg nem elérhető. Kérjük, próbáld meg később. A megadott adataid megmaradtak.';
      return;
    }
    let endpoint;
    try {
      endpoint = new URL(config.endpoint, location.origin);
      if (endpoint.origin !== location.origin) throw new Error('Nem megfelelő fogadó.');
    } catch {
      status.textContent = 'Az üzenetet nem sikerült elküldeni. Kérjük, próbáld meg később. A megadott adataid megmaradtak.';
      return;
    }
    const payload = new URLSearchParams(new FormData(form));
    payload.set('name', form.elements.name.value.trim());
    payload.set('email', form.elements.email.value.trim());
    pending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    status.textContent = 'Üzeneted küldése folyamatban…';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(endpoint.href, {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: payload.toString(),
        signal: controller.signal,
        credentials: 'same-origin'
      });
      if (!response.ok) throw new Error('A fogadó nem vette át az üzenetet.');
      status.textContent = 'Köszönöm, az érdeklődésed megérkezett! A részletekről e-mailben egyeztetünk.';
      form.reset();
      fields.forEach(clear);
    } catch {
      status.textContent = 'Az üzenetet nem sikerült elküldeni. Kérjük, próbáld meg újra. A megadott adataid megmaradtak.';
    } finally {
      clearTimeout(timeout);
      pending = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
  form.noValidate = true;
  form.removeAttribute('onsubmit');
  button.disabled = false;
})();
