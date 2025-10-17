import { findAllusers } from "../respositories/userRepo.js"

export async function getAllUsers() {
    return await findAllusers();
}