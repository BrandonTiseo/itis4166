import bcrypt from 'bcrypt';
import { createUser } from '../respositories/userRepo.js';

export async function signUp(email, password){
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser({email, password: hashedPassword});
    return newUser;
}