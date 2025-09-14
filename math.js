// math.js

// Option 1: Normal functions

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}


// Option 2: Arrow functions

// Arrow functions are shorter, often used for inline functions.
// They behave the same here since we’re not using "this".
const addArrow = (a, b) => a + b;
const subArrow = (a, b) => a - b;

/*
  Export options in Node.js (CommonJS):

  1. Attach functions one by one:
     module.exports.add = add;
     module.exports.sub = sub;

  2. Export them together as an object (cleaner):
     module.exports = { add, sub, addArrow, subArrow };

  👉 If you use both, the LAST module.exports wins.
*/

// Recommended: export everything together
module.exports = { add, sub, addArrow, subArrow };
