//let, const, var

//let: global scope or block scope.
let a = 10; //global scope.

if(a>1){
    let b = 5; //block scope.
    a = a * b;
}

console.log(a);
//console.log(b); WONT WORK


//const: constants whose values can't change.
const c = 10;
//c=5; WONT WORK

//var: global scope or function scope.
var d = 10; //global scope.
function double(){
    var e = d * 2; //function scope.
    console.log(e);
}

console.log(d);
double();
//console.log(e); WONT WORK, HAS FUNCTION SCOPE

//let vs var
var f = 10; //global scope
if(f>1){
    var g = f * 2; //global scope
    console.log(g);
}
console.log(f);
console.log(b);
/*There is no block scope for var, so if you define it 
  anywhere outside of a function it will always be global
  which can cause problems.
*/