//ARRAY FUNDAMENTALS//
console.log("-------------ARRAY FUNDAMENTALS-------------");

//arrays can store multiple datatypes at once.
const nums = [1, 2, 3, 4, 5, 'green', false]; 
//using const ensures the name always points to the same array, we can still change the array's contents though.

console.log(nums.length);
console.log(nums[0]);
console.log(nums.includes('5'));
console.log(nums.indexOf(8));

//add & removing elements
//Note:javascript arrays are dynamic -> can always add or remove elements.
nums.push(6);
nums.unshift(0); //adds to start.
nums.pop();
nums.shift(); //removes from start.

/*
splice can be used to add and remove elements.
first param = starting index.
second param (optional) = how many elements to add/remove.
third param (optional) = if adding elements you specify the elements to add. Omit if removing.
*/
nums.splice(2, 2, 'red'); 


console.log(nums.join('@'));
console.log(nums.toString());


//ARRAY ITERATION//
console.log("-------------ARRAY ITERATION-------------");
const nums2 = [1, 2, 3, 4 ,5]

for(let i = 0; i < nums2.length; i++){
    console.log(nums2[i]);
}

//num is a copy of the element.
for(let num of nums2){
    console.log(num);
}

//forEach(function): calls the function on each element in the array.
//Note: forEach method always returns undefined.
//Note: each "num" is just a copy of the element not the actual.
function output(num){
    console.log(num);
}

nums2.forEach(output);
nums2.forEach(function(num){
    console.log(num);
});
nums2.forEach(num => console.log(num));

//Changing the actual element. Increment by 1.
nums2.forEach((nums2, index, num)=> nums2[index]++);
console.log(nums);


//ARRAY SEARCH//
console.log("-------------ARRAY SEARCH-------------");
const nums3 = [7, 9, 11, 25, 4, 1, 15];

//find(function): test each element with the argument function and return the value of the first element that satisfies the argument function. Argument function must return a boolean type value.
nums3.find(function(num){
    return num > 10;
});
/*alt ver 
console.log(nums.find(num => num > 20));
*/

//findIndex(function): returns the index of the first element. -1 if not found.
console.log(nums3.findIndex(num => num > 10));

//filter(function): creates and returns an array of all elements satisfying the argument function.
console.log(nums3.filter(num => num > 10));


//TRANSFORM AN ARRAY//
console.log("-------------TRANSFORM AN ARRAY-------------");
const nums4 = [7, 7,8 ,9 ,15, 1, 2];

//map(function): create and return an array with values that are returned by calling the argument function on each element.

console.log(nums4.map(num => {
    if(num % 2 === 0)
        return num;
    else
        return num*2;
}));
console.log(nums);

//sort(function): by default, if no argument function is provided, it will sort elements as strings in ascending order. Changes original array.
nums4.sort();
console.log(nums);

//pass a function as argument to determine the order of the elements. Argument functions returns an int as a result.
nums4.sort((a,b) => a - b); //ascending (b-a = descending)
console.log(nums4);


//reduce(function, initialValue(optional)): executes the function on each element, passes the result from the previous execution.
console.log(nums4.reduce((result, num) => {
    //console.log(`result: ${result}, num: ${num}`);
    //return result + num

    if(!result.includes(num))
        result.push(num);
    return result;
}, []));








