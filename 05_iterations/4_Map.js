// For in loop:
const myObject = {
    js: "javaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //  console.log(`${key} shortcut is for ${myObject[key]}`);
}

// array in for in loop:
// When we run for in loop on array, it return array's key, like Object [key: value]
const programming = ['js', 'python', 'c++', 'ruby'];
for (const key in programming) {

        // console.log(programming[key]);
}

// Maps in for in loop:

const map = new Map()

map.set('IN', "India");
map.set('Fr', "France");
map.set('USA', "United State of America");
map.set('JP', "Japan");

for (const key in map) {
  console.log(map[key]); // map canoot be iterable, but we can use differrnt approach.
}

// For in loop use to => Object
// For of loop use to => Array, String


