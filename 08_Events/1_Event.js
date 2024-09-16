// In JavaScript all events are run sequentially, but if needed we run Ascyn. code.

// document.getElementById('owl').onclick = function() {
//     alert('owl clicked'); // It give less features, so we use addEventListener()
// }

// addEventListener() too much powerful and featurefully such in case drag & drop, click, submit, etc.

// attachEvent() use for internet Explorer in past.
// jQuery - on, same popoular as reactJs, jQuery is famous in past.

/* Basic learn in Events:
1. types: keybord type event, mouse movement event.
2. timestamp: date activity, etc.
3. defaultPrevented: behaviour can stop, such as submit form.
4. target, toElement, srcElement, currentTarget
5. clientX, clientY, screenX, screenY, titltX, titltY.
6. altkey, ctrkey, shiftkey, keyCode
*/

// document.getElementById('image').addEventListener('click', function(){
//     alert('clicked inside the ul')
// },true) // 3rd parameter(false, true) is default, use for some application will not run if 'false' is not declared.(Not neccessary declared, already defalut)

// document.getElementById('owl').addEventListener('click', function(e){
    //     console.log("owl clicked"); 
    //     e.stopPropagation()  // it stops the bubbling event. 
    // }, false)

// Event propogation, Two contacts:
// false(default) = Event Bubbling, bottom-up appraoch for traking 
// true = Capturing Event, Top- bottom appraoch for traking.


// if any reason we want to, do not click a site on brower.

    // document.getElementById('google').addEventListener('click',function(e){
    //     e.preventDefault();
    //     e.stopPropagation()
    //     console.log("google clicked");
    // }, false)


// if we want to remove element(images) from the brower.

// document.querySelector('#images').addEventListener('click', function(e){
//     console.log(e.target.tagName);
//     if (e.target.tagName === 'IMG') {
//         console.log(e.target.id);
//         let removeIt = e.target.parentNode
//         removeIt.remove()
//     }

    
// })

//removeIt.parentNode.removeChild(removeIt)

//********************************************************************************* */

// JS is squentially running program, but when events are invoked only it happened, such as click, mouse hovour, sumbit(button), etc.

// 1. approach onclick(): // It give less features, compare to addEventListener()
// document.getElementById('owl').onclick = function(){
    // alert('owl clicked')
// }

// 2. approach addEventListener() is much powerful and featurefully such in case drag & drop, click, submit, etc.
// document.querySelector('#owl').addEventListener('click', function(){
    // alert('owl clicked agian')
// },false)

// other approach also give:
// attachEvent() use for internet Explorer in past.
// jQuery - on, same popoular as reactJs, jQuery is famous in past.


// document.querySelector('#images').addEventListener('click', function(event){
//     console.log("imaegs clicked");
// },false)

// document.querySelector('#owl').addEventListener('click', function(event){
//     console.log("owl clicked ");
// },false)

// Event propogation, Two contacts:
// false(default) = Event Bubbling, bottom-up appraoch for traking 
// true = Capturing Event, Top- bottom appraoch for traking.

// stopPropagation() // same as preventDefault(): don't go one the top element after happen Bubbling event.
document.getElementById('owl').addEventListener('click', function(event){
    event.stopPropagation() 
},false)

// preventDefault(): stoping the acitivity. 
document.getElementById('google').addEventListener('click', function(event){
    event.preventDefault() 
    console.log('google clicked');
},false)

// if we want to remove element(images) from the brower.

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    
})

//removeIt.parentNode.removeChild(removeIt)