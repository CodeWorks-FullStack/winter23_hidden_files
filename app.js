let jake = 'Jake'

let totalCats = 3 + 3 + 1

let catDaddy = `Jerms has ${totalCats} cats` // STRING INTERPOLATION
let developers = `It's a hot day
this is a 
non haiku
how about you!`

console.log(developers, catDaddy)

// PRIMITIVE TYPES
true
false
0
1
6
  - 167
null
undefined
"a"
"b"
"c"
"A"
"B"
"C"
"JAKE"
"jake"
"Jake"
NaN


// REFERENCE TYPES
// can change.... you never know what you're gonna get 🍫

let object = {

}

let array = []

function myNameShouldAlwaysBeAVerbBecauseIDoSomethingLikeAnAction() {

}

let someVar = '' // lexical scope

function thatHaveParameters(iAmAParmeter) {
  // argument
}



// EXAMPLE TIME


let gopher = {
  name: 'Gopher Fowler',
  age: 3,
  color: 'black',
  hasShots: true,
  hasRabies: false,
  friends: []
}

let ironMan = {
  name: 'Iron Man Fowler',
  age: 4,
  color: 'Red & Gold',
  hasShots: true,
  hasRabies: false,
  friends: [gopher]
}

let ironManDeux = {
  name: 'Iron Man Fowler',
  age: 4,
  color: 'Red & Gold',
  hasShots: true,
  hasRabies: false,
  friends: [gopher]
}

console.log('what is a cat', ironMan)


gopher.friends.push(ironMan)

let jermsCats = [gopher, ironMan, ironManDeux]