import prisma from '../config/db.js';

export async function createUser(data) {
    return await prisma.user.create({data: data, omit: {password: true}});
}