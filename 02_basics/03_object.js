/*Notes: We decleard object in 2 ways, Constructor and literlas.
Singleton is created when we deaclared object as a Constructor 
*/

Object.create // Created using Constructor method.

const myS1 = Symbol("Mys1");


// Created Object literlas method.
const jsUser = {
    name:"parth",
    age:20,
    email:"parth@google.com",
    location: "pune",
    isLoggedIn: false,
    lastLoggedinDays: ["Monday", "Friday"],
    [myS1]: "Mys2",
    "full name":"Parth Tate",

}
// ** In objects **key** is set default String Datatype.
// Acessed through = .value & ["value"]
// console.log(jsUser.name);  // accessed value using . more in real life

// console.log(jsUser["age"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[myS1]);

// Changes in object.
jsUser.email = "user@gmail.com";
// console.log(jsUser);

// freeze the object. We cannot change object values.

// Object.freeze(jsUser);  **FREEZE**
jsUser.age = 21;  // Can not change the value


jsUser.greeting = function() {
    console.log("hello JS");
}

// Manipulation in object using {this.value} we can accessed value from object

jsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
