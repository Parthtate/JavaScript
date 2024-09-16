/* Object => this.(keyword) => Arrow function, this. can refer the corrent context in the object
this. keyword cannot work in function. it only works in object.
*/

const user = {
    username: "parth",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);
// Note* this. keyword hold lot of content, in windows Opearting system or in (browser console) 

// we try some get o/p using this.keyword, 
//  function chai() { 
//     let user = "sami"
//     console.log(this);    
//     console.log(this.user);  // undefined (cant't work in function)
//  }

//  chai()

/*
const lemonTea = function() {
    let username1 = "Parth";
    console.log(this.username1); // undefined
}

lemonTea()
*/


// Arrow function () => {}  Explict return, implict return

// {} in curly brace we declared return keyword called as Explict return
/*const addTwo = (num1, num2) => {
    return num1 + num2
}
 
console.log(addTwo(1, 4));
*/

// Implict return: ()
/*
const addTwo = (num1, num2) => (num1 + num2) // implicit return
console.log(addTwo(1, 4));
*/

// object retrun in arrow function:
/*
const addTwo = (num1, num2) => ({username: "sami"})
console.log(addTwo());
*/

