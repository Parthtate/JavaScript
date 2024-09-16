const arr = [];
// %DebugPrint(arr); // error, it uses in v8 engine.

/*
Summary:
There are two types of arrays: holey arrays and continuous arrays. These arrays can contain three types of elements: SMI (Small Integer), Packed Element, and Double.

1. **Holey Array**: A holey array is an array that contains missing or empty elements. For example, [1, 2, , 4] is a holey array because it has a missing element. Holey arrays are less optimized for performance.

2. **Continuous Array(PACKED_SMI_ELEMENTS)**: A continuous array is an array that does not contain missing or empty elements. For example, [1, 2, 3, 4] is a continuous array because it has no missing elements. Continuous arrays are more optimized for performance.

In terms of optimization, continuous arrays are more efficient and optimized for various operations compared to holey arrays.
*/

// SMI (small interger)
// Packed element
// Double (float, string, function)

const arrThree = [1, 2 ,, 4, 5] // holey array.
const arrTwo = [1, 2, 3, 4, 5] // continous array.
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0) // flot
//called PACKED_DOUBLE_ELEMENTS

arr.push("7"); // string
//called PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]); // introduce holes, costly operation.

// Check when holes are present in array.
// Operations:
// **Bound check**: checking the array operations.
// hasOwnProperty(arrTwo, 9) // 9th postion return
// hasOwnProperty(arrTwo.prototype , 10);
// hasOwnProperty(Object.prototype , 10);

// holes are very expensive. 

const arrfour = [1, 2, 3, 4, 5]
console.log(arrThree[2]);


// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFive = new Array(3);
// just three holes. called HOLEY_SMI_ELEMENTS.
arrFive[0] = "1" // HOLEY_ELEMENTS
arrFive[1] = "2" // HOLEY_ELEMENTS
arrFive[2] = "3" // HOLEY_ELEMENTS

// BETTER CODE;
// SMALL steps make good programmer.

const arrSix = []
arrSix.push(1); // PACKED_ELEMENTS
arrSix.push(2);// PACKED_ELEMENTS
arrSix.push(3); // PACKED_ELEMENTS

const arrSeven = [1, 2, 3, 4, 5]

arrSix.push(NaN) // DOUBLE
arrSix.push(Infinity) // DOUBLE

 
// js eneigne recommend:
// use for, for-of, for_Each loop. for better optimization