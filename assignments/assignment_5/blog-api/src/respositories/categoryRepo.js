import { categories, getNextId } from '../db/categories.js';
import pool from '../db/db.js';

export async function getAll(filter) {
  let text = `SELECT
                c.id,
                c.name
              FROM categories as c`
  const values = [];
  const conditions = [];
  if(filter.search) {
    values.push(`%${filter.search}%`);
    conditions.push(`c.name ILIKE $${values.length}`);
  }

  if(conditions.length > 0) {
    text += ' WHERE ' + conditions.join(' AND ');
  }

  text += ` ORDER BY c.id ASC`;

  if(filter.limit){
    values.push(filter.limit);
    text += ` LIMIT $${values.length}`;
  }

  if(filter.offset){
    values.push(filter.offset);
    text += ` OFFSET $${values.length}`;
  }

  const result = await pool.query(text, values);
  return result.rows;
}

export async function getById(id) {
  let text = `SELECT
                c.id,
                c.name
              FROM categories as c
              WHERE c.id = $1`
  const values = [id];
  const result = await pool.query(text, values);
  return result.rows[0];
}

export async function create(category) {
  const text = `INSERT INTO categories (name)
                VALUES ($1)
                RETURNING *`;
  const values = [category.name];
  const result = await pool.query(text, values);
  return result.rows[0];
}

export async function update(id, updates) {
  const text = `UPDATE categories
                SET
                  name = $1
                WHERE
                  id = $2
                RETURNING *`;
  const values = [updates.name, id];
  const result = await pool.query(text, values);
  return result.rows[0];

}

export async function remove(id) {
  const text = `DELETE FROM categories
                WHERE id = $1
                RETURNING *`;
  const values = [id];
  const result = await pool.query(text, values);
  return result.rows[0];
}

export async function exists(id) {
  const text = `SELECT 1
                FROM categories
                WHERE id = $1`;
  const values = [id];

  const result = await pool.query(text, values);
  return result.rowCount > 0;
}

export async function nameExists(name) {
  const text = `SELECT 1
                FROM categories
                WHERE name = $1`;
  const values = [name];

  const result = await pool.query(text, values);
  return result.rowCount > 0;
}