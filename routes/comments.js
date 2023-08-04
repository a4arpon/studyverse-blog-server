const express = require('express')
const addComments = require('../controllers/comments/addComments')
const getComments = require('../controllers/comments/getComments')
const commentsRouter = express.Router()

/*-----------____ Post Comment to Blog ____-----------*/
commentsRouter.post('/comments', addComments)

/*-----------____ Get All Comments ____-----------*/
commentsRouter.get('/comments/:blogID', getComments)

// Export Router
module.exports = commentsRouter
