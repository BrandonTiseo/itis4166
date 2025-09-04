import express from 'express';
import { join } from 'path';
import morgan from 'morgan'; //3rd party middleware - logger
const port = 8080;
const students = [
  { id: 1, name: 'Amy' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const app = express();
//middleware - order matters!
app.use(express.static('public'));  
app.use(express.json());
app.use(express.urlencoded({extended: false})); //if payload has nested structure set extended to true.
app.use(morgan('tiny')); //string defines how to format logs.

//custom middleware
function myMiddleware(req, res, next){
  console.log('This is my middleware function');
  next(); //makes sure we move onto next middleware.
}
//custom middleware using arrow function.
const logger = (req, res, next) =>{
  console.log(`${req.url} ${req.method}`);
  next();
}
app.use(myMiddleware);

app.get('/', (req, res) => {
  res.sendFile(join(import.meta.dirname, 'public', 'index.html'));
});

app.post('/', (req,res)=>{
  console.log(req.body);
  res.send();
});

app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/about-us', (req, res) => {
  res.redirect(301, '/about');
});

app.get('/students', (req, res) => {
  let limit = parseInt(req.query.limit);
  if (!isNaN(limit) && limit > 0) {
    res.json(students.slice(0, limit));
  } else {
    res.json(students);
  }
});

//adding middleware to a specific route!
app.get('/students/:id', logger, (req, res) => {
  let id = parseInt(req.params.id);
  let student = students.filter((student) => student.id === id);
  if (student.length) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'The student is not found' });
  }
});

app.listen(port, () => console.log(`The server is running on port ${port}`));
