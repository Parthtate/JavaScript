const arr = [1, 2, 3, 4, 5]
for (const val of arr) {
    console.log(val);
}

const greetings = "Namaste! js user";
for (const greet of greetings) {
    if (greet == " ") {
        // console.log(`Space detechted!`);
        continue
    }
    // console.log(`Each char is: ${greet}`);
}

// Maps 

const maps = new Map()
maps.set('IN', 'India');
maps.set('JP', 'Japan');
maps.set('CAN', 'Canada');

// console.log(maps);

for (const [key, value] of maps) {
    // console.log(key, ":", value);
}

const myObject = {
    game1: "GTA",
    game2: "Counter Strick",
    game3: "Clash of clans",
    game4: "Clash royale"
}

for (const key in myObject) {
    // console.log(key, ":", myObject[key]);
}

const programming = ["js", "py", "c++", "java", "ruby", "c"];

programming.forEach(element => {
    // console.log(element);
});

programming.forEach( function (item) {
    // console.log(item);
} )

function printMe(item){
    // console.log(item);
}

// programming.forEach(printMe)

const coding = [
    {
        langageName: "javaScript",
        fileName: "js"
    },
    {
        langageName: "python",
        fileName: "py"
    },
    {
        langageName: "java",
        fileName: "java"
    }
]

coding.forEach( (item) => {
    // console.log(item.fileName, ":",item.langageName);
} )

const myNum = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];

const resukt = myNum.filter( (nums) => { 
    return nums > 4
} )
// console.log(resukt);

const newNums = []

myNum.forEach( (item) => {
    if (item > 4) {
        // console.log(item);
    }
    
})

const books = [
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

// let userBooks = books.filter( (bk) => {
//     return bk.genre === "Fiction"
// } );

let userBooks = books.filter( (bk) => {
    return bk.publish <= 2000 && bk.edition >= 2005 && bk.genre === "Fiction"
} )

// console.log(userBooks);

const arr1 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = arr1.map( (numbers) => {
    return numbers + 10
} )
// console.log(result);

const newNum = arr1.forEach( (item) => {
    return item + 10;
})
// console.log(newNum);

const arr2 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chaining = arr2
                .map( (num) => num *10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 40 )

// console.log(chaining);                