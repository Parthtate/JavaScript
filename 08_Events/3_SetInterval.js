// 1.setInterval(): setInterval() method, offered on the Window and WorkerGlobalScope interfaces,
// repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

// setInterval() show o/p infinite times as per given timeout(sec)
// setInterval(function(){
//     console.log("Parth")
// }, 2000)

// const sayName = function(str){
    // console.log(str, Date.now())
// }
// setInterval(sayName, 2000, "parth") // 3rd parameter get reference of str.
// **Task:

const sayName = function(){
    console.log("parth", Date.now());
}

let interval = null;
document.querySelector('#start').addEventListener('click', function(){
     interval = setInterval(sayName, 1000);
})
document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(interval);
})



