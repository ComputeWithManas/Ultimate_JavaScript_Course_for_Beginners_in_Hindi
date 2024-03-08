# Question - 05

### Print “You can Drive” or “You cannot Drive” based on the age being greater than 18 or not using Ternary Operators. You have take the input for age from the user.

<details><summary>Solution</summary>

```javascript
// Take user input for age
let age = parseInt(prompt("Enter your age:"));

// Use ternary operator to determine if the person can drive
let message = age > 18 ? "You can Drive" : "You cannot Drive";

// Print the message
console.log(message);
```

</details>

## Tutorial:

### Approach:
> 1. **Taking User Input:** We start by taking user input for the age of the person using the `prompt()` function. We convert the input to an integer using `parseInt()` function.
> 
> 2. **Ternary Operator:** We use the ternary operator `?` to evaluate whether the age is greater than 18. If the condition is true, it returns the string "You can Drive", otherwise, it returns the string "You cannot Drive".
> 
> 3. **Printing the Message:** We store the result of the ternary operation in a variable `message` and then print it using `console.log()`.

### Explanation:
> - **Ternary Operator (`?`):** The ternary operator is a short way to write an if-else statement. It takes a condition followed by a question mark `?`, then an expression to be evaluated if the condition is true, followed by a colon `:`, and finally, an expression to be evaluated if the condition is false.
> 
> - **parseInt():** This function is used to parse a string and return an integer.

### Example Execution:
```
Enter your age: 20
You can Drive
```

```
Enter your age: 16
You cannot Drive
```
