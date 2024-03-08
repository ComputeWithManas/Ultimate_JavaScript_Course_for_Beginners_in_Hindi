# EXAMPLES


## EXAMPLE 1
 ```javascript
const fruit = "Oranges";
switch (fruit) {
  case "Oranges":
    console.log("Oranges are Rs.20 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are Rs.50 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are Rs.30 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + fruit);
}
 ```
### Output:
```
Oranges are Rs.20 a pound.
```
### Explanation:
The given code defines a variable `fruit` with the value `"Oranges"`. The `switch` statement then checks the value of `fruit` and executes the corresponding `case`. In this case, the value of `fruit` is "Oranges", so the code inside the "Oranges" case is executed. As a result, the output is "Oranges are Rs.20 a pound." The `break` statement is used to exit the `switch` statement after the correct case is executed, preventing the execution of subsequent cases.



## EXAMPLE 2
```javascript
const action = "say_hello";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}
```
### Output:
```
hello
```
### Explanation:
The given code defines a variable `action` with the value `"say_hello"`. The `switch` statement then checks the value of `action` and executes the corresponding `case`. In this case, the value of `action` is "say_hello", so the code inside the "say_hello" case is executed. Inside that case, a `const` variable `message` is declared with the value "hello", and then it is logged to the console. The `break` statement is used to exit the `switch` statement after the correct case is executed, preventing the execution of subsequent cases.

Therefore, the output of the code is "hello". The `default` case is not executed because the value of `action` matches the "say_hello" case.



## EXAMPLE 3
```javascript
const Animal = "Giraffe";
switch (Animal) {
  case "Cow":
  case "Giraffe":
  case "Dog":
  case "Pig":
  case "Cat":
  case "Horse":
  case "Lion":
  case "Tiger":
  case "Buffalo":
    console.log("This animal is not extinct.");
    break;
  case "Dinosaur":
  case "Dodo":
  case "Golden Toad":
  case "Tasmanian Tiger":
  case "Irish Elk":
  case "Great Auk":
  default:
    console.log("This animal is extinct.");
}
```
### Output:
```
This animal is not extinct.
```
### Explanation:
The given code defines a variable `Animal` with the value `"Giraffe"`. The `switch` statement then checks the value of `Animal` and matches it against several cases. In this case, the value of `Animal` matches the "Giraffe" case. The code inside that case is executed, and the message "This animal is not extinct." is logged to the console. The `break` statement is used to exit the `switch` statement after the correct case is executed, preventing the execution of subsequent cases.

Since the value of `Animal` matches one of the non-extinct animals listed in the `case` statements, the code inside the corresponding `case` block is executed. The `default` case is not executed in this scenario because the `break` statement is encountered before reaching the `default` case.

Therefore, the output of the code is "This animal is not extinct."



## EXAMPLE 4
```javascript
const a = 1;
let out = "Output: ";
switch (a) {
  case 0:
    out += "So ";
  case 1:
    out += "What ";
    out += "Is ";
  case 2:
    out += "Your ";
  case 3:
    out += "Name";
  case 4:
    out += "?";
    console.log(out);
    break;
  case 5:
    out += "!";
    console.log(out);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
```
### Possible Outputs:
| Value | Log text                                        |
|-------|-------------------------------------------------|
| foo is NaN or not 1, 2, 3, 4, 5, or 0 | Please pick a number from 0 to 5!                |
| 0     | Output: So What Is Your Name?                   |
| 1     | Output: What Is Your Name?                      |
| 2     | Output: Your Name?                              |
| 3     | Output: Name?                                   |
| 4     | Output: ?                                      |
| 5     | Output: !                                      |

### Output:
```
Output: What Is Your Name?
```
### Explanation:
The given code defines a variable `foo` with the value `1`. The `switch` statement then checks the value of `foo` and starts executing code from the matching `case`. In this case, the value of `foo` is `1`, so the code inside the "1" case and the subsequent cases is executed.

The `out` variable is initially set to "Output: ". As the code progresses through the cases, the string is concatenated based on the fall-through behavior of the `switch` statement. The `break` statement is not used after each `case`, so the execution continues to the next `case`.

The code keeps executing until it encounters a `break` statement or reaches the end of the `switch` statement. In this case, the `break` statement is encountered after the "4" case, so the execution stops, preventing the execution of the "5" case.