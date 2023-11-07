<h1 align="center"> Foundation </h1>
<h2 align="center"> Introduction to Syntax, Types of Languages, Comments and Variables </h2>

Before we dive into the world of programming, we need to understand the basics of syntax, types of languages, and variables. This chapter will cover the basics and lay a strong foundation for your programming journey.

# Syntax
Just like there are some set of rules for writing a sentence in English, there are some set of rules for writing a program in a programming language. These rules are called syntax. 
Syntax is how a program is written and arranged. It defines the combination of symbols that are considered to be correctly structured.

# Types of Languages
There are two main types of programming languages: dynamically typed and statically typed.

### Dynamically Typed
Dynamically typed languages are the ones where the type of a variable is determined at runtime. This means that the type of a variable can change during the execution of the program. Js is example of a dynamically typed language.

### Statically Typed
Statically typed languages are the ones where the type of a variable is determined at compile time. This means that the type of a variable cannot change during the execution of the program. C is example of a statically typed language.

# Comments
Comments are used to explain the code. They are not executed by the computer. They are just for the programmer to understand the code. There are two types of comments: single line and multi-line.

### Single Line Comments
Single line comments are used to comment a single line of code. They are denoted by `//`. Everything after `//` is a comment and will not be executed by the computer.

```js
// This is a single line comment
console.log("Hello World"); // This is also a single line comment
```

### Multi-Line Comments
Multi-line comments are used to comment multiple lines of code. They are denoted by `/*` and `*/`. Everything between `/*` and `*/` is a comment and will not be executed by the computer.

```js
/*
This is
a multi-line
comment.
*/
````
Think of comments as sticky notes that you leave for yourself or others who may read your code in the future. They help make your code easier to understand and maintain.

# Variables
Variables are used to store data. They are like containers that hold data.Just like there are different containers in your kitchen like one may be used to store rice, another may be used to store sugar, similarly, variables are used to store different types of data. And since javascript is a dynamically typed language, the type of data that can be stored in a variable can change during the execution of the program.

Variables are declared using the `var`, `let` or `const` keyword (we will discuss this in next lecture). The syntax for declaring a variable is as follows:

```js
var name = "Manas";
```

Here, `name` is the name of the variable and `"Harry"` is the value that is stored in the variable. The value can be of any type. It can be a string, a number, a boolean, an array, an object, etc. Don't worry if you don't understand what these terms mean. We will cover them in the upcoming lectures.

Now that we know what variables are, let's discuss some rules for naming variables.

## Rules for Naming Variables
1. Variable names cannot start with a number.
```js
var 1name = "Manas"; // will throw an error because of the 1 at the start
```
2. Variable names cannot contain spaces.
```js
var my name = "Manas"; // will throw an error because of the space
```
3. Variable names cannot contain special characters like `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)`, `-`, `+`, `=`, `[`, `]`, `{`, `}`, `|`, `\`, `:`, `;`, `<`, `>`, `,`, `.`, `/`, `?`, `~`.
```js
var my-name = "Manas"; // will throw an error because of the `-` character
```
4. Variable names cannot be a reserved keyword. Reserved keywords are the keywords that are already used by the language. For example, `var`, `let`, `const`, `if`, `else`, `for`, `while`, `function`, `return`, etc.
```js
var var = "Manas"; // will throw an error because var is a reserved keyword
```
5. Variable names are case sensitive. This means that `name` and `Name` are two different variables.
```js
var name = "Manas";
var Name = "Ron";
console.log(name); // will print "Harry"
console.log(Name); // will print "Ron"
```

# var, let and const
In javascript, there are three keywords that are used to declare variables: `var`, `let` and `const`. The `var` keyword was used to declare variables in javascript before the `let` and `const` keywords were introduced. The `let` and `const` keywords were introduced in ES6 (ECMAScript 6). ES6 is the latest version of javascript. It was released in 2015. ES6 introduced a lot of new features to javascript. We will learn about some of them in this course.

# var
The `var` keyword is used to declare variables in JavaScript. Here's an example:
```js
var name = "Manas";
console.log(name); //output: Harry
```
we can also reassign the value of a variable declared using the `var` keyword:
```js
var name = "Manas";
name = "Ron";
console.log(name); //output: Ron
```
One important thing to note about var is that it has block scope. This means that if a variable is declared with var inside a function, it is accessible anywhere within that block.

Note: Block scope will be discussed in the upcoming videos. For now, just remember that anything inside curly braces `{}` is a block.

Here's an example:
```js
var name = "Manas";
{
    var name = "Ron";
    console.log(name); //output: Ron
}
console.log(name); //output: Ron
```
This is the reason why the `var` keyword is not recommended to be used anymore. It can lead to unexpected results. Instead we make use of the `let` and `const` keywords.

# let
The let keyword is used to declare variables in JavaScript and has block scope. This means that if a variable is declared with let inside a block, it is only accessible within that block.

Here's an example:
```js
let a = 29

