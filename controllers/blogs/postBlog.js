const { blogsCollection } = require('../../config/_mongoDB')
const error = require('../error')

module.exports = async (req, res) => {
  try {
    const data = req.body || {}
    const result = await blogsCollection.insertOne(data)
    res.send({ success: true, msg: result })
  } catch (err) {
    res.send(error('Error while adding data on server.'))
  }
}
