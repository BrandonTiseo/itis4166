// post.js
// This module handles blog post operations (add, list, view, update, delete)
import fs from "fs/promises";
import path from "path";
import { format } from "date-fns"

const postsPath =  path.join(import.meta.dirname,  'posts.json');

export async function addPost(title, content) {
  let posts = []
  try {
    const postsData = await fs.readFile(postsPath, "utf-8");
    posts = JSON.parse(postsData); //Takes JSON string and converts into an array of JS objects.
  } catch (error) {
    console.log(error);
  };
  //Assign ID
  let nextID;
  if(posts.length == 0)
    nextID = 1;
  else
    nextID = posts[posts.length - 1].id + 1;

  //Create new post
  let newPost = {
    id: nextID,
    title: title,
    content: content,
    createdAt: format(new Date(), "yyyy-MM-dd h:mm aaa"),
  };
  posts.push(newPost);
  try {
    await fs.writeFile(postsPath, JSON.stringify(posts, null, 1));
  } catch (error) {
    console.log(error);
  };
}

export async function listPosts() {
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
