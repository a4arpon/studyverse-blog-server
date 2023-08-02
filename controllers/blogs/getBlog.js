const { ObjectId } = require('mongodb')
const { blogsCollection } = require('../../config/_mongoDB')
const error = require('../error')

// Get specified blog from database.
module.exports = async (req, res) => {
  try {
    const blogID = req?.params?.blogID
    const query = {
      _id: new ObjectId(blogID),
    }
    const result = await blogsCollection.findOne(query)
    res.send(result)
  } catch (err) {
    // Error handler if server falls while doing this operation.
    res.send(error('Unexpected error occurs while getting blog from server.'))
  }
}
