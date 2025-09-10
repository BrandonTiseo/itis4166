export function getAllBlogsHandler(req, res){
    res.status(200).json({msg: 'Sending all blogs'});
}


export function getBlogByIDHandler(req, res){
    res.status(200).json({msg: `Sending blog with id ${req.params.id}`});
}


export function createBlogHandler(req, res){
    res.status(201).json({msg: 'Create a new blog'});
}


export function updateBlogHandler(req, res){
    res.status(200).json({msg: `Updated blog with id ${req.params.id}`});
}

export function deleteBlogHandler(req, res){
    res.status(204).json({msg: `Deleted blog with id ${req.params.id}`});
}
