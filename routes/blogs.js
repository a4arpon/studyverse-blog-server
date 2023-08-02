const express = require('express')
const blogsRouter = express.Router()
const getBlog = require('../controllers/blogs/getBlog')
const getBlogs = require('../controllers/blogs/getBlogs')
const myBlogs = require('../controllers/blogs/myBlogs')
const postBlog = require('../controllers/blogs/postBlog')

/*-----------____ Add Blogs ____-----------*/
blogsRouter.post('/blogs', postBlog)

/*-----------____ Get All Blogs ____-----------*/
blogsRouter.get('/blogs', getBlogs)

/*-----------____ Get Single Blog ____-----------*/
blogsRouter.get('/blogs/:blogID', getBlog)

/*-----------____ My Blogs ____-----------*/
blogsRouter.get('/blogs/my-blogs/:postedBy', myBlogs)

// Export Router
module.exports = blogsRouter
