import {
  getAll,
  getById,
  create,
  update,
  remove,
} from '../respositories/postRepo.js';
export async function getAllPosts(filter) {
  return await getAll(filter);
}

export async function getPostById(id) {
  let result = await getById(id);
  if (result) return result;
  else {
    const error = new Error(`Cannot find post with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function createPost(data) {
  return await create(data);
}

export async function updatePost(id, data) {
  const updatedPost = await update(id, data);
  if (updatedPost) return updatedPost;
  else {
    const error = new Error(`Cannot find post with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export function deletePost(id) {
  const result = remove(id);
  if (result) return;
  else {
    const error = new Error(`Cannot find post with id ${id}`);
    error.status = 404;
    throw error;
  }
}
