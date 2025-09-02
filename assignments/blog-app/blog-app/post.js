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
  let posts = [];
  try{
    const postsData = await fs.readFile(postsPath, "utf-8");
    posts = JSON.parse(postsData); //Takes JSON string and converts into an array of JS objects.
  } catch(error){
    console.log(error);
  };

  posts.forEach(post => console.log(`${post.id}. ${post.title}`));
}

export async function viewPost(id) {
  let posts = [];
  try{
    const postsData = await fs.readFile(postsPath, "utf-8");
    posts = JSON.parse(postsData); //Takes JSON string and converts into an array of JS objects.
  } catch(error){
    console.log(error);
  };
  let post = posts.find(post => post.id == id);
  console.log(`\n${post.title}\n${post.createdAt}\n${post.content}\n`);
}

export async function updatePost(id, newTitle, newContent){
  let posts = [];
  try{
    const postsData = await fs.readFile(postsPath, "utf-8");
    posts = JSON.parse(postsData); //Takes JSON string and converts into an array of JS objects.
  } catch(error){
    console.log(error);
  };

  let post = posts.find(post => post.id == id);
  if(newTitle != "")
    post.title = newTitle;
  if(newContent != "")
    post.content = newContent;
}

export function deletePost(id) {
  // TODO: Implement logic to delete a post
}
