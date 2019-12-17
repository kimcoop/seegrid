import { Deck } from 'models'

const deck = new Deck()

deck.shuffle()
deck.dealCard()
deck.dealCard()
deck.dealCard()
deck.dealCard()
deck.dealCard()
deck.dealCard()

console.log(deck.prettyPrint({ condense: true }))
