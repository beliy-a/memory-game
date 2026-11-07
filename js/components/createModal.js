export function createModal({ id, content, wide = false }) {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.id = id;
  modal.setAttribute('aria-hidden', 'true');

  const contentEl = document.createElement('div');
  contentEl.classList.add('modal__content');
  if (wide) {
    contentEl.classList.add('modal__content--wide');
  }

  contentEl.append(content);
  modal.append(contentEl);

  return modal;
}