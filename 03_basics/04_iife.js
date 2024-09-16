// Imediately Invoke Function Expressions (IIFE)
/* IIFE has 2 major reason uses:
1) To avoid global scope pollution, we declard scope {} 
2) Execute function immediately, for a to avoid global pollution (same variable)

*/

(function chai() {
    console.log(`DB CONNECTED`);
})();

(function lemonchai() {
    console.log(`DB CONNECTED SUCCEFULLY`);
})();


