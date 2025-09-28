import { blogs, getNextId } from '../db/blogs.js';
//This layer works with the database directly.

export function getAll(query) {
    let result = [...blogs];
    if(query.author){
        result = result.filter(blog=>blog.author === query.author)
    }

    if(query.title){
        result = result.filter(blog=>blog.title.toLowerCase().includes(query.title));
    }

    if(query.published){
        result = result.filter(blog=> blog.isPublished === query.published);
    }
    
    return result;
}

export function getById(id) {
    let blog = blogs.find(b => b.id === id);
    return blog;
}

export function create(blog){
    let id = getNextId();
    const newBlog = { id, ...blog};
    blogs.push(newBlog);
    return newBlog;
}

export function update(id, updates){
    const index = blogs.findIndex(blog=>blog.id === id);
    if(index !== -1){
        const updatedBlog = {
            ...blogs[index], 
            ...updates, 
            updatedAt: new Date().toISOString()
        };
        blogs[index] = updatedBlog;
        return blogs[index];
    } else {
        return null;
    }
}

export function remove(id){
    let index = blogs.findIndex(b => b.id === id);
    if(index !== -1){
        blogs.splice(index, 1);
        return true;
    } else {
        return false;
    }
}