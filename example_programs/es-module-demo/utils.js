//es exporting

/*//exporting one function
export default function greet(name){
    console.log(name);
}
*/
//exporting multiple functions
export function greet(name){
    console.log(`Hello, ${name}`);
}
export function farewell(name){
    console.log(`Goodbye, ${name}`);
}
