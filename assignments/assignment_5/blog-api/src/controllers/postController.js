import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../services/postService.js';

import { matchedData } from 'express-validator';

export async function getAllPostsHandler(req, res) {
  let query = matchedData(req);
  let posts = await getAllPosts(query);
  res.status(200).json(posts);
}

export async function getPostByIdHandler(req, res) {
  let id = parseInt(req.params.id);
  let post = await getPostById(id);
  res.status(200).json(post);
}

export async function createPostHandler(req, res) {
  let data = req.body;
  let newPost = await createPost(data);
  res.status(201).json(newPost);
}

export async function updatePostHandler(req, res) {
  let id = parseInt(req.params.id);
  let updates = req.body;
  const updatedPost = await updatePost(id, updates);
  res.status(200).json(updatedPost);
}

export async function deletePostHandler(req, res) {
  let id = parseInt(req.params.id);
  await deletePost(id);
  res.status(204).send();
}
