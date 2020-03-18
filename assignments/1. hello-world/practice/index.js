// Challenge 1.
// Log message in console saying "I'm Learning Javascript"
console.log("I'm Learning Javascript");

// Challenge 2.
var admin;
var name;
name= "John";
admin = name;
alert(admin);
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

// Challenge 3.
alert("Hello world");
// Use alert function to to show a message saying “Hello World”.

// Challenge 4.
var name = prompt("Enter your name:" ,"");
alert("Welcome " + name);
// Use prompt to take the name of person and greets them. i.e "Welcome Arun"

// Challenge 5.
var str = prompt("Enter the string" , "");
var len = str.length;
//alert(len);
var i;
for(i = 0;; i++ )
{
    if(!str.charAt(i))
        break;
}
alert(i);
// Get an input from the user using the prompt box and display the length of the string.
// e.g “    ” should output will be 15.

// Challenge 6.
var city = "Dharamshala";
var country = "India";
alert('"' + city + "," + country + '"');
// Alert the above variable like "Dharamshala, India";
