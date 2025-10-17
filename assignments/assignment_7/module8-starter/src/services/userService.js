import { findAllusers, getById, update, remove, findPosts } from "../respositories/userRepo.js";
import {Prisma} from '../generated/prisma/index.js';
import bcrypt from 'bcrypt';

export async function getAllUsers() {
    return await findAllusers();
}

export async function getUserById(id){
    let result = await getById(id);
    if(result) return result;
    else {
        const error = new Error(`Cannot find user with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function updateUser(id, data) {
    if(data.password){
        const hashedPassword= await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
    }
    try{
        const updatedUser = await update(id, data);
        return updatedUser;
    } catch (error){
        if(error instanceof Prisma.PrismaClientKnownRequestError){
            if(error.code = 'P2002'){
                const error = new Error('Email has already been used');
                error.status = 409;
                throw error;
            }
        }
        throw error;
    }
}

export async function deleteUser(id) {
  const result = await remove(id);
  if (result) return;
  else {
    const error = new Error(`Cannot find user with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function getUserPosts(id){
    return await findPosts(id);
}

export async function updateOtherUser(id, updates) {
    const updatedUser = await update(id, updates);
    if (updatedUser) return updatedUser;
    else {
        const error = new Error(`Cannot find user with id ${id}`);
        error.status = 404;
        throw error;
    }
}