import express from 'express';
import morgan from 'morgan';


const app = express();
const PORT = 3000;

app.use(morgan('tiny'));
app.use(express.json());


app.get('/api/blogs', (req, res)=>{
    res.status(200).json({msg: 'Sending all blogs'});
});

app.get('/api/blogs/:id', (req, res)=>{
    res.status(200).json({msg: `Sending blog with id ${req.params.id}`});
});

app.post('/api/blogs', (req, res)=>{
    res.status(201).json({msg: 'Create a new blog'});
});

app.put('/api/blogs/:id', (req, res)=>{
    res.status(200).json({msg: `Updated blog with id ${req.params.id}`});
});

app.delete('/api/blogs/:id', (req, res)=>{
    res.status(204).json({msg: `Deleted blog with id ${req.params.id}`});
});

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));


