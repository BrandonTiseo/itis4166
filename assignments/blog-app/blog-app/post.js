// post.js
// This module handles blog post operations (add, list, view, update, delete)
import fs from 'fs/promises';
import path from 'path';

const postsPath =  path.join(import.meta.dirname,  'posts.json');
let nextID = 1;

export async function addPost(title, content) {
  // TODO: Implement logic to add a new post and save it
  let newPost = 
  {
    id: nextID,
    title: title,
    content: content
  };
  let oldPosts = []
  try{
    const postsData = await fs.readFile(postsPath, "utf-8");
    oldPosts = JSON.parse(postsData);
    oldPosts.push(newPost);
    await fs.writeFile(postsPath, JSON.stringify(oldPosts, null, 1));
  } catch(error){
    console.log(error);
  };
}

export function listPosts() {
  // TODO: Implement logic to return all posts
}

export function viewPost(id) {
  // TODO: Implement logic to find and return a post by ID
}

export function updatePost(id, newTitle, newContent) {
  // TODO: Implement logic to update a post
}

export function deletePost(id) {
  // TODO: Implement logic to delete a post
}
