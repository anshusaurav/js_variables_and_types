// var first = +prompt("Enter first: ", 0);
// var second = +prompt("Enter second: ", 0);
// var op = prompt("Enter operation: ", "Add");
// var res;
// if(op == "Add")
//     res =first + second;
// else if(op == "Sub")
//     res = first - second;
// else if(op == "Mul")
//     res = first * second;
// else if(op == "Div")
//     res = first/second;

// alert("Result of the " + op + " is: " + res);



// var first = +prompt("Enter first: ", 0);
// var second = +prompt("Enter second: ", 0);
// if(first > second)
//     alert(first + " is larger among these two");
// else
//     alert(second + " is larger among these two");


// var a = +prompt("Enter a: ", 0);
// var b = +prompt("Enter b: ", 0);
// var c = +prompt("Enter c: ", 0);
// var res = a*b*c;
// var sign;
// if (res >= 0)
//     sign ="+";
// else
//     sign ="-";
// alert(sign);



// var num = +prompt("Enter number: ", 0);
// switch (num){
//     case 1: 
//         alert("ONE");
//         break;
//     case 2: 
//         alert("TWO");
//         break;
//     case 3: 
//         alert("THREE");
//         break;
//     case 4: 
//         alert("FOUR");
//         break;
//     case 5: 
//         alert("FIVE");
//         break;
//     case 6: 
//         alert("SIX");
//         break;
//     case 7: 
//         alert("SEVEN");
//         break;
//     case 8: 
//         alert("EIGHT");
//         break;
//     case 9: 
//         alert("NINE");
//         break;
//     default:
//         alert("Please try again");       
// }


// var num = +prompt("Enter score: ", 0);
// switch (true){
//     case (num <= 30): 
//         alert("FF");
//         break;
//     case (num <= 40): 
//         alert("DD");
//         break;
//     case (num <= 50): 
//         alert("CD");
//         break;
//     case (num <= 60): 
//         alert("CC");
//         break;
//     case (num <= 70): 
//         alert("BC");
//         break;
//     case (num <= 80): 
//         alert("BB");
//         break;
//     case (num <= 90): 
//         alert("AB");
//         break;
//     case (num <= 100): 
//         alert("AA");
//         break;
//     default:
//         alert("Invalid value");       
// }



// let isGuestOneVeg = false;
// let isGuestTwoVeg = false;
// if(isGuestOneVeg && isGuestTwoVeg)
//     alert("Only offer up vegan dishes.")
// else if(isGuestOneVeg || isGuestTwoVeg)
//     alert("Make sure to offer up some vegan options.")
// else {
//     alert("Offer up anything on the menu");
// }


// let temperature = 114;
// if(temperature < 32)
//     alert("It is freezing outside");
// else if(temperature > 110)
//     alert("It is hot outside")
// else
//     alert('Go for it. It is pretty nice out');


/*
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
 */

    // const SPENDING_THRESHOLD = 200;
    // const TAX_RATE = 0.08;
    // const PHONE_PRICE = 99.99;
    // const ACCESSORY_PRICE = 9.99;

    // var bank_balance = 303.91;
    // var amount = 0;
    // function calcTax(amount)
    // {
    //     return TAX_RATE*amount;
    // }
    // function formatAmount(amount)
    // {
    //     return "$ " + amount.toFixed(2);
    // }
    // while(bank_balance >= 0)
    // {
    //     var current_expenditure = PHONE_PRICE;
    //     console.log(current_expenditure);
    //     while(current_expenditure < SPENDING_THRESHOLD)
    //         current_expenditure +=  ACCESSORY_PRICE;
    //     current_expenditure = calcTax(current_expenditure);
    //     console.log(current_expenditure);
    //     if(bank_balance >= current_expenditure)
    //     {
    //         alert("Calculated Purchase amount: " + formatAmount(current_expenditure));
    //         bank_balance-=current_expenditure;
    //     }
    // }

    // for( var i = 0; i <= 20; i++)
    // {
    //     if(i%2 == 0)
    //         alert( i + " is even");
    //     else
    //         alert( i + " is odd");
    // }


    // for( var i = 0; i <= 10; i++)
    //     alert( i*9);


    // for( var i = 1; i <= 10; i++)
    // {
    //     var res = "";
    //     for(var j = 1; j <=10; j++)
    //     {
    //         res+= i + " * " + j + " = " + i*j + "\n";   //"1 * 1 = 1"
    //     }
    //     alert(res);
    // }


    // var res = "";
    // for( var i = 1; i <= 10; i++)
    // {
    //     res += i 
    //     if(i== 5)
    //         res+="\n"; 
    //     if(i != 10)
    //         res+=", "
    // }
    // alert(res);




    // var x = 1;
    // var sum = 0;
    // while(x <= 20)
    // {
    //     sum += x;
    //     x++;
    // }
    // alert(sum);

    var x = 1;
    var sum = 0;
    while(x <= 20)
    {
        if(x % 2 == 0)
        alert(x);
        x++;
    }