const userEmail = [];

if (userEmail) {
    console.log(`Got user email`);
    
} else {
    console.log("Dont have user email.");
}

//  falsy values:
// false, 0, -0, BigInt 0n, " ", null ,undefined, NaN they are fasly values.


// truthy values
// "0", "false", "  ", [ ], {}, function(){} 
// also, false = 0 (true), false = '' (true), 0 == '' (false). 

// If we want to check the empty object or arrays then;
// check for array is empty or not
if (userEmail.length ==0){
    console.log("Array is empty");
}
 
// For object:
const emptyObj = {}
if (Object.keys(emptyObj).length == 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null, undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 15;


console.log(val1);

// Terniary Operator

// condition / true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");

