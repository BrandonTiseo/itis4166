import { blogs } from '../db/blogs.js';
//This layer works with the database directly.

export function getAll(query) {
    let result = [...blogs];
    if(query.author){
        result = result.filter(blog=>blog.author.toLowerCase() === query.author.toLowerCase())
    }

    if(query.title){
        result = result.filter(blog=>blog.title.toLowerCase().includes(query.title.toLowerCase()));
    }

    if(query.published){
        result = result.filter(blog=> blog.isPublished.toString() === query.published.toLowerCase());
    }
    
    return result;
}