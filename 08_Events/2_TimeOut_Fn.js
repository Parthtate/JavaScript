// ** brower based function()
//*1. setTimeout(): It is a method, call API while executed. The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
const sayParth = function(){
    console.log("Parth");
}
// setTimeout(sayParth, 3000);

setTimeout(function(){
    // console.log("parth");
},2000)

const changeText = function(){
    document.querySelector('h1').innerHTML = "Best JS series"
}
// setTimeout(changeText, 2000)

//*2. clearTimeout() he global clearTimeout() method cancels a timeout previously established by calling setTimeout().

const changeMe = setTimeout(changeText, 2000)

// for declartion of clearTimeout(), it required eventListner.
document.querySelector('#Stop').addEventListener('click', function(){
    clearTimeout(changeMe, 3000)
    console.log("STOPPED");
},false)


