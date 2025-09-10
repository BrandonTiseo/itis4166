import express from 'express';

const router = express.Router();


router.get('/', (req, res)=>{
    res.status(200).json({msg: 'Sending all blogs'});
});

router.get('/:id', (req, res)=>{
    res.status(200).json({msg: `Sending blog with id ${req.params.id}`});
});

router.post('/', (req, res)=>{
    res.status(201).json({msg: 'Create a new blog'});
});

router.put('/:id', (req, res)=>{
    res.status(200).json({msg: `Updated blog with id ${req.params.id}`});
});

router.delete('/:id', (req, res)=>{
    res.status(204).json({msg: `Deleted blog with id ${req.params.id}`});
});

export default router;