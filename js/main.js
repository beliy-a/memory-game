import { createHeader } from './components/createHeader.js';
import { createGameBoard } from './components/createGameBoard.js';
import { createWinModal } from './components/createWinModal.js';
import { createLeaderboardModal } from './components/createLeaderboardModal.js';

const script = document.querySelector('script[type="module"]');

script.before(createHeader());
script.before(createGameBoard());
script.before(createWinModal());
script.before(createLeaderboardModal());