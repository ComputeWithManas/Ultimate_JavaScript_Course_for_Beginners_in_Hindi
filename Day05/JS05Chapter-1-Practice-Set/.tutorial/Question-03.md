## Q3: Const objects
Create a constant object in JavaScript and then try to change its value to another data type.

<details><summary>Answer</summary>

```javascript
const biodata = { 
    name: "Manas",
    age: 15 
};
biodata = 29; // TypeError: Assignment to constant variable.
```
When you create a constant in JavaScript, its value cannot be changed. If you try to assign a new value to a constant, you'll get a TypeError.

</details> </br>
