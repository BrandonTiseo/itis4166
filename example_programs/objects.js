//objects = collection of properties in JS. Don't need to define a class (object literal). Properties are key-value pairs. If key has a space or it's a number you need to use "".
const book = {
    title: 'Animal Farm',
    published: 1949,
    author: {firstName: 'George', lastName: 'Orwell'},
    genres: ['classic','fiction','fantasy'],
    'age group': '13 and above',
    
    getAuthorName: function(){
        return `${this.author.firstName} ${this.author.lastName}`;
    }

};
console.log(book.title);
//console.log(book.'age group'); WONT WORK BECAUSE OF ""
console.log(book['age group']);
console.log(book.getAuthorName());

//checks if the book object has the author property.
console.log('author' in book);
console.log(book.hasOwnProperty('author')); //

book.ratings = 4.3; //can add in a new property whenever you want.

console.log(Object.keys(book));
console.log(Object.values(book));

//Loops over they keys.
for(const key in book){
    console.log(book[key]);
}

delete book.ratings; //remove object property.
