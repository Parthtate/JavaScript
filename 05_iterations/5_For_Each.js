// ForEach loop

const coding = ['js', 'ruby', "python", "c++"];

coding.forEach(function (value){
    // console.log(value);
});

// Use arrow function to print array values.
coding.forEach( (item) => {
    // console.log(item);
})

// define normal functio first than use forEach loop.

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe); // get reference printme not execute printme().

// forEach loop has a function that accepts up to 3 arguments

coding.forEach( (item, index, arr) => {
    // console.log(item,index, arr);
})


// Common operations in Database, which is in array format and every item is object, 
// how can we access those values form array using forEach loop.

const myCoding = [
    {
        lanuagageName: "javaScript",
        lanuagageFileName: "js"
    },
    {
        lanuagageName: "java",
        lanuagageFileName: "java"
    },
    {
        lanuagageName: "python",
        lanuagageFileName: "py"
    }
];

myCoding.forEach( (item) => {
    console.log(item.lanuagageName); // Accsess of array under object{}
});


/*
Summary(As I understood) :
We can use For of loop on values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.
*/

