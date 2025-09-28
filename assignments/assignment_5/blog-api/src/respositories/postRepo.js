import { posts, getNextId } from '../db/posts.js';
import pool from "../db/db.js";

export async function getAll(query) {
  let text = `SELECT 
                p.id,
                p.title,
                p.content,
                p.created_at,
                c.name AS category
              FROM posts as p
              LEFT JOIN categories as c
              ON p.category_id = c.id
              ORDER BY p.created_at DESC`;
  const result = await pool.query(text);
  return result.rows;
}

export function getById(id) {
  let post = posts.find((b) => b.id === id);
  return post;
}

export function create(post) {
  let id = getNextId();
  const newPost = { id, ...post };
  posts.push(newPost);
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
