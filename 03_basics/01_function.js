function sayMyName() {
    console.log("P");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("h");
}

// sayMyName => reference | sayMyName() => execution
// sayMyName() 

// function addTwoNumbers(number1 , number2){  // (parameter)
//     console.log(number1 + number2);
// }
// addTwoNumbers(5,9) // (arguments)

// return keyword:
function addTwoNumbers(number1 , number2){  

    // let result = number1 + number2; 
    // return result  => Methode 1 and

    return number1 + number2  // Methode 2
}

const result = addTwoNumbers(5,9);  // Store the value in variable
// console.log("result:", result);

function loginUserMessage(username){
    if (username === undefined) {
        console.log("Please enter your name:");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("parth"));

function calculateCartPrice(...num1) {  // ... is Spread, it also referece to Rest operator.
    return num1

}

// console.log(calculateCartPrice(200,  500, 600, 2000));


// Object{} and array[] in function():

// For Object:
const user = {
    username: "parth",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user); 
// or directly get object through function
// handleObject({
//     username: "sam",
//     price: 299
// })

// For array:

const myArray = [200, 330, 440, 500];

function returnArrayValue(anyarray) {
    return anyarray[1]

}

// console.log(returnArrayValue(myArray));
console.log(returnArrayValue([200, 500, 600, 70, 90]));