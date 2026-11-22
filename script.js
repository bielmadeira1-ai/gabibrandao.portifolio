(() => {
  const dialog = document.querySelector('.project-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const title = dialog.querySelector('#dialog-title');
  const description = dialog.querySelector('#dialog-description');
  const image = dialog.querySelector('#dialog-image');
  const close = dialog.querySelector('.dialog-close');

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
      dialog.showModal();
    });
  });

  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
})();
