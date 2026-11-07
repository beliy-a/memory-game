import { createModal } from './createModal.js';

export function createWinModal() {
  const content = document.createElement('div');

  const title = document.createElement('h2');
  title.classList.add('modal__title');
  title.textContent = 'You Win!';

  const text = document.createElement('p');
  text.classList.add('modal__text');
  text.append('You completed the game in ');
  const movesStrong = document.createElement('strong');
  movesStrong.id = 'final-moves';
  movesStrong.textContent = '0';
  text.append(movesStrong, ' moves.');

  const actions = document.createElement('div');
  actions.classList.add('modal__actions');

  const playAgainBtn = document.createElement('button');
  playAgainBtn.type = 'button';
  playAgainBtn.id = 'btn-play-again';
  playAgainBtn.classList.add('btn', 'btn--primary');
  playAgainBtn.textContent = 'New Game';

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.classList.add('btn', 'btn--outline');
  closeBtn.setAttribute('data-modal-close', '');
  closeBtn.textContent = 'Close';

  actions.append(playAgainBtn, closeBtn);
  content.append(title, text, actions);

  return createModal({ id: 'win-modal', content });
}