// For of loop and Map():
// for of loop: iterator => any variable name and object => any datatype(variable) name like array, str, Number, etc.

// ["", "", ""]
// [{}, {}, {}]

// array in for loop 
const arr = [1, 2, 3, 4, 5];

for (const value of arr) {
    // console.log(value);
}

// string in for of loop:
let greeting = "Hello World!";

for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// same e.g, use break keyword.
for (const greet of greeting) {
    if (greet == " ") {
        // console.log("Space Detected!");
        continue
    }
    // console.log(`Each char is ${greet}`);
}

// Maps: Map is object in js, which can hold key: value pairs in sequentially.
// No need to declare variable, iteration, etc in Map()

const map = new Map()

map.set('IN', "India");
map.set('Fr', "France");
map.set('USA', "United State of America");
map.set('JP', "Japan");


// console.log(map);

// Map in for loop:
for (const key of map) {
    // console.log(key);  // It show o/p in array format, so we want to convert into noraml form we use array de-structure.
}

// De-structure array.

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

// object in for of loop:

// const myObject = {
//     game1: "GTA",
//     game2: "NFS"
// }

// for (const [key, value] of myObject) {
//     // console.log(key, ":-", value); // Thow error, beacuse object cannot iterable(loop) but Map will be. Object is also iterable but in different way.
// }

