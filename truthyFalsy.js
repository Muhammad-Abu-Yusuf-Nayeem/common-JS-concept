// ----------------------------
// Falsy Values in JavaScript
// ----------------------------

// These all evaluate to false in boolean context
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false (BigInt zero)
console.log(Boolean("")); // false (empty string)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// ----------------------------
// Truthy Values in JavaScript
// ----------------------------

// Everything else is considered truthy
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean("hello")); // true (non-empty string)
console.log(Boolean("0")); // true (non-empty string)
console.log(Boolean([])); // true (empty array)
console.log(Boolean({})); // true (empty object)
console.log(Boolean(function () {})); // true (any function)

// ----------------------------
// Practical Examples
// ----------------------------

// Even though "false" is the word false, it's a non-empty string = truthy
if ("false") {
  console.log('"false" is truthy'); // this runs
}

// Empty array is truthy
if ([]) {
  console.log("[] is truthy"); // this runs
}

// Empty object is also truthy
if ({}) {
  console.log("{} is truthy"); // this runs
}

// ----------------------------
// Tip: Use Boolean() or !! to test truthiness
// ----------------------------
console.log(!!"text"); // true
console.log(!!null); // false
