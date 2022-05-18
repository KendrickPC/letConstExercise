// let and const Exercise
// In this exercise, you’ll refactor some ES5 code into ES2015.

// ES5 Global Constants
var PI = 3.14;
PI = 42; // stop me from doing this!

// ES2015 Global Constants
/* Write an ES2015 Version */
const pi = 3.14;
console.log(pi);

// Quiz
// What is the difference between var and let?
/*
Although var and let can both be reassigned, let cannot be
redeclared, while var can. Both can mutate, but var exists in the
function scope while let exists in the block
scope (between curly braces).
*/

// What is the difference between var and const?
/*
const cannot be reassigned while var can be reassigned. const cannot be 
redeclared while var can be redeclared. Const exists in the block scope 
while var exists in the function scope.
*/

// What is the difference between let and const?
/*
The difference between let and const is that const cannot be reassigned 
nor can it be redeclared. Let can be reassigned, but cannot be redeclared. 
*/

// What is hoisting?
/*
Variables are put to the top of the scope they are declared in.
Functions are also "hoisted" to the top as well.
*/
