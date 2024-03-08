# Question - 01
### Take an input for users age and use logical operators to find whether the age of a person lies between 10-20.

<details><summary>Solution</summary> 

```javascript
// Take user input for age
let age = parseInt(prompt("Enter your age:"));

// Check if age lies between 10 and 20
if (age >= 10 && age <= 20) {
    console.log("Your age lies between 10 and 20.");
} else {
    console.log("Your age does not lie between 10 and 20.");
}
```
</details>

## Tutorial:

### Approach:
> 1. **Taking User Input:** We start by taking user input for their age using the `prompt()` function. The input obtained is in the form of a string, so we use `parseInt()` function to convert it into an integer because age is typically represented as a whole number.
> 
> 2. **Using Logical Operators:** We use the logical operator `&&` (logical AND) to combine two conditions: one to check if the age is greater than or equal to 10 and the other to check if it is less than or equal to 20.
> 
> 3. **Conditional Check:** We then use an `if` statement to check if the entered age satisfies both conditions. If it does, we print a message indicating that the age lies between 10 and 20. Otherwise, we print a message indicating that the age does not lie between 10 and 20.

### Explanation of Logical Operator:
> - **&& (logical AND):** This operator returns `true` if both conditions it connects are `true`. Otherwise, it returns `false`.

### Example Execution:
```
Enter your age: 15
The age lies between 10 and 20.

Enter your age: 25
The age does not lie between 10 and 20.
```
