// EXAMPLE 1 - Clear an Object in JavaScript

const obj = {a: 'one', b: 'two'};

for (const key in obj) {
  delete obj[key];
}

console.log(obj); // 👉️ {}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Only clearing a nested object

// const obj = {
//   a: 'one',
//   b: 'two',
//   address: {c: 'three', d: 'four'},
// };

// for (const key in obj.address) {
//   delete obj.address[key];
// }

// console.log(obj); // 👉️ { a: 'one', b: 'two', address: {} }

// ------------------------------------------------------------------

// // EXAMPLE 3 - Clear an Object by reassigning its variable in JavaScript

// let obj = {a: 'one', b: 'two'};

// obj = {};

// console.log(obj); // 👉️ {}

// ------------------------------------------------------------------

// // EXAMPLE 4 - Clearing an object using `getOwnPropertyNames`

// let obj = {a: 'one', b: 'two'};

// Object.defineProperty(obj, 'color', {
//   value: 'red',
//   enumerable: false, // 👈️ defaults to false
//   configurable: true,
//   writable: true,
// });

// const allProperties = Object.getOwnPropertyNames(obj);
// console.log(allProperties); // 👉️ ['a', 'b', 'color']

// allProperties.forEach(property => {
//   delete obj[property];
// });

// console.log(Object.getOwnPropertyNames(obj)); // []

// ------------------------------------------------------------------

// // EXAMPLE 5 - Clear an Object using `Object.keys()` and `forEach()`

// const obj = {a: 'one', b: 'two', c: 'three'};

// Object.keys(obj).forEach(key => {
//   delete obj[key];
// });

// console.log(obj); // 👉️ {}

// ------------------------------------------------------------------

// // EXAMPLE 6 - Clear an Object using `Object.keys()` and `for...of`

// const obj = {a: 'one', b: 'two', c: 'three'};

// for (const key of Object.keys(obj)) {
//   delete obj[key];
// }

// console.log(obj); // 👉️ {}
