//node --watch server.js means the server will restart everytime we make changes. use npm run dev to run script set for this.

import http from 'http';
import fs from 'fs/promises';
import {join} from 'path';

const port = 8080; //use a port that isnt used already.
const filePath = join(import.meta.dirname, 'public', 'index.html');

//callback function called everytime we get a request from the client side.
const server = http.createServer( async (req, res)=>{
    console.log(req.method);
    console.log(req.url);
    /*
    //res.statusCode = 200;
    //res.setHeader('Content-Type','text/plain');
    res.writeHead(200, {'Content-Type': 'text/html'}); //combines above two lines. Second param defines what we send in write.
    res.write('<h1>Hello world</h1>'); //can do multiple .write lines.
    res.end(); //ends response and sends above data to client.
    */

    //send html document.
    try{
        const data = await fs.readFile(filePath);
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    } catch(error){
        console.log(error);
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>Not FOund</h1>');
    }
});

server.listen(port, ()=>console.log(`The server is running on port ${port}`) ) 
//binds server to port. Hostname can be omitted if you are going to use  localhost. callback function is called when server runs successfully.
//to run do http://localhost:8080/ in browser