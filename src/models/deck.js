import { Card } from 'models'
import { Suits } from 'constants/cards'
import { Logger } from 'utils'

export default class Deck {
    constructor() {
        this.cards = Suits.reduce(
            (acc, suit) => [...acc, ...Deck.initCardsForSuit(suit)],
            []
        )
    }

    static initCardsForSuit(suit) {
        const cardsForSuit = []

        for (let i = 1; i <= 13; i += 1) {
            cardsForSuit.push(new Card(suit, i))
        }

        return cardsForSuit
    }

    // Randomize array in place using the Durstenfeld shuffle algorithm
    // http://en.wikipedia.org/wiki/Fisher-Yates_shuffle#The_modern_algorithm
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
        }
    }

    hasCards() {
        return this.cards.length > 0
    }

    dealCard() {
        if (!this.hasCards()) {
            return null
        }

        return this.cards.shift()
    }

    // prints prettified card info (useful for debugging)
    prettyPrint(options = { condense: false }) {
        if (options?.condense) {
            Logger.info(
                `${this.cards.length} cards in deck:`,
                this.cards.map(card => card.pretty)
            )
        } else {
            Logger.info(`${this.cards.length} cards in deck:`)
            this.cards.map(card => card.prettyPrint())
        }
    }
}
