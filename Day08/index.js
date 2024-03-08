const prompt = require("prompt-sync")();


let age = parseInt(prompt("Enter your age: "));
let output = age >= 18 ? "You can Drive" : "You cannot Drive";
console.log(output);