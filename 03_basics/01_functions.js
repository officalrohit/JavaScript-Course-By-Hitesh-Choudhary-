function sayMyName() {
  console.log("H");
  console.log("i");
  console.log("t");
  console.log("e");
  console.log("s");
  console.log("h");
}

//sayMyName // function reference
//sayMyName() // function exicution

// sayMyName()

function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2)
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log(result);

function loginUseMessage(username = "sam") {
    if (!username) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUseMessage("hitesh"))
// console.log(loginUseMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));


const user = {
    username: "hitesh",
    price: 999
}

function handleObject(anyobject) {
    // console.log(`User name is ${} and price is ${}`);

    
}

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[0]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
