export function createCard(emoji, index) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.cardId = index;
  card.dataset.value = emoji;

  const inner = document.createElement('div');
  inner.classList.add('card__inner');

  const front = document.createElement('div');
  front.classList.add('card__face', 'card__face--front');
  front.setAttribute('aria-hidden', 'true');

  const frontSymbol = document.createElement('span');
  frontSymbol.classList.add('card__symbol');
  frontSymbol.textContent = '?';
  front.append(frontSymbol);

  const back = document.createElement('div');
  back.classList.add('card__face', 'card__face--back');

  const backSymbol = document.createElement('span');
  backSymbol.classList.add('card__symbol');
  backSymbol.textContent = emoji;
  back.append(backSymbol);

  // Собираем: card > inner > (front, back)
  inner.append(front, back);
  card.append(inner);

  return card;
}