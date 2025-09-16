import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog} from '../services/blogService.js';
import { matchedData } from 'express-validator';

//Handles requests and response.
export function getAllBlogsHandler(req, res){
    let query = matchedData(req);
    console.log(req.query);
    console.log(query);
    let result =  getAllBlogs(query);
    res.status(200).json(result);
}

export function getBlogByIDHandler(req, res){
    let id = parseInt(req.params.id);
    let blog = getBlogById(id);
    res.status(200).json(blog);
}

export function createBlogHandler(req, res){
    let data = req.body;
    let newBlog = createBlog(data);
    res.status(201).json(newBlog);
}

export function updateBlogHandler(req, res){
    let id = parseInt(req.params.id);
    let updates = req.body;
    const updatedBlog = updateBlog(id, updates);
    res.status(200).json(updatedBlog);
}

export function deleteBlogHandler(req, res){
    let id = parseInt(req.params.id);
    const result = deleteBlog(id);
    res.status(204).send();
}
