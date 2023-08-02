const { blogsCollection } = require('../../config/_mongoDB')
const error = require('../error')

// Get all blogs from database.
module.exports = async (req, res) => {
  try {
    const result = await blogsCollection.find().toArray()
    res.send(result)
  } catch (err) {
    // Error handler if server falls while doing this operation.
    res.send(error('Unexpected error occurs while getting blogs from server.'))
  }
}
