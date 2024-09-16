// while loop: It work same as for loop, only change in syntax.
// variable declared outside the loop, and iteration after console.log().

// let index = 0;

// while (index <=20 ) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2 // Little bit change, similer to the index++
// }

// array in while loop:

let array = ["flash", "hulk", "superman", "batman"];

let i = 0;
while (i < array.length) {
    // console.log(`Value of array ${array[i]}`);
    i = i + 1;
}

// do-while loop: first work done work than it check condition.
/*
let score = 1;
do {
    console.log(`Score value is ${score}`);
    score++;
} while (score <= 10);
*/
// But, do can execute code first than stop it because of condition.

let num = 1;
do {
    console.log(`number is ${num}`);
    num++;
} while (num <= 10);



let num2 = 11;  // first do his work after check condtion, less use of do-while loop in real world.
do {
    console.log(`number is ${num2}`);
    num2++;
} while (num2 <= 10);
