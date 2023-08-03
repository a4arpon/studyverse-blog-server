const { ObjectId } = require('mongodb')
const { blogsCollection } = require('../../config/_mongoDB')
const error = require('../error')

module.exports = async (req, res) => {
  try {
    const postId = { _id: new ObjectId(req.params.blogID) }
    const data = req.body || {}
    const updateDoc = {
      $set: data,
    }
    const result = await blogsCollection.updateOne(postId, updateDoc)
    res.send({ success: true, msg: result })
  } catch (err) {
    res.send(error('Error while updating data on the server.'))
  }
}
