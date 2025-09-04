import express from 'express';
import { join } from 'path';

const port = 8080;
const students = [
    {id: 1, name:"amy"},
    {id: 2, name:"brandon"},
{id: 3, name:"charlie"}
];

const app = express();


app.get('/',(req, res)=>{
    res.sendFile(join(import.meta.dirname, 'public', 'index.html')); //can use express or nodejs request method.

});

app.get('/about', (req,res)=>{
    res.send('About us');
});

app.get('/about-us', (req, res) => {
    res.redirect(301,'/about') //if you cant handle the url then redirect to another.
});

app.get('/students', (req, res)=>{
    console.log(req.query) //query string is modifiers you can add to the url. such as ?limit=1 added to end of the url. Another ex: ?major=cs
    //try: http://localhost:8080/students?limit=1
    let limit =parseInt(req.query.limit);
    if(!isNaN(limit) && limit > 0){
        res.json(students.slice(0, limit));
    } else{
        res.json(students);
    }
});

//route parameter example: http://localhost:8080/students/1
//id is the key of the route parameter.
app.get('/students/:id', (req,res)=>{
    console.log(req.params);
    let id = parseInt(req.params.id);
    let student = students.filter(student=> student.id === id);
    if(student.length){
     res.json(student);
    } else{
        res.status(404).json({message: 'The student is not found.'})
    }
});

app.listen(port, ()=>console.log(`The server is running on port ${port}`));