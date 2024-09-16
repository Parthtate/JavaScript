const marvelHeros = ["Ironman", "hulk", "spiderman", "thor"]

const dcHeros = ["Superman", "batman", "Flash"]

// console.log(marvelHeros);
// console.log(dcHeros);

const all_heros = marvelHeros.concat(dcHeros);  // Concat Operator
// console.log(all_heros);

const allHeros = [...marvelHeros, ...dcHeros]; //spread operator it is just like a break the glass, we can throw and spread the elements.
// console.log(allHeros);

const anotherarray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

// flat()
const real_another_array = anotherarray.flat(3);
// console.log(real_another_array);

// for data scraping

// console.log(Array.isArray(["Parth", "sam", "roman", "seth"]));
// console.log(Array.from("Parth")); // creates a array from string
// console.log(Array.from({name:"Parth"}));  // intersting


// converting multiple variable into array using .of()
let score1 = [100, 10, 20, 30];
let score2 = [200, 40, 60, 80];
let score3 = [300, 60, 90, 110];

console.log(Array.of(...score1, ...score2, ...score3));


