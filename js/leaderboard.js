const STORAGE_KEY = 'memory-game-leaderboard';
const MAX_ENTRIES = 10;

export function getLeaderboard() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveResult(moves) {
  const entry = {
    moves,
    date: new Date().toISOString(),
  };

  const updated = [...getLeaderboard(), entry]
    .sort((a, b) => {
      if (a.moves !== b.moves) return a.moves - b.moves;
      return new Date(a.date) - new Date(b.date);
    })
    .slice(0, MAX_ENTRIES);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}


export function renderLeaderboard() {
  const list = document.getElementById('leaderboard-list');
  if (!list) return;

  list.innerHTML = '';

  const entries = getLeaderboard();

  if (entries.length === 0) {
    const empty = document.createElement('li');
    empty.classList.add('leaderboard__empty');
    empty.textContent = 'No games yet. Play one!';
    list.append(empty);
    return;
  }

  entries.forEach((entry) => {
    list.append(createLeaderboardItem(entry));
  });
}

function createLeaderboardItem(entry) {
  const li = document.createElement('li');
  li.classList.add('leaderboard__item');

  const date = document.createElement('span');
  date.classList.add('leaderboard__date');
  date.textContent = formatDate(entry.date);

  const moves = document.createElement('span');
  moves.classList.add('leaderboard__moves');
  moves.textContent = `${entry.moves} moves`;

  li.append(date, moves);
  return li;
}

function formatDate(isoString) {
  const d = new Date(isoString);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
}