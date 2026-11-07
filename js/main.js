import { createHeader } from './components/createHeader.js';
import { createGameBoard } from './components/createGameBoard.js';

const script = document.querySelector('script[type="module"]');

script.before(createHeader());
script.before(createGameBoard());