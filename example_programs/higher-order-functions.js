//a higher order function is a function that returns a function or takes a function as an argument.

//return a function//

function greaterThan(a) {
    return function(b){ //anonymous function
        return b > a;
    }
}

const greaterThan10 = greaterThan(10);
const greaterThan20 = greaterThan(20);
 
//greaterThan10 = function(b) {return b > 10}

console.log(greaterThan10); //[Function (anonymous)]

console.log(greaterThan10(5));

console.log(greaterThan20(30));


//takes a funciton as an argument//
const nums = [1, 10, 7, 25, -5, 8];

//nums.sort(comp); //Takes a comparison function in parameters.
//nums.sort(function(a,b) {return a-b;}); //Expression syntax
nums.sort((a, b) => b - a); //arrow syntax
/*
function comp(a, b){
    return a - b; //ascending order. b - a = descending
}
*/
console.log(nums)
