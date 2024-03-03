# Example Programs
## Program 1
print "Hello World" if the user enters "Hello" as input.
```js
let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}
```
## Program 2
print "Hello World" if the user enters "Hello" as input. Otherwise, print "Goodbye World".
```js
let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}
else{
    console.log("Goodbye World");
}
```
## Program 3
print "Hello World" if the user enters "Hello" as input. Otherwise, print "Goodbye World" if the user enters "Goodbye" as input. Otherwise, print "Invalid Input".
```js
let input = prompt("Enter a string");
if(input === "Hello"){
    console.log("Hello World");
}
else if(input === "Goodbye"){
    console.log("Goodbye World");
}
else{
    console.log("Invalid Input");
}
```
## Program 4
Check if a number is positive, negative, or zero:
```js
let num = 5;

if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
```
## Program 5
Determine the largest of two numbers:
```js
let a = 10;
let b = 5;

if (a > b) {
  console.log(a + " is the larger number.");
} else if (b > a) {
  console.log(b + " is the larger number.");
} else {
  console.log("Both numbers are equal.");
}
```
## Program 6
Determine the quadrant of a point in a Cartesian coordinate system:
```js
let x = 3;
let y = -4;

if (x > 0 && y > 0) {
  console.log("The point is in the first quadrant.");
} else if (x < 0 && y > 0) {
  console.log("The point is in the second quadrant.");
} else if (x < 0 && y < 0) {
  console.log("The point is in the third quadrant.");
} else if (x > 0 && y < 0) {
  console.log("The point is in the fourth quadrant.");
} else {
  console.log("The point is on one of the axes or at the origin.");
}
```
## Program 7
Check if a year is a leap year:
```js
let year = 2020;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(year + " is a leap year.");
    } else {
      console.log(year + " is not a leap year.");
    }
  } else {
    console.log(year + " is a leap year.");
  }
} else {
  console.log(year + " is not a leap year.");
}
```
## Program 8
Find the absolute value of a number:
```js
let num = -5;

if (num < 0) {
  num = -num;
}

console.log("The absolute value is " + num);
```
## Program 9
Check if a number is divisible by both 2 and 3:
```js
const number = 12;

if (number % 2 === 0 && number % 3 === 0) {
  console.log("The number is divisible by both 2 and 3. Divisible duo!");
} else {
  console.log("The number is not divisible by both 2 and 3. The duo's not complete!");
}
```


## Program 10
Determine the type of a variable and print its value:
```js
const variable = "Hello, JavaScript!";

if (typeof variable === "number") {
  console.log("The variable is a number. Value: " + variable);
} else if (typeof variable === "string") {
  console.log("The variable is a string. Value: " + variable);
} else if (typeof variable === "boolean") {
  console.log("The variable is a boolean. Value: " + variable);
} else {
  console.log("The variable is of an unknown type. Value: " + variable);
}
```



Note that we didn't convert the input to a number datatype. This is because we are not performing any mathematical operations on the input. If we were performing mathematical operations on the input, we would have converted the input to a number datatype.
**For Example**
```js
let input = prompt("Enter a number");
if(input > 10){
    console.log("Number is greater than 10");
}
else if(input < 10){
    console.log("Number is less than 10");
}
else{
    console.log("Number is equal to 10");
}
```
