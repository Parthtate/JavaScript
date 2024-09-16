// backtick`` It is use when multiple strings are concat to each other. 
// In strings use multiple methods() to familier with string.

let name = "Parth";
let midduleName = "Pandurang";
let sirName = "Tate";

// console.log(name + midduleName + sirName); // Old Methode

// Use Backtick `` for more readability

// console.log(`My name is ${name} and my father name is ${midduleName} `);

// Methodes: slice, trim(), replace()
const gameName = "counter strick";

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


// Replace the single word from the string
const cityName = "I live in Paris";
// console.log(cityName.replace('Paris','London'));


// trim() Removing whitespaces from the string, it uses while user fill there emailId, and he added unwanted whitespaces while filling form.

const emailId = "    parthtate2828@gmail.com   ";
// console.log(emailId);
// console.log(emailId.trim());

// slice(), slice(start), slice(start, end)
const animals = ["Tiger", "Lion", "Elephant", "Jiraf", "Cat", "Dog", "Crocodile"];
// console.log(animals.slice(4));
// console.log(animals.slice(2, -1));
// console.log(animals.slice(-2));
