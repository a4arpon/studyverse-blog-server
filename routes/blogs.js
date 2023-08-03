const express = require('express')
const deleteBlog = require('../controllers/blogs/deleteBlog')
const blogsRouter = express.Router()
const getBlog = require('../controllers/blogs/getBlog')
const getBlogs = require('../controllers/blogs/getBlogs')
const myBlogs = require('../controllers/blogs/myBlogs')
const postBlog = require('../controllers/blogs/postBlog')
const updateBlog = require('../controllers/blogs/updateBlog')

/*-----------____ Add Blog ____-----------*/
blogsRouter.post('/blogs', postBlog)

/*-----------____ Update Blog ____-----------*/
blogsRouter.put('/blogs/:blogID', updateBlog)

/*-----------____ Delete Blog ____-----------*/
blogsRouter.delete('/blogs/:blogID', deleteBlog)

/*-----------____ Get All Blogs ____-----------*/
blogsRouter.get('/blogs', getBlogs)

/*-----------____ Get Single Blog ____-----------*/
blogsRouter.get('/blogs/:blogID', getBlog)

/*-----------____ My Blogs ____-----------*/
blogsRouter.get('/blogs/my-blogs/:postedBy', myBlogs)

// Export Router
module.exports = blogsRouter
