// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.emial = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const UserOne = new User("sam", "sam@gmail.com", 123)

// console.log(UserOne.encryptPassword());
// console.log(UserOne.changeUserName());

// Behind the scene: same work as class using function.

function user(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

}

user.prototype.encryptPassword = function(){
    return `${this.password}xyz`;
}

user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const UserTwo = new user("sami", "sami@gmail.com", 456)

console.log(UserTwo.encryptPassword());
console.log(UserTwo.changeUserName());

