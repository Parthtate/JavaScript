// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task.
    // DB calls, cryptography related task, newtwork, etc.
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

// .then() has direct connection with resolve(), it returns the promise.
promiseOne.then(function(){
    console.log("Promise consumed");
})

// created promise without an variable.
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Parth", email: "parthtate575@gmail.com"})
    },1000) // resolve() hold Array, Object, function()
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Parth", password: "123"})
        } else {
            reject('ERROR: Something went wrong!')
        }
    },1000)
})

promiseFour
.then( (user) => {
    console.log(user);
})
.then( (username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally( () => console.log("The promise is either resolved or rejected."))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))