let b = " Manas";
{
let b = "this";
console.log(b); //output: this
}
console.log(b); //output: Harry
```

# const
The `const` keyword is used to declare variables in JavaScript and is used when you don't want to reassign the variable. The value of a variable declared with `const` cannot be changed.

Here's an example:
```js
const name = " Manas";
name = "this";
console.log(name); //output: Uncaught TypeError: Assignment to constant variable.
```

# Differences

|  | **Block scoped** | **Hoisting** | **Reassignment** | **Initialization** |
|----------|-------------------|--------------|------------------|--------------------|
| `let`      | Yes               | No           | Yes              | Optional           |
| `var`      | No                | Yes          | Yes              | Optional           |
| `const`    | Yes               | No           | No               | Required           |


* **Block scoped**: `let` and `const` are block-scoped, meaning they are only accessible within the block they were defined in, while `var` is function-scoped, meaning it is accessible within the entire function it was defined in.
* **Hoisting:** `let` and `const` are not hoisted, meaning they cannot be accessed before they are declared, while `var` is hoisted, meaning it can be accessed before it is declared (although it will have a value of undefined).
* **Reassignment:** `let` and `var` can be reassigned to a new value, while `const` cannot be reassigned.
* **Initialization:** `let` and `var` can be declared without being initialized, while `const` must be initialized with a value when it is declared.


# Best Practices
Now we know everything about the variables in JavaScript. Let's look at some best practices that we should follow while declaring variables in JavaScript to make our code more readable and maintainable.

1. Use descriptive and meaningful variable names: Choose variable names that clearly describe the value they hold. This makes your code easier to read and understand.
```js
const a = "Manas"; //bad
const name = "Manas"; //good
```
2. Use camelCase to name your variables. This makes your code easier to read and understand.
```js
const myName = "Manas"; //good
const myname = "Manas"; //bad
```
3. Use const by default and only use let if you need to reassign the variable. Avoid using var.
```js
const name = "Manas"; //good
let temporary = 29; //good
var name = "Manas"; //bad
```
4. Declare variables at the top of their scope: To make your code more readable, it's best to declare variables at the top of their scope. This makes it easier to see what variables are in scope and what values they hold
```js
//good:
{
    const name = "Manas";
    const hobby = "programming";

    console.log("My name is " + name + " and I love " + hobby); // output: My name is Manas and I love programming
}
//bad
{
    console.log("My name is " + name + " and I love " + hobby); // output: My name is undefined and I love undefined
    const name = "Manas";
    const hobby = "programming";
}
```
5. Use const whenever possible: If you know that a variable will not change, use const to declare it. This helps to prevent bugs in your code that could occur if you accidentally reassign a value to a variable that should not change.
```js
const name = "Manas"; //good
let name = "Manas"; //fine but const is better because we know that the value of name will not change
var name = "Manas"; //bad
```

# Conclusion
Variables are an essential part of JavaScript programming. They allow us to store and manipulate data in our code. In JavaScript, we can declare variables using the `var`, `let`, and `const` keywords. While the `var` keyword has block scope, it can lead to unexpected results and is no longer recommended. Instead, we should use the `let` and `const` keywords, with `const` being the preferred option whenever possible. When declaring variables, we should follow best practices like using descriptive names, using camelCase, declaring variables at the top of their scope, and using `const` by default. By following these practices, we can make our code more readable and maintainable.
