// nn bb ss u - Primitive Datatypes in JavaScript
let nullVar = null;
let numVar = 29;
let boolVar = true; // can also be false
let bigIntVar = BigInt("567") + BigInt("3");
let strVar = "manas";
let symbolVar = Symbol("I'm a nice symbol");
let undefinedVar = undefined;
console.log(nullVar, numVar, boolVar, bigIntVar, strVar, symbolVar, undefinedVar);
console.log(typeof nullVar);
console.log(typeof numVar);
console.log(typeof boolVar);

// Non-Primive Datatypes in JavaScript
const bioData = {
  name: "Manas",
  age: 15,
  likesJS: true,
  secret: null,
};
console.log(bioData);
console.log(bioData["name"]); // Output: Manas
console.log(bioData.age); // Output: 15
console.log(bioData["pet"]); // Output: undefined