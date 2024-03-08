## Q4: Modifying const objects
Try to add a new key to the previous const object. 
<details><summary>Answer</summary>

### Input:
```javascript
const biodata = { 
    name: "Manas", 
    age: 15 
    };
biodata.address = "Indra Nagar";
console.log(biodata); // { name: "John", age: 30, address: "123 Main St" }
```

### Output:
```javascript
{ name: "Manas", age: 15, address: "Indra Nagar"}
```

Even though biodata is a constant, we can still modify its properties. This is because the const keyword only prevents us from reassigning the variable to a different value. The object itself is still mutable, which means we can add or change its properties.

</details> </br>
