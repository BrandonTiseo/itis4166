import { posts, getNextId } from '../db/posts.js';
import prisma from '../config/db.js';

export async function getAll(filter) {
  const conditions = {};
  if(filter.categoryId){
    conditions.categoryId = {equals: filter.categoryId}
  }

  if(filter.search){
    conditions.OR = [
      {title: {contains: filter.search, mode: 'insensitive'}},
      {content: {contains: filter.search, mode: 'insensitive'}},
    ];
  }
  const posts = await prisma.post.findMany({
    where: conditions,
    select: {
      title: true,
      id: true,
      content: true,
      createdAt: true,
      category: true,
    },
    orderBy: {[filter.sortBy]: filter.sortOrder},
    take: filter.limit,
    skip: filter.offset,
  });
  return posts;
}

export async function getById(id) {
  const post = await prisma.post.findUnique({
    where: { id },
    select: {
      title: true,
      id: true,
      content: true,
      createdAt: true,
      category: true,
    }
  });
  return post;
}

export async function create(post) {
  const newPost = await prisma.post.create({
    data: post,
    include: {category: true},
  })
  return newPost;
}

export function update(id, updates) {
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    const updatedPost = {
      ...posts[index],
      ...updates,
    };
    posts[index] = updatedPost;
    return posts[index];
  } else {
    return null;
  }
}

export function remove(id) {
  const index = posts.findIndex((post) => post.id === id);
  if (index !== -1) {
    posts.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
