import { Suit, Suits } from 'constants/cards'
import { Card, Deck } from 'models'

let mockInfo

jest.mock('utils/logger', () => {
    mockInfo = jest.fn()

    return {
        info: mockInfo,
    }
})

describe('Deck', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    describe('constructor', () => {
        it('should set `cards` to be array of 52 Cards', () => {
            const deck = new Deck()
            expect(deck.cards).toHaveLength(52)
            expect(deck.cards.every(card => card instanceof Card)).toBe(true)
        })

        it('should invoke `initCardsForSuit` once per entry in Suits', () => {
            const spy = jest.spyOn(Deck, 'initCardsForSuit')

            // eslint-disable-next-line
            new Deck()

            expect(spy).toHaveBeenCalledTimes(Suits.length)
            Suits.forEach(suit => {
                expect(spy).toHaveBeenCalledWith(suit)
            })
        })
    })

    describe('`initCardsForSuit`', () => {
        it('should return an array of 13 cards each with the suit provided', () => {
            const cards = Deck.initCardsForSuit(Suit.SPADES)
            expect(cards).toHaveLength(13)

            cards.forEach(card => {
                expect(card).toBeInstanceOf(Card)
                expect(card.suit).toEqual(Suit.SPADES)
            })
        })

        it('should return an array of cards whose values range from 1-13', () => {
            const cards = Deck.initCardsForSuit(Suit.SPADES)

            cards.forEach((card, i) => {
                expect(card.value).toEqual(i + 1)
            })
        })
    })

    describe('`hasCards`', () => {
        it('should return true on init', () => {
            const deck = new Deck()
            expect(deck.hasCards()).toBe(true)
        })

        it('should return true after 51 calls to `dealCard`', () => {
            const deck = new Deck()
            for (let i = 0; i <= 50; i += 1) {
                deck.dealCard()
            }

            expect(deck.hasCards()).toBe(true)
        })

        it('should return false after 52 calls to `dealCard`', () => {
            const deck = new Deck()
            for (let i = 0; i <= 51; i += 1) {
                deck.dealCard()
            }

            expect(deck.hasCards()).toBe(false)
        })

        it('should return false after 53 calls to `dealCard`', () => {
            const deck = new Deck()
            for (let i = 0; i <= 53; i += 1) {
                deck.dealCard()
            }

            expect(deck.hasCards()).toBe(false)
        })
    })

    describe('`shuffle`', () => {
        it('should change order of cards', () => {
            const deck = new Deck()

            const getValues = cards => cards.map(card => card.value)
            const values1 = getValues(deck.cards)

            deck.shuffle()
            const values2 = getValues(deck.cards)

            deck.shuffle()
            const values3 = getValues(deck.cards)

            expect(values2).not.toEqual(values1)
            expect(values3).not.toEqual(values1)
            expect(values3).not.toEqual(values2)
        })
    })

    describe('`dealCard`', () => {
        it('should return `null` if `hasCards` is false', () => {
            const deck = new Deck()
            jest.spyOn(deck, 'hasCards').mockImplementation(() => false)

            expect(deck.hasCards()).toBe(false)
            expect(deck.dealCard()).toEqual(null)
        })

        it('should return first card and remove it from `cards` if `hasCards` is true', () => {
            const deck = new Deck()
            expect(deck.hasCards()).toBe(true)

            const firstCard = deck.cards[0]
            const originalLength = deck.cards.length
            expect(deck.dealCard()).toEqual(firstCard)

            expect(deck.cards.length).toEqual(originalLength - 1)
            expect(deck.cards.find(card => card === firstCard)).toBeFalsy()
        })

        it('after several calls to `shuffle`, should return first card and remove it from `cards` if `hasCards` is true', () => {
            const deck = new Deck()
            expect(deck.hasCards()).toBe(true)
            deck.shuffle()
            deck.shuffle()
            deck.shuffle()
            deck.shuffle()

            const firstCard = deck.cards[0]
            const originalLength = deck.cards.length
            expect(deck.dealCard()).toEqual(firstCard)

            expect(deck.cards.length).toEqual(originalLength - 1)
            expect(deck.cards.find(card => card === firstCard)).toBeFalsy()
        })
    })

    describe('`prettyPrint`', () => {
        it('should invoke `info` method on `Logger`', () => {
            expect(mockInfo).not.toHaveBeenCalled()
            const deck = new Deck()
            deck.prettyPrint()

            expect(mockInfo).toHaveBeenCalled()
        })

        it('should invoke `info` method on `Logger` with `condense` option', () => {
            expect(mockInfo).not.toHaveBeenCalled()
            const deck = new Deck()
            deck.prettyPrint({ condense: true })

            expect(mockInfo).toHaveBeenCalled()
        })
    })
})
