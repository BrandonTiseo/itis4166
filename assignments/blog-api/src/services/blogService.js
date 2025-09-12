import { getAll, getById } from '../repositories/blogRepo.js';
//Handles business logic.
export function getAllBlogs(query){
    return getAll(query); 
}

export function getBlogById(id){
    let result = getById(id);
    if(result) return result;
    else return {error: `Cannot find blog with id ${id}`, status: 404 };
}