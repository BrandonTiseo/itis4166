import { getAll, getById, create, update, remove } from '../repositories/categoryRepo.js';

export function getAllCategories(query){
    return getAll(query); 
}

export function getCategoryById(id){
    let result = getById(id);
    if(result) return result;
    else {
        const error = new Error(`Cannot find category with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export function createCategory(data){
    let category = {
        name: data.name
    };
    return create(category);
}

export function updateCategory(id, data){
    if(!data || (!data.name)){
        const error = new Error(`No updateable fields provided`);
        error.status = 400;
        throw error;
    }
    const updatedCategory = update(id, data);
    if(updatedCategory) return updatedCategory;
    else {
        const error = new Error(`Cannot find category with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export function deleteCategory(id) {
    const result = remove(id);
    if(result) return;
    else {
        const error = new Error(`Cannot find category with id ${id}`);
        error.status = 404;
        throw error;
    }
}