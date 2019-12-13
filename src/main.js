import dotenv from 'dotenv'

import { Deck } from 'models'

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` })

const deck = new Deck()

deck.shuffle()
deck.dealCard()
deck.dealCard()
deck.dealCard()
deck.dealCard()
deck.dealCard()
deck.dealCard()

console.log(deck.prettyPrint({ condense: true }))
