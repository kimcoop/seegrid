import { Suit, Suits, RoyalValue } from 'constants/cards'
import { Card } from 'models'

describe('Card', function() {
    describe('`isValidSuit`', function() {
        it('should return false if passed an invalid suit', function() {
            const badSuits = ['not-a-suit', '', null, 1].forEach(badSuit => {
                expect(Card.isValidSuit(badSuit)).toBe(false)
            })
        })
    })
})
