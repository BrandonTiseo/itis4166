// post.js
// This module handles blog post operations (add, list, view, update, delete)
import fs from "fs/promises";
import path from "path";
import { format } from "date-fns";
import chalk from "chalk";

const postsPath = path.join(import.meta.dirname, "posts.json");

export async function addPost(title, content) {
  let posts = [];
  try {
    const postsData = await fs.readFile(postsPath, "utf-8");
    posts = JSON.parse(postsData);
  } catch (error) {
    console.log(error);
  }

  let nextID;
  if (posts.length == 0) nextID = 1;
  else nextID = posts[posts.length - 1].id + 1;


  let newPost = {
    id: nextID,
    title: title,
    content: content,
    createdAt: format(new Date(), "yyyy-MM-dd h:mm aaa"),
  };
  posts.push(newPost);
  try {
    await fs.writeFile(postsPath, JSON.stringify(posts, null, 1));
    console.log(chalk.green("Post added\n"));
  } catch (error) {
    console.log(error);
  }
}

export async function listPosts() {
  let posts = [];
  try {
    const postsData = await fs.readFile(postsPath, "utf-8");
    posts = JSON.parse(postsData); //Takes JSON string and converts into an array of JS objects.
  } catch (error) {
    console.log(error);
  }
  console.log(chalk.blue("Your Posts:"));
  posts.forEach((post) => console.log(`${post.id}. ${post.title}`));
  console.log("\n");
}

export async function viewPost(id) {
  let posts = [];
  try {
    const postsData = await fs.readFile(postsPath, "utf-8");
    posts = JSON.parse(postsData); 
  } catch (error) {
    console.log(error);
  }

  let post = posts.find((post) => post.id == id);

  if (post != undefined)
    console.log(
      chalk.yellow(`\n${post.title}\n${post.createdAt}\n${post.content}\n`),
    );
  else console.log(chalk.red("Post not found.\n"));
}

export async function updatePost(id, newTitle, newContent) {
  let posts = [];
  try {
    const postsData = await fs.readFile(postsPath, "utf-8");
    posts = JSON.parse(postsData); 
  } catch (error) {
    console.log(error);
  }

  let index = posts.findIndex((post) => post.id == id);
  if (index != -1) {
    if (newTitle != "") posts[index].title = newTitle;
    if (newContent != "") posts[index].content = newContent;

    try {
      await fs.writeFile(postsPath, JSON.stringify(posts, null, 1));
    } catch (error) {
      console.log(error);
    }
    console.log(chalk.green("Post updated.\n"));
  } else {
    console.log(chalk.red("Post not found.\n"));
  }
}

export async function deletePost(id) {
  let posts = [];
  try {
    const postsData = await fs.readFile(postsPath, "utf-8");
    posts = JSON.parse(postsData);
  } catch (error) {
    console.log(error);
  }

  let index = posts.findIndex((post) => post.id == id);
  if (index != -1) {
    posts.splice(index, 1);
    try {
      await fs.writeFile(postsPath, JSON.stringify(posts, null, 1));
      console.log(chalk.green("Post deleted."));
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log(chalk.red("Post not found.\n"));
  }
}
