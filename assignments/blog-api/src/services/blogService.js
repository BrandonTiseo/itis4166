import { getAll, getById, create } from '../repositories/blogRepo.js';
//Handles business logic. Do we need to do anything before sending to/from database?
export function getAllBlogs(query){
    return getAll(query); 
}

export function getBlogById(id){
    let result = getById(id);
    if(result) return result;
    else return {error: `Cannot find blog with id ${id}`, status: 404 };
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