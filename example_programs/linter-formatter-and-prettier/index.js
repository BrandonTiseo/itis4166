const book = {
  title: "Animal Farm",
  published: 1949,
  author: { firstName: "George", lastName: "Orwell" },
  genres: ["classic", "fiction", "fantasy"],
};
/**
eslint index.js = run lint
vscode extension shows error on the editor bar.
overwrite errors in eslint.config.mjs
add rule: 
    rules: {
    "no-unused-vars": 'off
    }
*/

/*
prettier is a code formatter.
ESlint and prettier are both formatters so conflicts can occur. To fix this we install eslint-config-prettier

-Turns off conflicting rules in ESlint.

To run: npx prettier --check index.js
*/
