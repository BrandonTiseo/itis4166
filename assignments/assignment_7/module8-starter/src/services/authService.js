import bcrypt from 'bcrypt';
import {Prisma} from '../generated/prisma/index.js'; //where errors are defined
import { createUser } from '../respositories/userRepo.js';

export async function signUp(email, password){
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const newUser = await createUser({email, password: hashedPassword});
        return newUser;
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