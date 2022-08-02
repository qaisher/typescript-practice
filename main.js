"use strict";
exports.__esModule = true;
var message = 'hello world';
console.log(message);
var name = 'qaisher';
var age = 27;
var alive = true;
var numArr1 = [3, 5, 6];
var numArr2 = [9, 2, 0];
var person1 = ['Chris', 22]; //array of multi type. cannot swap the order of values
var anyType = true;
anyType = 22;
var multiType = 3;
multiType = true;
//functions
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(3, 9));
console.log(add(3));
