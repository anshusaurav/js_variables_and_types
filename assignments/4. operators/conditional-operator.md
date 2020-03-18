## If Statement
1.  🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
```js
// Your code goes here
var first = +prompt("Enter first: ", 0);
var second = +prompt("Enter second: ", 0);
var op = prompt("Enter operation: ", "Add");
var res;
if(op == "Add")
    res =first + second;
else if(op == "Sub")
    res = first - second;
else if(op == "Mul")
    res = first * second;
else if(op == "Div")
    res = first/second;
```

alert("Result of the " + op + " is: " + res);

2. 🎖Write a if else statement which checks if the status is single `console.log` the message `John is single` or else `John is married`
```js
var firstName = 'John';
var status = 'single';
// Your code goes here
if(status === 'single')
  console.log(`John is single`);
else
  console.log(`John is married`);

```

3. 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
```js
// your code goes here'
var first = +prompt("Enter first: ", 0);
var second = +prompt("Enter second: ", 0);
if(first > second)
    alert(first + " is larger among these two");
else
    alert(second + " is larger among these two");
```

4. 🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.

```js
// Your code goes here
var a = +prompt("Enter a: ", 0);
var b = +prompt("Enter b: ", 0);
var c = +prompt("Enter c: ", 0);
var res = a*b*c;
var sign;
if (res >= 0)
    sign ="+";
else
    sign ="-";
alert(sign);
```

## Switch Statement

1. 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.
```js
// Your code goes here
var num = +prompt("Enter number: ", 0);
switch (num){
    case 1: 
        alert("ONE");
        break;
    case 2: 
        alert("TWO");
        break;
    case 3: 
        alert("THREE");
        break;
    case 4: 
        alert("FOUR");
        break;
    case 5: 
        alert("FIVE");
        break;
    case 6: 
        alert("SIX");
        break;
    case 7: 
        alert("SEVEN");
        break;
    case 8: 
        alert("EIGHT");
        break;
    case 9: 
        alert("NINE");
        break;
    default:
        alert("Please try again");       
}
```

2. 🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
```js
// Your code goes here

var num = +prompt("Enter score: ", 0);
switch (true){
    case (num <= 30): 
        alert("FF");
        break;
    case (num <= 40): 
        alert("DD");
        break;
    case (num <= 50): 
        alert("CD");
        break;
    case (num <= 60): 
        alert("CC");
        break;
    case (num <= 70): 
        alert("BC");
        break;
    case (num <= 80): 
        alert("BB");
        break;
    case (num <= 90): 
        alert("AB");
        break;
    case (num <= 100): 
        alert("AA");
        break;
    default:
        alert("Invalid value");       
}
```
