var mathModule = require('./math')
// var http = require('http'); // node built in
// var express = require('express'); //third party

var p = 20;
var q = 20;

console.log(mathModule.sumOfTwoNumbers(p, q));
console.log("Salary is: ", mathModule.getSalary(60000, 10));
console.log("Total Salary: ", mathModule.totalSalary);
// console.log("The date and time are currently: ", mathModule.date());