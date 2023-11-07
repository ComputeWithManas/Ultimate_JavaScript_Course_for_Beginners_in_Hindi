# Assignment Operators
In addition to the basic arithmetic operators, JavaScript also has some shorthand operators that combine arithmetic with assignment. Here are some examples:


| **Operator** | **Description**               | **Example**               |
|:--------:|:-------------------------:|:--------------------------------:|
| `+=`       | Addition assignment       | `a += b` is the same as `a = a + b`  |
| `-=`       | Subtraction assignment    | `a -= b` is the same as `a = a - b`  |
| `*=`       | Multiplication assignment | `a *= b` is the same as `a = a * b`  |
| `/=`       | Division assignment       | `a /= b` is the same as `a = a / b`  |
| `%=`       | Modulus assignment        | `a %= b` is the same as `a = a % b`  |
```js
let x = 5;

// Addition assignment
x += 3; // equivalent to x = x + 3
console.log(x); // Output: 8

// Subtraction assignment
x -= 2; // equivalent to x = x - 2
console.log(x); // Output: 6

// Multiplication assignment
x *= 4; // equivalent to x = x * 4
console.log(x); // Output: 24

// Division assignment
x /= 3; // equivalent to x = x / 3
console.log(x); // Output: 8

// Modulus assignment
x %= 5; // equivalent to x = x % 5
console.log(x); // Output: 3
```

before we study comparison operators, heres an importanf concept to understand, **Post increment and Pre increment**. Have a look at the following code sample:
```js
let a = 5;

// Post-increment: returns the value of a, then increments it
console.log(a++); // output: 5
console.log(a);   // output: 6

// Pre-increment: increments the value of a, then returns it
console.log(++a); // output: 7

// Post-decrement: returns the value of a, then decrements it
console.log(a--); // output: 7
console.log(a);   // output: 6

// Pre-decrement: decrements the value of a, then returns it
console.log(--a); // output: 5
```
In the code above, we first initialize the variable `a` with the value `5`. Then we use the post-increment operator (`a++`) to return the value of `a` (which is `5`), and then increment it to `6`. We log the value of `a++` to the console and get the output `5`, and then log the value of a to the console and get the output `6`.

Next, we use the pre-increment operator (`++a`) to increment the value of `a` to `7`, and then return its new value. We log the value of `++a` to the console and get the output `7`.

Then, we use the post-decrement operator (`a--`) to return the value of `a` (which is `7`), and then decrement it to `6`. We log the value of `a--` to the console and get the output `7`, and then log the value of `a` to the console and get the output `6`.

Finally, we use the pre-decrement operator (`--a`) to decrement the value of `a` to `5`, and then return its new value. We log the value of `--a` to the console and get the output `5`.
