export function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('header__title');
    title.textContent = 'Memory';

    const stats = document.createElement('div');
    stats.classList.add('header__stats');
    const movesStat = createStat('Moves', '0', 'moves-count');
    const pairsStat = createStat('Pairs', '0 / 8', 'pairs-count');
    stats.append(movesStat, pairsStat);

    const controls = document.createElement('div');
    controls.classList.add('header__controls');

    const newGameBtn = document.createElement('button');
    newGameBtn.classList.add('btn', 'btn--primary');
    newGameBtn.id = 'btn-new-game';
    newGameBtn.type = 'button';
    newGameBtn.textContent = 'New Game';

    const leaderboardBtn = document.createElement('button');
    leaderboardBtn.classList.add('btn', 'btn--outline');
    leaderboardBtn.id = 'btn-leaderboard';
    leaderboardBtn.type = 'button';
    leaderboardBtn.textContent = 'Leaderboard';

    controls.append(newGameBtn, leaderboardBtn);
    header.append(title, stats, controls);
    return header;
}


function createStat(label, initialValue, id) {
  const stat = document.createElement('div');
  stat.classList.add('stat');

  const labelEl = document.createElement('span');
  labelEl.classList.add('stat__label');
  labelEl.textContent = label;

  const valueEl = document.createElement('span');
  valueEl.classList.add('stat__value');
  valueEl.id = id;
  valueEl.textContent = initialValue;

  stat.append(labelEl, valueEl);

  return stat;
}

