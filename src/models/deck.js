import { Card } from 'models'
import { Suits } from 'constants/cards'
import { Logger } from 'utils'

export default class Deck {
    constructor() {
        this.cards = Suits.reduce((acc, suit) => {
            let cardsInSuit = []
            // TODO: break into own fn
            for (let i = 1; i <= 13; i++) {
                cardsInSuit.push(new Card(suit, i))
            }

            return [...acc, ...cardsInSuit]
        }, [])
    }

    shuffle() {
        // TODO
        // Shuffle returns no value, but results in the cards in the deck being
        // randomly permuted. Do not use a library-provided shuffle function.
        // You may use library-provided random number generators

        this.cards.sort(() => Math.random() - 0.5)
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
