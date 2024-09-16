// Use **new** keyword for declear particular dataType

const socre = new Number(200);
// console.log(socre);

// To find length of Number use .toString():
const balence = 10000
// console.log(balence.toString().length);

// .toFixed() use for customer who paying bill and show userFriendly number.
// console.log(balence.toFixed(2));

const t_shirt = 123.6546
// console.log(t_shirt.toPrecision(5));

const pant = 100000
// console.log(pant.toLocaleString('en-CA')); // CANADA
// console.log(pant.toLocaleString('en-IN')); // INDIA
// console.log(pant.toLocaleString('en-US')); // USA



// ********************* Maths *********************
/*  Math.random can give random value in between 0 and 1
*/

// Math is like Number, Math is object in js.

// console.log(Math);
// console.log(Math.abs(-4),`abs`);
// console.log(Math.ceil(4.2), `ceil`);  // Take back max value in decimal  (roundup)
// console.log(Math.floor(4.6), `floor`); // Take back min value in decimal (roundup)
// console.log(Math.round(4.5), `round`); // Most use methode.
// console.log(Math.min(4, 6, 7, 3)); // Show min val from array.
// console.log(Math.max(4, 6, 7, 3)); // show max val from array. 

// console.log(Math.random());
// console.log(Math.floor(Math.random()*10) + 1); // round-up values

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

console.log(Math.round());

