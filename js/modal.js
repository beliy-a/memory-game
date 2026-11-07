export function openModal(modal) {
  if (!modal) return;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

export function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');

  if (!document.querySelector('.modal.is-open')) {
    document.body.classList.remove('no-scroll');
  }
}

export function initModals() {
  document.querySelectorAll('.modal').forEach((modal) => {

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });

   
    modal.querySelectorAll('[data-modal-close]').forEach((btn) => {
      btn.addEventListener('click', () => closeModal(modal));
    });
  });


  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const open = document.querySelector('.modal.is-open');
      if (open) closeModal(open);
    }
  });
}