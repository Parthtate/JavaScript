// DataTypes-Summmary 

// 1) Primitive DataTypes: 7: String, Number, Null, Undefined, Boolean, Symbol (Unique value), BigInt

const name = "parth";
const age = 20;
let bloodGroup = null;
let cityName;  
let isLoggedIn = true;

let customerId = Symbol('123');
let anotherCustomerId = Symbol('123');
// console.log(customerId == anotherCustomerId);

let BigInt = 5646513431616646n;


//  2) Reference (Non-Primitive): Arrays, Objects, Functions

let heros = ["Shaktiman", "Ironman", "hulk"];

let student = {
    name: "Parth",
    age: 20,
    isLoggedIn: false,
    emailId : null,
    phoneNo : undefined,
}

function stu() {

    console.log("hello World");
}

// console.log(typeof stu);
// console.log(typeof student);
// console.log(typeof heros);
// console.log(typeof name);


/* NOTES:
Returns typeof Datatypes(Primitive) in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

 JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do 
 not need to explicitly declare the type of a variable before using it. You can assign different types of values 
 to a variable during its lifetime.

 */


// Memoery:
// Stack(Primitive DataTypes Store) | Heap (Non-Primitive DataTypes)
// In Heap memory we change original value and, In Stack computer first created copy than it changes copy value, not original one.
let myYTChaneel = "ParthTate";

let anotherChannel = myYTChaneel;
console.log(anotherChannel); // Created copy and show output.

let userOne = {
    userName: "Harry",
    phone: 4567513341,
}

let userTwo = userOne;

userOne.phone = 8999025533;
// but
userTwo.phone = 82082820469;
// console.log(userOne);
// console.log(userTwo);
