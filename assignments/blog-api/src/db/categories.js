export const categories = [
{
    id: 1,
    name: "data_alpha"
},
{
    id: 2,
    name: "data_beta"
}
];
let nextID = categories.length;

export function getNextId(){
    nextID++;
    return nextID;
}