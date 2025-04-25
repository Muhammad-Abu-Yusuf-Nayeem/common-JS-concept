// difference between null and undefined:
// 1. undefined: a variable declared but not assigned any value
let a;
console.log("a =", a); // undefined
console.log("Type of a:", typeof a); // "undefined"

// 2. null: a variable explicitly assigned a null value
let b = null;
console.log("b =", b); // null
console.log("Type of b:", typeof b); // "object" (this is a known quirk in JS)

// 3. Comparison between undefined and null
console.log("a == b:", a == b); // true (values are considered equal in loose comparison)
console.log("a === b:", a === b); // false (different types, strict comparison)

// 4. Function with no return
function test() {}
let result = test();
console.log("Function result:", result); // undefined

// 5. Object property that does not exist
let person = { name: "Alice" };
console.log("person.age =", person.age); // undefined

// 6. Intentionally setting property to null
person.age = null;
console.log("person.age =", person.age); // null


