// Consversion of datatypes

let score = null;
console.log(typeof score);

let score2 = "33abc";
let valueInNumber = Number(score2);
// console.log(typeof score);
// console.log(valueInNumber);

// Notes: 
// 33 => 33
// "33" => NaN
// true => 1, false => 0
// null => object

let isLoggedIn = "parth"

let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);


// 1=> true, 0=> false
// "" => false
// "Hello" => true

let someNum = 33
let stringNumber = String(someNum)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// ******************** Operation in js *****************

// Concatination string

let str1 = "Hello";
let str2 = " Parth"

let concatstr = str1 + str2 ;
// console.log(concatstr);

// console.log(2+2); // Additon
// console.log(2-2); //Substarction
// console.log(2/2); // division
// console.log(2*2); // Multiplication
// console.log(2**2); // Expoential
// console.log(2%2);  // Modulos


// Prefix and Postfix

let gameCounter = 100
// gameCounter++;
++gameCounter;

console.log(gameCounter);