 // filter vs forEach loop:
// forEach loop cannot return the values from array, undefined shows.
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNum.forEach( (item) => {
    return item > 4;
})
// console.log(newNum);


// filter:
// filter will be able to perform showing the o/p from array.
// when we decleard scope{} it required to use return keyword for return the values from array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numbersResult =  numbers.filter( (num) => {
    return num > 4;
} );

// console.log(numbersResult);

const book = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }
];

const userBooks = book.filter( (item) => {
    return item.genre === 'History';
});

// console.log(userBooks);

const userBooks1 = book.filter( (item) => {
    return item.edition > 2003;
} );
// console.log(userBooks1);

const userBooks2 = book.filter( (item) => {
    return item.genre === 'Science' && item.edition > 2000 && item.publish > 2000;  // && define multiple condition for userDemand
} );
// console.log(userBooks2);
