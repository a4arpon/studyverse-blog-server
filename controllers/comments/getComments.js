const { commentsCollection } = require('../../config/_mongoDB')
const error = require('../error')

module.exports = async (req, res) => {
  try {
    const query = {
      blogID: req?.params?.blogID,
    }
    const result = await commentsCollection.find(query).toArray()
    res.send(result)
  } catch (err) {
    // Error handler if server falls while doing this operation.
    res.send(error('Unexpected error occurs while getting blogs from server.'))
  }
}
