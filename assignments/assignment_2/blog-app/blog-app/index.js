//Main CLI program for the blogging app
import chalk from "chalk";
import { input, checkbox, select } from "@inquirer/prompts";
import * as blog from "./post.js";

while (true) {
  let id = -1;
  let action = await select({
    message: "What do you want to do?",
    choices: [
      "Add Post",
      "List Posts",
      "View Post",
      "Update Post",
      "Delete Post",
      "Exit",
    ],
  });

  switch (action) {
    case "Add Post":
      //Add a new post
      const title = await input({ message: "Post title:" });
      const content = await input({ message: "Post content:" });
      await blog.addPost(title, content);
      break;

    case "List Posts":
      //List all posts
      await blog.listPosts();
      break;

    case "View Post":
      //View a specific post
      id = await input({ message: "Post id:" });
      await blog.viewPost(id);
      break;

    case "Update Post":
      //Update a specific post
      id = await input({ message: "Post id:" });
      const answer = await checkbox({
        message: "What do you want to update?",
        choices: [
          { name: "title", value: "title" },
          { name: "content", value: "content" },
        ],
      });
      let newTitle = "";
      let newContent = "";
      if (answer.includes("title"))
        newTitle = await input({ message: "New Post Title:" });
      if (answer.includes("content"))
        newContent = await input({ message: "New Post Content:" });
      await blog.updatePost(id, newTitle, newContent);
      break;

    case "Delete Post":
      //Delete a specific post
      id = await input({ message: "Post id:" });
      await blog.deletePost(id);
      break;

    case "Exit": {
      console.log(chalk.cyan("Goodbye!"));
      process.exit(0);
    }
  }
}
