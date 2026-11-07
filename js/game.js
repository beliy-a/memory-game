import { createCard } from './components/createCard.js';
import { saveResult } from './leaderboard.js';
import { openModal } from './modal.js';

const EMOJIS = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍑', '🥝', '🍍'];
const TOTAL_PAIRS = EMOJIS.length;
const MISMATCH_DELAY = 800;

let board;
let movesEl;
let pairsEl;
let winModal;
let finalMovesEl;

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;
let mismatchTimer = null;

export function initGame() {
  board = document.getElementById('game-board');
  movesEl = document.getElementById('moves-count');
  pairsEl = document.getElementById('pairs-count');
  winModal = document.getElementById('win-modal');
  finalMovesEl = document.getElementById('final-moves');

  board.addEventListener('click', handleCardClick);

  startNewGame();
}


export function startNewGame() {
  if (mismatchTimer) {
    clearTimeout(mismatchTimer);
    mismatchTimer = null;
  }

  firstCard = null;
  secondCard = null;
  lockBoard = false;
  moves = 0;
  matchedPairs = 0;

  updateStats();

  board.innerHTML = '';
  const deck = shuffle([...EMOJIS, ...EMOJIS]);
  deck.forEach((emoji, index) => {
    board.appendChild(createCard(emoji, index));
  });
}


function handleCardClick(event) {
  const card = event.target.closest('.card');
  if (!card) return;
  if (lockBoard) return;
  if (card.classList.contains('is-flipped') || card.classList.contains('is-matched')) return;

  card.classList.add('is-flipped');

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  checkMatch();
}


function checkMatch() {
  moves += 1;
  updateStats();

  const isMatch = firstCard.dataset.value === secondCard.dataset.value;

  if (isMatch) {
    handleMatch();
  } else {
    handleMismatch();
  }
}

function handleMatch() {
  firstCard.classList.add('is-matched');
  secondCard.classList.add('is-matched');

  matchedPairs += 1;
  updateStats();

  resetTurn();

  if (matchedPairs === TOTAL_PAIRS) {
    showWin();
  }
}

function handleMismatch() {
  lockBoard = true;

  mismatchTimer = setTimeout(() => {
    firstCard.classList.remove('is-flipped');
    secondCard.classList.remove('is-flipped');

    resetTurn();
    mismatchTimer = null;
  }, MISMATCH_DELAY);
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function showWin() {
  saveResult(moves);
  finalMovesEl.textContent = moves;
  openModal(winModal);
}

function updateStats() {
  movesEl.textContent = moves;
  pairsEl.textContent = `${matchedPairs} / ${TOTAL_PAIRS}`;
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}