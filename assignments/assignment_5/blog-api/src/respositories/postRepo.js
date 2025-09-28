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

export async function getById(id) {
  const text = `SELECT 
                p.id,
                p.title,
                p.content,
                p.created_at,
                c.name AS category
              FROM posts as p
              LEFT JOIN categories as c
              ON p.category_id = c.id
              WHERE p.id = $1`;
  const values = [id];
  const result = await pool.query(text, values);
  return result.rows[0];
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
