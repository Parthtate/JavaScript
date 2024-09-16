// map() show all values(variable o/p) vs filter() depends on true,false based condition.
// map() is better than filter() for return any values(Opinion).
// map(), filter, forEach() methods are required to use return when declared scope{}.
// map automatically returns the values
const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myarray.map( (item) => {
    return item + 1;
} );
// console.log(newNum);

// chaining: .map().map().filter()
// 1st map() gets original array values from variable, 
// 2nd map() gets 1st map() output as a varaible and passes to filter().

const chaining = myarray
                    .map((num) => {return num * 10})
                    .map( (num) => {return num + 1})
                    .filter( (item) => {return item >= 40})
console.log(chaining);
