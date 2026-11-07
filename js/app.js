import { createHeader } from './components/createHeader.js';
import { createGameBoard } from './components/createGameBoard.js';
import { createWinModal } from './components/createWinModal.js';
import { createLeaderboardModal } from './components/createLeaderboardModal.js';
import { initGame, startNewGame } from './game.js';
import { openModal, closeModal, initModals } from './modal.js';
import { renderLeaderboard } from './leaderboard.js';

export function startApp() {
  mountComponents();
  initModules();
  bindButtons();
}

function mountComponents() {
  const script = document.querySelector('script[type="module"]');

  script.before(createHeader());
  script.before(createGameBoard());
  script.before(createWinModal());
  script.before(createLeaderboardModal());
}

function initModules() {
  initModals();
  initGame();
}


function bindButtons() {
  const newGameBtn = document.getElementById('btn-new-game');
  const playAgainBtn = document.getElementById('btn-play-again');
  const leaderboardBtn = document.getElementById('btn-leaderboard');
  const leaderboardModal = document.getElementById('leaderboard-modal');
  const winModal = document.getElementById('win-modal');

  newGameBtn.addEventListener('click', startNewGame);

  playAgainBtn.addEventListener('click', () => {
    closeModal(winModal);
    startNewGame();
  });

  leaderboardBtn.addEventListener('click', () => {
    renderLeaderboard();
    openModal(leaderboardModal);
  });
}