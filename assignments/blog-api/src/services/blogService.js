import { getAll, getById, create, update, remove } from '../repositories/blogRepo.js';
//Handles business logic. Do we need to do anything before sending to/from database?
export function getAllBlogs(query){
    return getAll(query); 
}

export function getBlogById(id){
    let result = getById(id);
    if(result) return result;
    else {
        const error = new Error(`Cannot find blog with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export function createBlog(data){
    const now = new Date().toISOString();
    let blog = {
        title: data.title,
        content: data.content,
        author: data.author,
        isPublished: data.isPublished || false,
        createdAt: now,
        updatedAt: now,
        publishedAt: data.isPublished? now:null
    };

    create(blog);
}

export function updateBlog(id, data){
    if(!data || (!data.title && !data.content && !data.author)){
        const error = new Error(`No updateable fields provided`);
        error.status = 400;
        throw error;
    }
    const updatedBlog = update(id, data);
    if(updatedBlog) return updatedBlog;
    else {
        const error = new Error(`Cannot find blog with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export function deleteBlog(id) {
    const result = remove(id);
    if(result) return;
    else {
        const error = new Error(`Cannot find blog with id ${id}`);
        error.status = 404;
        throw error;
    }
}