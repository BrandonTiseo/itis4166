import { posts, getNextId } from '../db/posts.js';
import pool from "../db/db.js";

export async function getAll(filter) {
  let text = `SELECT 
                p.id,
                p.title,
                p.content,
                p.created_at,
                c.name AS category
              FROM posts as p
              LEFT JOIN categories as c
              ON p.category_id = c.id`;
              //ORDER BY p.created_at DESC`;
  const values = [];
  const conditions = [];
  if(filter.category_id) {
    values.push(filter.category_id);
    conditions.push(`p.category_id = $${values.length}`);
  }

  if(filter.search) {
    values.push(`%${filter.search}%`);
    conditions.push(`(p.title ILIKE $${values.length} OR p.content ILIKE $${values.length})`);
  }

  if(conditions.length > 0) {
    text += ' WHERE ' + conditions.join(' AND ');
  }

  text += ` ORDER BY p.created_at DESC`;
  const result = await pool.query(text, values);
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

export async function create(post) {
  const text = `INSERT INTO posts (title, content, category_id)
                VALUES ($1, $2, $3)
                RETURNING *`;
  const values = [post.title, post.content, post.category_id];
  const result = await pool.query(text, values);
  return result.rows[0];
}

export async function update(id, updates) {
  const text = `UPDATE posts
                SET
                  title = COALESCE($1, title),
                  content = COALESCE($2, content),
                  category_id = COALESCE($3, category_id)
                WHERE
                  id = $4
                RETURNING *`;
  const values = [updates.title, updates.content, updates.category_id, id];

  const result = await pool.query(text, values);
  return result.rows[0];
}

export async function remove(id) {
  const text = `DELETE FROM posts
                WHERE id = $1
                RETURNING *`;
  const values = [id];
  const result = await pool.query(text, values);
  return result.rows[0];
}
