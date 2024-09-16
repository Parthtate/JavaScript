/* Control Flow / Logic Flow state that at a one time a whole program cannot be executed.
for e.g first => login page, after next process etc. 
*/

// if condition is based on comparison, so we use comparison oprators like (<, >, <=, >=, ==, !=, ===)
// if condition is execute only true(Bollean) condition is satisified else it cannot execute code. 

/*
const temp = 30
if (temp < 40) {
    console.log("temprature is less than 40");
} 
console.log("temprature is grater than 50");
*/
// temprature is grater than 50 is always exected, but we won't to do that. so we use else condition.

// else: else is oppsite of if condition, if is exected than else can't. same, else executed than if condition can't.

/*
const temprature = 41;
if (temprature < 40) {
    console.log("temprature is less than 40");
    
} else {
    console.log("temprature is less than 50");  
} */

/*
const socre = 200;

if (socre > 100) {
    let poewer = "fly";
    console.log(`User power: ${poewer}`);
}
*/
// console.log(`User power: ${poewer}`); // thorw error becaues scope(It is good practice)


// Implicit  scope(Short hande) of if condition.

const balence = 1000;

// if (balence > 500) console.log("You are rich");  // Impilicit Scope, not recommended to use (bad pratice)

// Nested if else: To check 2 or more condition.

/*
if (balence < 500) {
    console.log("less than 500");
} else if (balence < 750) {
    console.log("less than 750");
} else if (balence < 900) {
    console.log("less than 900");
} else {
    console.log("Balence is less than 1200");
}
*/

// && and || logical operator check the 
const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = true;
const userLoggedInFromEmail = false;

if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy corse.");
}

// Multiple condition check
if (userLoggedInFromGoogle || userLoggedInFromEmail) {
    console.log("User logged in");
}





