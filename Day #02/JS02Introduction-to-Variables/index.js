// console.log("Manas Agrawal");
// // This is a single line comment
// console.log("Hello World"); // This is also a single line comment
// /*
// This is
// a multi-line
// comment.
// */
// var a = 1234;
// console.log(a);
// let b = 98;
// console.log(b);
// const c = 12398;
// console.log(c);
// // var 1name = "Manas"; // will throw an error because of the 1 at the start
// // var my name = "Manas"; // will throw an error because of the space
// // var my-name = "Manas"; // will throw an error because of the `-` character
// // var var = "Manas"; // will throw an error because var is a reserved keyword
// var name = "Manas";
// var Name = "Ron";
// console.log(name); // will print "Harry"
// console.log(Name); // will print "Ron"
// var name = "Manas";
// console.log(name); //output: Manas
// var name = "akshat";
// console.log(name); // output: akshat
// name = "Ron";
// console.log(name); //output: Ron
// var name = "Manas";
// console.log(name);
// {
//     var name = "Ron";
//     console.log(name); //output: Ron
// }
// console.log(name); //output: Ron
// let a = 29;
// console.log(a);
// let b = "Manas";
// {
// let b = "this";
// console.log(b); //output: this
// }
// console.log(b); //output: Harry
// b = 32;
// console.log(b);
// const name = "Manas";
// console.log(name)
// name = "this";
// console.log(name); //output: Uncaught TypeError: Assignment to constant variable.

//good:
// {
//     const name = "Manas";
//     const hobby = "programming";

//     console.log("My name is " + name + " and I love " + hobby); // output: My name is Manas and I love programming
// }

//bad:
// {
//     console.log("My name is " + name + " and I love " + hobby); // output: My name is undefined and I love undefined
//     const name = "Manas";
//     const hobby = "programming";
// }