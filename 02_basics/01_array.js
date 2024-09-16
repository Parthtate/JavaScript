// Arrays 
// GPK = Paraentsis(), Brackets[], Curly-Braes{}

const myarr = [1, 2, 3, 4, 5, 6];
// console.log(myarr[0]);
// console.log(myarr[1]);
// console.log(myarr[2]);

// Array methods

myarr.push(7) // Adding element at the END
myarr.pop()   // Removing element from the END
// console.log(myarr);

myarr.unshift(0) // Adding element at the Start
myarr.shift()    // Remove element at from Start/Begineeing
 
// console.log(myarr);

// console.log(myarr.includes(7)); 
// include() checks the value is present or not in the array and returns answer in boolean datatype. 

console.log(myarr.indexOf(9));

const newarr = myarr.join()
// console.log(newarr);
// console.log(typeof newarr);


// slice, splice

console.log("A", myarr);

const myn1 = myarr.slice(0, 3); // Counting index and show the one part of the array
console.log(myn1);

const myn2 = myarr.splice(1, 3);  // It changes the original array and cut down the elments fron the given array
console.log(myn2);
