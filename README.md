# Memory Game

A minimalist memory game built with vanilla JavaScript, HTML, and CSS. Match all 8 pairs of cards in as few moves as possible.

## Features

- **16 cards, 8 pairs** — shuffled at the start of every game
- **3D flip animations** — smooth card reveals with CSS transforms
- **Move counter** — tracks every pair attempt
- **Win modal** — shows total moves and offers a restart
- **Leaderboard** — top 10 results saved in `localStorage`
- **Minimalist design** — soft gradients and neutral palette
- **Fully responsive** — desktop, tablet, and mobile (down to 380px)
- **Keyboard-friendly modals** — close with `Escape`
- **Zero dependencies** — no frameworks, no libraries, no build step

## Tech Stack

- **HTML5** — semantic markup (generated entirely in JS)
- **CSS3** — Grid, Flexbox, CSS variables, 3D transforms, `@media`
- **JavaScript (ES Modules)** — modular architecture with factories
- **`localStorage`** — persistent leaderboard
- **Google Fonts** — Inter typeface

## How to Run

Clone the repository and start any local server:

```bash
npx serve
```

Then open `http://localhost:3000` in your browser.

> **Important:** ES Modules require an HTTP server. Opening `index.html` via `file://` will not work.

## Project Structure

```
memory-game/
├── index.html              # Entry point (empty body, all content in JS)
├── css/
│   ├── variables.css       # CSS custom properties
│   ├── reset.css           # Browser reset
│   ├── main.css            # Entry point with @import
│   └── components/
│       ├── button.css
│       ├── header.css
│       ├── game-board.css
│       ├── card.css
│       ├── modal.css
│       └── leaderboard.css
└── js/
    ├── main.js             # App launcher
    ├── app.js              # Composition root (mount, init, bind)
    ├── game.js             # Game logic (clicks, matches, win)
    ├── modal.js            # Modal utilities (open, close, init)
    ├── leaderboard.js      # localStorage + rendering
    └── components/
        ├── createHeader.js
        ├── createGameBoard.js
        ├── createCard.js
        ├── createModal.js
        ├── createWinModal.js
        └── createLeaderboardModal.js
```

## How to Play

1. **Click any card** to flip it and reveal an emoji.
2. **Click a second card** to try to find its match.
3. **Match found?** Both cards stay open and glow blue.
4. **No match?** Cards flip back after 0.8 seconds.
5. **Win the game** by matching all 8 pairs. Your move count is saved to the leaderboard.
