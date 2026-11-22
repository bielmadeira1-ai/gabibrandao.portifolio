(() => {
  const dialog = document.querySelector('.project-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const title = dialog.querySelector('#dialog-title');
  const description = dialog.querySelector('#dialog-description');
  const image = dialog.querySelector('#dialog-image');
  const close = dialog.querySelector('.dialog-close');
  const zoom = dialog.querySelector('.dialog-zoom');
  const frame = dialog.querySelector('.dialog-image-frame');

  document.querySelectorAll('[data-open-project]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const card = link.closest('[data-project]');
      const heading = card?.querySelector('h3');
      const copy = card?.querySelector('.project-info p');
      const preview = link.querySelector('img');
      if (!heading || !copy || !preview) return;

      event.preventDefault();
      title.textContent = heading.textContent;
      description.textContent = copy.textContent;
      image.src = link.href;
      image.alt = preview.alt;
      frame.classList.remove('is-zoomed');
      zoom.setAttribute('aria-pressed', 'false');
      zoom.textContent = 'ampliar imagem';
      frame.scrollLeft = 0;
      dialog.showModal();
    });
  });

  close.addEventListener('click', () => dialog.close());
  zoom.addEventListener('click', () => {
    const zoomed = frame.classList.toggle('is-zoomed');
    zoom.setAttribute('aria-pressed', String(zoomed));
    zoom.textContent = zoomed ? 'diminuir imagem' : 'ampliar imagem';
    if (!zoomed) frame.scrollLeft = 0;
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
