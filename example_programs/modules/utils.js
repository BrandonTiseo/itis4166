exports.greeting = name => console.log(`Hello ${name}`);

exports.farewell = name => console.log(`Goodbye ${name}`);

//exports.greeting = greeting; //module.exports.greeting = ... works too!
//.greeting = key, greeting function = value


//exports = greeting; //reassignment -> only do when exporting 1 thing.
console.log(module.exports);
console.log(exports);