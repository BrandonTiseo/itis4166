import { categories, getNextId } from '../db/categories.js';
//This layer works with the database directly.

export function getAll(query) {
    let result = [...categories];
    if(query.name){
        result = result.filter(category=>category.name.toLowerCase().includes(query.name));
    }
    return result;
}

export function getById(id) {
    let category = categories.find(c => c.id === id);
    return category;
}

export function create(category){
    let id = getNextId();
    const newCategory = { id, ...category};
    categories.push(newCategory);
    return newCategory;
}

export function update(id, updates){
    const index = categories.findIndex(category=>category.id === id);
    if(index !== -1){
        const updatedCategory = {
            ...categories[index], 
            ...updates, 
        };
        categories[index] = updatedCategory;
        return categories[index];
    } else {
        return null;
    }
}

export function remove(id){
    let index = categories.findIndex(c => c.id === id);
    if(index !== -1){
        categories.splice(index, 1);
        return true;
    } else {
        return false;
    }
}