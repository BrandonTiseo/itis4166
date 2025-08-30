const path = require('path'); //nodeJS core module -> only need to specify name.

const myPath = '/users/documents/teaching/demos/index.mm.js';

console.log(`The file path is : ${path.dirname(myPath)}`); //directory name
console.log(`The base name is : ${path.basename(myPath)}`); //last portion of the path.
console.log(`The file extension is : ${path.extname(myPath)}`); //last extension name.
console.log(path.parse(myPath)); //directory name, base name, and extension name all in an object.
console.log(path.join('users','documents','teaching')); //only pass strings as args, makes a file path.