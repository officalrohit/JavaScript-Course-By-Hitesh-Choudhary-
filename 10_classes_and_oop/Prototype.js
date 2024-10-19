// let myName = "hitesh     "

// console.log(myName.tureLength());



let myHeros = ["thor", "spidermane"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
    
}

Array.prototype.heyHitesh = function () {
    console.log(`Hitesh say hello`);
    
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVide: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user


// modren syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUserName = "chaiAurCode     "

String.prototype.trueLength = function () {
    // console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
    
}

anotherUserName.trueLength()

"hitesh".trueLength()
"iceTea".trueLength()