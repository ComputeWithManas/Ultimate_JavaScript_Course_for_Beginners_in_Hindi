# Getting User Input
To get input from the user, we use the `prompt()` function in JavaScript. This input is stored as a string datatype in a variable. To check the datatype of the variable, we use the typeof operator.
```js
let age = prompt("Enter your age");
console.log(typeof age); //age is of string datatype
```
**Note:** By default, the input is stored as a string datatype. If we want to perform mathematical operations on the input , we need to convert the string datatype into a number datatype. We can do this by using the `Number()` function.
```js
let age = prompt("Enter your age");
console.log(typeof age); //age is of string datatype
age = Number(age);
console.log(typeof age); //age is of number datatype
```
We can also use the `parseInt()` function to convert the string datatype to a number.
```js
let age = prompt("Enter your age");
console.log(typeof age); //age is of string datatype
age = parseInt(age);
console.log(typeof age); //age is of number datatype
```
