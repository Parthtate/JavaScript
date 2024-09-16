// **SCOPE
/* {} it is a scope, Scope is declared when we use if, else condition, functions or loop {} => we can say scope.
Types of scope: Global, Local, Lexical scope, nested scope and more...
To the point, scope can manage to avoid confusion between variable declaration as a same name, it saves progamming bugs
*/

// Global Scope
let a = 10  
const b = 20
// var c = 30  (var creates a confusion between if conditon and )

if (true) {  // Local Scope
    let a = 1
    const b = 2
    
    // console.log("Local Scope ", a);

}

// console.log("Global Scope", a);
// console.log(b);
// console.log(c);


// Nested scope: Ice-cream example, child can able to eat ice-cream from parent, but parent cannot.
function one() {   // Parent function
    const username = "parth"
    

    function two() {  // Child function or nested scope
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()

}

// one()

if (true) {
    const username = "Parth"
    if (username === "Parth") {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); error, because of scope
    
}
// console.log(username); error, because of scope


// +++++++++++++++++++++++++ intersting +++++++++++++++++++++++

// Variable is too powerful, it can hold JSON value, function or any datatype.

// Create function normally => technique 1

console.log(addOne(5)); // we Access before declard normal function

function addOne(num1) {
    return num1 + 1 
}

// Using variable to store function. [It is called Hosting].
// addTwo(), Throw error, beacuse varaible can not defined, 
// Function store in the variable
const addTwo = function(num2) {
    return num2 + 2
}

console.log(addTwo(2))

// It is called hosting, it is about where we can declerd our variable
