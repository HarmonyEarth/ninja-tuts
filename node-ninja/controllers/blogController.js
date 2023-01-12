const Blog = require('../models/blog');
const path = require('path');


const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
};

const blog_details = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
        .then(result => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
};

const blog_create_get = (req,res) => {
    let reqPath = path.join(__dirname, '../');
    // console.log(reqPath);
    res.sendFile('./create.html', { root: reqPath });
};

const blog_post = (req, res) => {
    const blog = new Blog(req.body);
    let reqPath = path.join(__dirname, '../');

    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            res.sendFile('./Denziman/404/html,', { root: reqPath });
        });
};

const blog_create_post = (req, res) => {
    try {
        const data = req.body;
        // check if JSON is complete
        if(!data.title) throw new Error('Missing title'); ///return res.status(500).json({message: 'Blog missing title'});
        if(!data.image) throw new Error('Missing image'); //return res.status(500).json({message: 'Blog missing image'}); 
        if(!data.content) throw new Error('Missing content'); //return res.status(500).json({message: 'Blog missing content'}); 
        // store data in mongonDB
        // Success message
        res.status(200).json({message: 'succcess'});
    } catch (error) {
        res.status(500).json(error); // OR use error.message
    }
};
 
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_post,
    blog_create_post
};