//normal function declaration//
//syntax: function name(parameter list) {body}

function sum(a, b){
    return a + b;
}
sum(4,5);
console.log(sum(3, 4));


/*THIS ALSO WORKS
console.log(sumTwo(3, 4));

function sumTwo(a, b){
    return a + b;
}
*/


//function expression//
//note: include semicolon. T
//note: the portion after the = is caled an anonymous function.
//syntax: const name = function(parameter list) {body};
const sumExp = function(a, b) {
    return a + b;
};

console.log(sumExp(3, 4));


/*WONT WORK - trying to use the function before it's defined in the expression.
console.log(sumExp(3, 4));

const sumExp = function(a, b) {
    return a + b;
};
*/


//arrow function (ES6)//
//note: no keyword function. using => in its place.
//syntax: const name = (parameter list) => {body};

const sumArrow = (a, b) => {
    return a + b;
};

console.log(sumArrow(3, 4));

/*can be further simplified
const sumArrow = (a, b) => a + b;

console.log(sumArrow(3, 4));

OR

const squaredArrow = a => a**2;

console.log(squaredArrow(2));
*/



