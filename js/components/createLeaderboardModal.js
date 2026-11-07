import { createModal } from './createModal.js';

export function createLeaderboardModal() {
  const content = document.createElement('div');

  const title = document.createElement('h2');
  title.classList.add('modal__title');
  title.textContent = 'Leaderboard';

  const text = document.createElement('p');
  text.classList.add('modal__text');
  text.textContent = 'Your best games — top 10 by fewest moves.';

  const list = document.createElement('ol');
  list.classList.add('leaderboard');
  list.id = 'leaderboard-list';

  const actions = document.createElement('div');
  actions.classList.add('modal__actions');

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.classList.add('btn', 'btn--primary');
  closeBtn.setAttribute('data-modal-close', '');
  closeBtn.textContent = 'Close';

  actions.append(closeBtn);
  content.append(title, text, list, actions);

  return createModal({ id: 'leaderboard-modal', content, wide: true });
}