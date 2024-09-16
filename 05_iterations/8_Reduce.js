// reduce(): same as map(), but get different arguments (accumulator, currentValue)
// accumulator create empty[] and take initialValue from variable.
// currentValue: it take acutual values from array.

const myNum = [1, 2, 3]

const total = myNum.reduce( (accumulator, currentValue) => {
    // console.log(`accumulator: ${accumulator} and currentValue ${currentValue}`);
    return accumulator + currentValue
}, 0 )  // 0 is intialValue to addPrice in accumulator for calulating total.

// console.log(total);

// reduce in arrowFunction:
const myTotal = myNum.reduce( (acc, curr) => {return acc + curr}, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "py course",
        price: 999,
    },
    {
        itemName: "mobile dev course",
        price: 5999,
    },
    {
        itemName: "Data science course",
        price: 12999,
    },
];
// we can add all the course prices from objets, using reduce(accumulator, currentValue)
const pricetoPay = shoppingCart.reduce( (accumulator, item) => {
    return accumulator + item.price
},0)

console.log(pricetoPay);
