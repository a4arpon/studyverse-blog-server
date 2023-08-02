const express = require('express')
const app = express()
// const cors = require('cors')
require('dotenv').config()
const port = process.env.port || 5000
/*---------------------------------------------------
    Routes Imports
---------------------------------------------------*/
const blogsRouter = require('./routes/blogs')

/*---------------------------------------------------
  Express Middleware 
---------------------------------------------------*/
// app.use(cors())
app.use(express.json())

/*--------------- Blogs Route -------------------*/
app.use(blogsRouter)

app.get('/', (req, res) => {
  res.send('Server Running')
})

app.listen(port, () => {
  console.log(`Server is online.`)
})
