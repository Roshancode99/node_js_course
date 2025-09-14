// module_test.js

// Import the entire module
const math = require('./math');

console.log("math module object:", math);

console.log("Normal add(7,5) =", math.add(7, 5));         // 12
console.log("Normal sub(7,5) =", math.sub(7, 5));         // 2
console.log("Arrow addArrow(10,5) =", math.addArrow(10, 5)); // 15
console.log("Arrow subArrow(10,5) =", math.subArrow(10, 5)); // 5


// Destructure directly
const { add, sub, addArrow, subArrow } = require('./math');

console.log("Destructured add(5,3) =", add(5, 3));             // 8
console.log("Destructured sub(5,3) =", sub(5, 3));             // 2
console.log("Destructured addArrow(20,10) =", addArrow(20, 10)); // 30
console.log("Destructured subArrow(20,10) =", subArrow(20, 10)); // 10
