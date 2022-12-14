/*
To create or declare a variable in JavaScript, we'll put the keyword var before  the variable as below
*/

var myVariable;

/*
Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number.
*/

// Further, we can store a value in a variable with the assignment operator (=)

myVariable = 84;

// Next, we can assig the value of one variable to another vriable

var newVariable;
newVariable = myVariable;
console.log(newVariable); //This will display 84 as the valu of newVariable.

/* Also, we can create a new variable and assign a value to it on the same line. This is known as "initializing variable"
 */

var initVar = 54;

/*
Now, we can also assign string literals to variables. A string literal, or string, is a series of zero or more characters enclosed in single or double quotes.
*/

var myStringVar = "Your Papa";

/*
One of the biggest problems with declaring variables with the var keyword is that it allows us to overwrite variable declarations

var trial = "James";
var trial = "David";
console.log(trial);
In the code above, the trial variable is originally declared as James, and is then overridden to be David. The console will then displays the string David.
*/

/* To fix the issue above, ES6 came with the let keyword. The let keyword results in an error when we declare a variable more than once with same name
 */

let newVar;

/*
In addition to the let keyword, we can also declare variables using the const keyword.  However, variables declared using const are read-only. (we cannot modify the value assigned to a const variable)
These variables are usually defined in all caps.
*/

const READ_ONLY = "must be initialized";

const FCC = "Copy";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);
