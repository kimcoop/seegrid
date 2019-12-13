import { Logger } from 'utils'
import { Suit, Suits, RoyalValue } from 'constants/cards'

export default class Card {
    constructor(suit, value) {
        if (!Card.isValidSuit(suit)) {
            throw new Error(`Invalid suit: ${suit}`)
            return
        }

        if (!Card.isValidValue(value)) {
            throw new Error(`Invalid value: ${value}`)
            return
        }

        this.suit = suit
        this.value = value
    }

    static isValidSuit(suit) {
        return Suits.includes(suit)
    }

    static isValidValue(value) {
        return Number.isInteger(Number(value)) && value >= 1 && value <= 13
    }

    get prettyValue() {
        if (this.value > 1 && this.value <= 10) {
            return this.value
        }

        if (this.value === 1) {
            return RoyalValue.ACE
        }

        if (this.value === 11) {
            return RoyalValue.JACK
        }

        if (this.value === 12) {
            return RoyalValue.QUEEN
        }

        return RoyalValue.KING
    }

    get prettySuit() {
        return {
            [Suit.SPADES]: '♠',
            [Suit.HEARTS]: '♥',
            [Suit.DIAMONDS]: '♦',
            [Suit.CLUBS]: '♣',
        }[this.suit]
    }

    get pretty() {
        return `${this.prettyValue} ${this.prettySuit}`
    }

    prettyPrint() {
        Logger.info(this.pretty)
    }
}
