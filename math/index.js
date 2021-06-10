var salary = require('./salary');
var date = require('./date');

exports.getSalary = function(sal, percentage){
	return salary.calculateBonus(sal, percentage);
};

// exports.date = function(date){
	// return date.myDateTime();
// }

exports.sumOfTwoNumbers = function(n1, n2){
	var result = 0;
	result = n1 + n2;

	return result;
}

exports.multiplication = function(n1, n2){
	return n1 * n2;
}