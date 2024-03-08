# Question - 02
### Demonstrate the use of Switch Case Statements in JavaScript.

<details><summary>Solution</summary>

```javascript
// Take user input for a day number
let dayNumber = parseInt(prompt("Enter a day number (1-7):"));

// Convert the day number to the corresponding day name using switch case
let dayName;
switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}

// Display the corresponding day name
console.log("The day corresponding to the entered number is: " + dayName);
```

</details>

## Tutorial:

### Approach:
> 1. **Taking User Input:** We start by taking user input for the day number using the `prompt()` function. We convert the input to an integer using `parseInt()` function.
> 
> 2. **Switch Case Statement:** We use a switch case statement to match the input day number with its corresponding day name. Each case represents a possible value of the day number (from 1 to 7), and the corresponding day name is assigned to the `dayName` variable.
> 
> 3. **Break Statement:** After each case, we include a `break` statement to exit the switch block. This prevents fall-through, meaning if a match is found, the execution of the switch block stops.
> 
> 4. **Default Case:** If the input day number does not match any of the cases, we set the `dayName` variable to "Invalid day number" using the `default` case.
> 
> 5. **Display Result:** Finally, we display the corresponding day name using `console.log()`.

### Example Execution:
```
Enter a day number (1-7): 3
The day corresponding to the entered number is: Wednesday
```

```
Enter a day number (1-7): 9
The day corresponding to the entered number is invalid day number
```

Switch case statements are useful when you have multiple conditions to check against a single value, providing a more readable and concise alternative to multiple if-else statements.