import { choice, remove } from './helpers'
import Fruits from './foods'

const randomFruit = choice(Fruits)

console.log(`I'd like one ${randomFruit}, please`)
console.log(`Here you go: ${randomFruit}`)
console.log(`Delicious! May i have another?`)
remove(Fruits, randomFruit)
console.log(`I'm sorry, we're all out. We have ${Fruits.length} different fruits left`)
