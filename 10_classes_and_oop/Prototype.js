// let myName = "Parth    "
// let mychannel = "chai     "

// console.log(myName.trim().length);
// console.log(myName.trueLenght);


// Creating our prototype(function).
let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy poewer is ${this.spiderman}`);
    }
}
// Inject "parth" prototype(function) in Object. 
Object.prototype.parth = function(){
    console.log(`Parth is present in all objects`);
}
// For Object.
// heroPower.parth()

//For String.
// myHeros.parth()

//Giving Array to parth prototype(function).
Array.prototype.heyParth = function(){
    console.log(`Parth says hello`);
}
// myHeros.heyParth()

// Array has only access prototype(function) of heyParth, not for Object and string.
// But when we deaclared to Object parth prototype(function). Array, String, Object has access to use it.
// heroPower.heyParth()

// Inheritance

const User = {
    name: "Sam",
    email: "sam@microsoft.com"
}
const teacher = {
    makeVideos: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,

    // inheritance: TeacherSupport all values.
    __proto__: TeacherSupport
}

teacher.__proto__ = User

// modern syntax for inheritance:
Object.setPrototypeOf(TeacherSupport, teacher)

let anotherUsername = "chaiaurcode    "

String.prototype.tureLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.tureLength()
"parthtate".tureLength()
"parthpandurangtate".tureLength()