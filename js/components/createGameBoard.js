export function createGameBoard() {
  const main = document.createElement('main');
  main.classList.add('main');

  const board = document.createElement('section');
  board.classList.add('game-board');
  board.id = 'game-board';
  board.setAttribute('aria-label', 'Memory game board');

  main.append(board);

  return main;
}