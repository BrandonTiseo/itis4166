/*
//common js
//Specify install version: npm chalk@4.1.2
//chalk needs to be downgraded to an older version to be used with commonjs.
const chalk = require('chalk');

console.log(chalk.blue('Hello World'));
*/

//es modules
import chalk from 'chalk';
import {input, select} from '@inquirer/prompts';
console.log(chalk.blue('hello world'));

const name = await input({message: 'Enter your name:'});
const classification = await select({
    message: 'What is your class?',
    choices: [
        {name: 'Freshman', value: 'freshman', description:'First Year Student'},
        'sophomore',
        'junior',
        'senior']
});
//value is what is returned if provided.
console.log(`${name} is a ${classification}`);