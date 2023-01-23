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
  friends: [gopher] // reference or pointing 
}

console.log('what is a cat', ironMan)


gopher.friends.push(ironMan)

let jermsCats = [gopher, ironMan, ironManDeux]




// Build an app

let secretCode = ['🦒', '😼', '🥝']
let userInput = []



function catClick() {
  console.log('you clicked the 😼')
  userInput.push('😼')
  validateUserInput()
  // terminology
  // function declaration or definition 
  // function execution or invocation 
}

function dinoClick() {
  console.log('you clicked el 🦖!')
  userInput.push('🦖')
  validateUserInput()
}

function validateUserInput() {
  if (userInput.length === 3) {
    if (userInput[0] == secretCode[0]
      && userInput[1] == secretCode[1]
      && userInput[2] == secretCode[2]) {
      youWin()
    } else {
      youLost()
    }
  }
}

function octoClick() {
  console.log('you clicked 🐙')
  userInput.push('🐙')
  validateUserInput()
}
function kiwiClick() {
  userInput.push('🥝')
  console.log('you clicked 🥝')
  validateUserInput()
}
function otterClick() {
  userInput.push('🦦')
  console.log('you clicked 🦦')
  validateUserInput()
}
function geraldClick() {
  userInput.push('🦒')
  console.log('you clicked 🦒')
  validateUserInput()
}
function randomAnimalClick() {
  userInput.push('🎱')
  console.log('you clicked 🎱')
  validateUserInput()
}

function youLost() {
  window.close()
}

function youWin() {
  // @ts-ignore
  window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
}



// calling the function aka(invocation)

// create a variable

// OTHER ODD WAYS TO CREATE FUNCTIONS
// let jimmy = function james() {

// } // longhand

// jimmy = 7

// console.log(jimmy)

// let bob = () => {} // shorthand some sneaky stuff about it scope

