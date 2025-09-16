import express from 'express';
import morgan from 'morgan';

import blogRoutes from './routes/blogRoutes.js';


const app = express();
const PORT = 3000;

app.use(morgan('tiny'));
app.use(express.json());
app.use('/api/blogs', blogRoutes);

app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    console.log(err.stack);
    if(!err.status){
        err.status = 500;
        err.message = 'Internal Server Error';
    }
    res.status(err.status).json({error: err.message});
});

app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));


