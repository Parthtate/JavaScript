// For loop: 
// for loop declaration => (variable, condition and iteration). in brackets

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");  // 5 is best number str is executed first, than number.
    }
    // console.log(element);
}

// console.log(element); // throw error, because scope.


// In for loop we can declared same name variable, because of block scope, but inside another loop cannot work it, reason is loop consider as same block scope.
// also child scope access parent scope variable, parent cannot access child scope variable.(ice-cream example)

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(`Outer loop value ${i}`);
    for (let j = 0; j <=10; j++) {
        const element = j;
        // console.log(`Inner loop value ${j} and Outer loop value ${i}`);
    } 
}


// Table:

for (let i = 1; i <=10; i++) {
    const element = i;
    // console.log(`Table of ${i}`);
    for (let j = 1; j <=10; j++) {
        const element = j;
        // console.log(i,"*",j,"=",i*j);   // While i do (i,"*",j,"=",i*j) same work with + sign (i+"*"+j+"="+i*j)
    }
}

// Loop in array:

let superheros = ["flash", "hulk", "superman", "batman"];
// console.log("Array length = ",superheros.length);

for (let index = 0; index < superheros.length; index++) {
    const element = superheros[index];
    // console.log(element);
}

// keyword in loop, break and continue:
// break state that, if we want to break any control flow we use break keyword. (We used in switch statement)

for (let i = 1; i <= 20; i++){
    if (i == 5) {
        console.log(`Detected 5`);
        break  // it break the iteration when 5 is detected and go to the out of the loop.
    }
    console.log(`Value of i ${i}`);
}


for (let i = 1; i <= 20; i++){
    if (i == 5) {
        console.log(`Detected 5`);
        continue  // continue say that 1 time माफ़ करदो than it continue the loop, like sports games if anybody will make mistake, we forgive him/her.
    }
    console.log(`Value of i ${i}`);
}
