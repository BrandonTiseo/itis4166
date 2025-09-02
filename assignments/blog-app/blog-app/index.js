//Main CLI program for the blogging app
import chalk from "chalk";
import { select } from "@inquirer/prompts";
import { addPost } from "./post.js";
while (true) {
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
      addPost("foo", "bar");
      break;

    case "List Posts":
      //List all posts
      break;

    case "View Post":
      //View a specific post
      break;

    case "Update Post":
      //Update a specific post
      break;

    case "Delete Post":
      //Delete a specific post
      break;

    case "Exit": {
      console.log(chalk.cyan("Goodbye!"));
      process.exit(0);
    }
  }
}
