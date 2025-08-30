/*es module is more standard and has better compatibility than module commonjs.

To switch to es add 'type':'module' to the json file.

CANT USE REQUIRE SYNTAX, USE IMPORT SYNTAX
*/
import fs from 'fs/promises';
import path from'path';

import {greet, farewell} from './utils.js' //NEEDS EXTENSION
/*
const filePath = path.join(import.meta.dirname,  'messages.txt');
const newFilePath = path.join(import.meta.dirname, 'messagesCopy.txt');
 
//es allows us to use await at the top level (not within a function)
try {
    const data = await fs.readFile(filePath, 'utf8');
    await fs.writeFile(newFilePath, data);
    await fs.appendFile(newFilePath, '\n\nThis is a copy of messages.txt');
} catch(error) {
    console.log(error);
}
*/
greet('Alice');
farewell('Alice');

