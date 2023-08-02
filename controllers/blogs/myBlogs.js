const { blogsCollection } = require('../../config/_mongoDB')
const error = require('../error')

// Get specified users blog from database.
module.exports = async (req, res) => {
  try {
    const postedBy = req?.params?.postedBy
    const query = {
      authorEmail: postedBy,
    }
    const result = await blogsCollection.find(query).toArray()
    res.send(result)
  } catch (err) {
    // Error handler if server falls while doing this operation.
    res.send(error('Unexpected error occurs while getting blog from server.'))
  }
}
