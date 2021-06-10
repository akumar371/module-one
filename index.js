var mathModule = require('./math/'); //importing math.js from math folder


var a = 10;
var b = 20;


var sum = 0;
sum = mathModule.sumOfTwoNumbers(a, b); // calling that method

console.log ("Addition of two numbers: ", sum);

console.log ("Product of two numbers: ", mathModule.multiplication(5, 7));

