# Question - 04

### Write a JavaScript Program to take an input for a number from the user and find whether the given number is divisible by 4 and 5 or not.

<details><summary>Solution</summary>

```javascript
// Take user input for a number
let number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by both 4 and 5
if (number % 4 === 0 && number % 5 === 0) {
    console.log(number + " is divisible by both 4 and 5.");
} else {
    console.log(number + " is not divisible by both 4 and 5.");
}
```

</details>

## Tutorial:

### Approach:
> 1. **Taking User Input:** We start by taking user input for a number using the `prompt()` function. We convert the input to an integer using `parseInt()` function.
> 
> 2. **Divisibility Check:** We use the modulo operator `%` to check the remainder when dividing the number by 4 and 5. If the remainder is 0 for both operations, it means the number is divisible by both 4 and 5.
> 
> 3. **Logical AND (`&&`) Operator:** We use the logical AND operator to combine the conditions. If the number is divisible by both 4 AND 5, the condition evaluates to `true`.
> 
> 4. **Conditional Check:** We use an `if` statement to check if the entered number satisfies the conditions. If it does, we print a message indicating that the number is divisible by both 4 and 5. Otherwise, we print a message indicating that the number is not divisible by both 4 and 5.

### Explanation:
> - **% (Modulo Operator):** The modulo operator returns the remainder of the division of two numbers. If the remainder is 0, it indicates that the number is divisible by the divisor.
> 
> - **&& (Logical AND Operator):** This operator returns `true` only if both conditions it connects evaluate to `true`. In our case, if the number is divisible by both 4 AND 5, the condition evaluates to `true`.

### Example Execution:
```
Enter a number: 20
20 is divisible by both 4 and 5.
```

```
Enter a number: 12
12 is not divisible by both 4 and 5.
```
