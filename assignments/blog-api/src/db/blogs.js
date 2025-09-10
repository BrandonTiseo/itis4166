export const blogs = [];
let nextID = blogs.length;

export function getNextId(){
    nextID++;
    return nextID;
}