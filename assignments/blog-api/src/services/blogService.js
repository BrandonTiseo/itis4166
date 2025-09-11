import { getAll } from '../repositories/blogRepo.js';
//Handles business logic.
export function getAllBlogs(query){
    return getAll(query); 
}