# Deck of Cards

## Overview

Contained within this repo is two classes, Deck and Card, to model a deck of cards. A logging utility around [winston logger](https://github.com/winstonjs/winston) has been included for convenience in `utils/logger.js`.

## Technologies

### Language

-   JavaScript (node v12.2.0)
-   es.next features transpiled for the current node version with [Babel](https://babeljs.io/)

### Code Quality

-   [Prettier](https://prettier.io/)
-   [ESLint](https://eslint.org/)
-   [Husky](https://github.com/typicode/husky) pre-commit hook to check staged files against linting standards prior to commit

### Tests

-   [Jest](https://jestjs.io/) as the unit testing framework
-   100% coverage

### Useful Commands

Run tests:

```
$ npm test
```

Run tests in watch mode, useful for development:

```
$ npm run test:watch
```

Code coverage check:

```
$ npm run coverage
```

### Example Usage

```js
// src/main.js
import { Deck, Card } from 'models'
import { Suit } from 'constants/cards'
import { Logger } from 'utils'

const deck = new Deck()
Logger.info('Deck has %d cards: %j', deck.cards.length, deck.pretty)

deck.shuffle()
Logger.info('Deck has %d cards: %j', deck.cards.length, deck.pretty)

const dealtCard = deck.dealCard()
Logger.info('Dealt Card: %s', dealtCard.pretty)

const card = new Card(Suit.DIAMONDS, 4)
Logger.info('New Card: %s', card.pretty)
```

For development mode, run the previous example from the command line with npm@5.2+:

```
$ npx nodemon --exec babel-node src/main.js
```

Please note babel-node is not recommended for non-dev environments; for that, you can precompile into `dist/` with:

```
$ npm run build && node dist/main.js
```
