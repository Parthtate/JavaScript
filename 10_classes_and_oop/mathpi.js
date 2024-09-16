// Object related question: Change the Math.PI value.
// Gets the own property descriptor of the specified object. An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // Show more info. related to object.
console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

// const mynewobj = Object.create(null)

const chai = {
    name: "masala chai",
    price: 20,
    isAvaliable: true,

    orderChai: function(){
        console.log("chai nahi bani, code fut gaya");
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false, // it is  define is loop available or not
})

for (let [key , value] of Object.entries(chai)) {
    if(typeof value != "function"){
         console.log(`${key} : ${value}`);

    }
}