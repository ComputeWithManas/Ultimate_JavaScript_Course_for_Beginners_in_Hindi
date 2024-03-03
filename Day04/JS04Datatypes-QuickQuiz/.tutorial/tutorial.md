<h1 align="center"> Datatypes in JavaScript </h1>
<h1 align="center"> QuickQuiz </h1>

In this tutorial, we will learn how to create a JavaScript program to store the name, phone number, and marks of a student using objects. Objects in JavaScript are a fundamental data type that allows us to store data in key-value pairs. We'll create a student object with properties for name, phone number, and marks, and then demonstrate how to access and manipulate the data stored in the object.

# Step-1: Create a JavaScript File
Create a new JavaScript File in Replit or any other IDE.

# Step-2: Declare a Variable and add Data to it
Make a Variable named "obj", "student" etc. by using "const" or "let" keyword and add the Name, PhoneNumber and Marks of a Student or of your own or copy-paste the code given below:
```js
const obj = {
  Name: "Manas Agrawal", // Your Name
  phoneNumber: 1234567890, // Your Phone Number
  Marks: 95, // Your Marks
}
```

# Step-3: Use "console.log" syntax to print your Object
* ### Copy-Paste the code given below to print your object, i.e., The Name, Phone Number and Marks of Student:
```js
console.log(obj); // To Print Your Objaect
```
> ### Output
```
{ Name: 'Manas Agrawal', phoneNumber: 1234567890, Marks: 95 }
```

#

* ### If you want to print only Name in the Object, you can use any of the following code:
```js
console.log(obj["Name"]);
```
```js
console.log(obj.Name);
```
> ### Output
```
Manas Agrawal
```

#

* ### If you want to print only Phone Number in the Object, you can use any of the following code:
```js
console.log(obj["phoneNumber"]);
```
```js
console.log(obj.phoneNumber);
```
> ### Output
```
1234567890
```

#

* ### If you want to print only Marks in the Object, you can use any of the following code:
```js
console.log(obj["Marks"]);
```
```js
console.log(obj.Marks);
```
> ### Output
```
95
```


## [Next Lesson>>]()