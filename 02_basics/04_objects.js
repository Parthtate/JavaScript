// const tinderUser = new Object() // Singleton Object or constrctor

// Non-Singleton object
const tinderUser = {}

tinderUser.name = "parth";
tinderUser.id ="123abc";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    // Created multiple object hierarchy
    fullname: {
        userfullname: {
            firstname: "Parth",
            lastname: "tate"

        }
    }
}
// console.log(regularUser.fullname?.userfullname.firstname);
// ? is check the condition, value is present in the API or backend, we ? use to avoid if-else condition.


// How to Multiple object combined or merged.

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj4 = {obj1, obj2, obj3}
// const obj5 = Object.assign({}, obj1, obj2, obj3) // assigning all sources(obj) in {} empty braces
const obj4 = {...obj1, ...obj2, ...obj3}  // Most likely use
// console.log(obj4);

const users = [
    {
        email:"p@gmail.com",
        isLoggedIn: false,
    },
    {
        email:"a@gmail.com",
        isLoggedIn: true,
    }
]

// users[1].email
// console.log(tinderUser);

// Object prototype
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  // less uses
// While stydy API explore more objects prototype.

// Object de-structure {}

const course = {
    coursename: "JS",
    price: 999,
    courseInstructor: "Hitesh"

}
 // while accesing multiple times same value use;
 const {courseInstructor} = course

 console.log(courseInstructor);

// JavaScript Object Notation(JSON) is also known as object

