// **Object literals:
const user = {
    username: "parth",
    loginCount: 8,
    singedIn: true,
    
    // method()
    getUserDetails: function(){
        console.log("got user details from database");
        console.log(`Username: ${this.username}`); // .this is showing curent context.
        console.log(this);
    } 
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// **Constructor Function: It returns every time new instance, to avoid values override.

function User(username, loginCount, isLoogedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoogedIn = isLoogedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
    // this refere the current context, we can declared differnt variable name also. like this.username = name.
} 

// const userOne = User("Hitesh", 5, true);
// const userTwo = User("Ramesh", 2, false);

// console.log(userOne);
// console.log(userTwo); 
// userTwo override the userOne value, therfore we use "new" keyword.

// new keyword:
/*
1. create new object when use new keyword, create empty object called Instance.
2. constructor function get called because of new keyword
3. this keyword inject all variables object.
4. get return.

*/
const userOne = new User("Hitesh", 5, true)
const userTwo = new User("Parth", 7, false)
// "new" keyword creates new instance, so individual values can be store, Cannot override.
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);// show reference itself [Function: User].