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
console.log(loginUseMessage("hitesh"))