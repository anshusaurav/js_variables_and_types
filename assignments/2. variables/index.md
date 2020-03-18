1. In code below "Mark" is a string.  What is name?
```js
var name = "Mark";
```
Variable 
2. Find the error if any
```js
  var product cost = 3.45;
```
space not allowed within name of variable
3. Write `Right or Wrong` next to the code below.

```js
  "Hello World" Right
  'Hello World" Wrong
  "Hello World' Wrong
  'Hello World' Wrong
```

## Write `VALID` and `INVALID` infront of the variable name defined below
```js
var man; VALID
var 1girl;  INVALID
var woman3; VALID
var -girl; INVALID
var blackDog; VALID
var 42; INVALID
var $42; VALID
var userName; VALID
var x, y, z; VALID
var x = 5, y = 6, z = 7; VALID
var x = 5 + 10 + 2; VALID
```

## Basic Operations

Mathematical Operations:

Solve this using mathematical operations. (+, -, *, / , etc)

```js
var amount = 2080;
// Define a new variable and store the value that is 80 less then the value of amount.
var amountTempOne = amount-80;
// Define a new variable and store the value that is 200 more then the value of amount.
var amountTempTwo = amount+200;
// Define a new variable and store the value that is 4 times the value of amount.
var amountTempThree = 4*amount;
// Define a new variable and store the reminder when the value of amount is  divided by 21.
var amountTempFour= amount%21;
```

Logical Operation:

Solve this using logical operations. (<, >, &&, ||)

```js
var johnAge = 45;
var markAge = 35;

if(johnAge > markAge)
  alert("John is older");
else
  alert("Mark is older");


// Check who is older eithe John or Mark

if(johnAge < markAge)
  alert("John is younger");
else
  alert("Mark is younger");
// Check who is younger

if(johnAge == markAge)
  alert("Their age is equal");
else
  alert("Their age is not equal);
// Check if their age is equal
var newVar = johnAge;
// Create a new variable and assign the age of john to new variable.
if(johnAge >= markAge)
  alert("John is equal to or greater then mark");
else
  alert("Mark is equal to or greater then John");
// Check if john is equal to or greater then mark.

if(johnAge <= markAge)
  alert("John is equal to or less then mark");
else
  alert("Mark is equal to or less then John");
// Check if john is less then or equal to mark.

var avgAge = (johnAge + markAge)/2.00;
// Calculate the average age of john and mark and assign to a new variable.
```