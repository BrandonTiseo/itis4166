export const blogs = [
{
    id: 1,
    title: 'My First Blog',
    content: 'This is my first blog.',
    author: 'Lijuan',
    isPublished: false,
    createdAt: '2025-06-25T13:45:00.000Z',
    updatedAt: null,
    publishedAt: null,
},
];
let nextID = blogs.length;

export function getNextId(){
    nextID++;
    return nextID;
}