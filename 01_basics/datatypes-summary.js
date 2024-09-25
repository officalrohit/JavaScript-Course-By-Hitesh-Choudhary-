// Primitve 

// 7 types : String, Number, Boolean, null, undifined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 341654564416546513165n



// Reference (Non primitive)

// Array, Objects, Functions

const hero = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function () {
    // console.log("Hello world");
}

// console.log(typeof anotherId);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let myYoutubename = "hiteshchoudhary.com"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
