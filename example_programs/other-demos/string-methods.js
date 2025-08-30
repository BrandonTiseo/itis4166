//Remember: Strings are immutable so every method below is passing a copy of msg.

let msg = "Hello world!";
console.log(msg.length); //property - no ().
console.log(msg.charAt(2)); 
console.log(msg.indexOf('o'));
console.log(msg.indexOf('or')); //index of first char.
console.log(msg.lastIndexOf('o'));
console.log(msg.indexOf('pa')); //returns -1
console.log(msg.replace('o','a')); //replaces first instance.
console.log(msg.replaceAll('o','a')); 
console.log(msg.substring(0,2)); //can only pass start index, it will then return the substring from that index to the end.
console.log(msg.substring(4));
console.log(msg.split(' ')); //splits into substrings by using a splitter, returns an array.




