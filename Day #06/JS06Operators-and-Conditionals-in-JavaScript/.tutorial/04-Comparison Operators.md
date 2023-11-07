# Comparison Operators
Comparison operators are used to compare two values and return a Boolean value (`true` or `false`) depending on whether the comparison is true or false. Here are the most common comparison operators in JavaScript:

| **Operator** | **Description**          | **Example**                  |
|:------------:|:------------------------:|:-----------------------------:|
| `==`           | Equal to                 | `5 == 5` evaluates to `true`      |
| `===`          | Strict equal to          | `5 === "5"` evaluates to `false`  |
| `!= `          | Not equal to             | `5 != 4` evaluates to `true`      |
| `!==`          | Strict not equal to      | `5 !== "5"` evaluates to `true`   |
| `>`            | Greater than             | `6 > 4` evaluates to `true`       |
| `<`            | Less than                | `6 < 4` evaluates to `false`      |
| `>=`           | Greater than or equal to | `6 >= 6` evaluates to `true`      |
| `<=`           | Less than or equal to    | `6 <= 4` evaluates to `false`     |

The first four operators in the table above compare two values for equality. The double equal sign (`==`) checks if two values are equal to each other, while the triple equal sign (`===`) checks if they are strictly equal to each other. The difference between the two is that the double equal sign performs type coercion, meaning that it will convert one value to match the other's type before making the comparison, while the triple equal sign requires both values to be of the same type.

The not equal to operator (`!=`) returns true if the values being compared are not equal, while the strictly not equal to operator (`!==`) returns true if the values are not only different, but also of a different type.

The last four operators in the table above compare two values to see which is greater, less than, or equal to the other. These operators work on both numbers and strings. When comparing strings, JavaScript compares the characters in the strings based on their Unicode code points.

Here are some examples of comparison operators in action:

```js
console.log(5 > 2); // true
console.log(5 == "5"); // true (type coercion is performed)
console.log(5 === "5"); // false (different types)
console.log(5 != "6"); // true
console.log(5 !== "5"); // true (different types)
```

In the above examples, the first comparison returns `true` because `5` is greater than `2`. The second comparison returns `true` because the double equal sign performs type coercion, and `5` and `"5"` are considered equal. The third comparison returns `false` because the triple equal sign requires both values to be of the same type, and `5` and `"5"` are not of the same type. The fourth comparison returns `true` because `5` is not equal to `6`. The fifth comparison returns `true` because `5` and `"5"` are not only different, but also of different types.

## Terenary Operators
In JavaScript, a ternary operator is a concise way to write conditional statements. It's also known as the conditional operator because it allows you to create a condition and return one of two values based on whether the condition evaluates to true or false. The ternary operator has the following syntax:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

Here's how it works:

1. **Condition**: This is an expression that evaluates to either true or false. It's the condition you want to test.

2. **ExpressionIfTrue**: If the condition is true, the expression after the `?` (question mark) is evaluated and returned.

3. **ExpressionIfFalse**: If the condition is false, the expression after the `:` (colon) is evaluated and returned.

Here's an example to illustrate the usage of the ternary operator:

```javascript
const age = Number.parseInt(prompt("Enter your Age"));
const message = (age >= 18) ? "You are an adult" : "You are not an adult";

console.log(message);
```

In this example, we first check if the `age` is greater than or equal to 18. If it is, the expression on the left side of the colon is evaluated and assigned to the `message` variable. If the condition is false, the expression on the right side of the colon is evaluated and assigned.

Ternary operators are especially useful when you want to assign a value to a variable based on a condition in a single line of code, making your code more concise and readable.

Here's another example that uses the ternary operator to find the maximum of two numbers:

```javascript
var num1 = 10;
var num2 = 20;
var max = (num1 > num2) ? num1 : num2;

console.log(max); // Output: 20
```

In this case, if `num1` is greater than `num2`, `num1` is assigned to the `max` variable; otherwise, `num2` is assigned.

Ternary operators can also be nested to handle more complex conditions. However, it's important to use them judiciously, as excessive nesting can make your code less readable. It's generally a good practice to use ternary operators for simple conditional assignments and use traditional `if-else` statements for more complex logic to maintain code clarity and maintainability.