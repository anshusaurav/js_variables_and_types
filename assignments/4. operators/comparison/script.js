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

alert("Result of the " + op + " is: " + res);
