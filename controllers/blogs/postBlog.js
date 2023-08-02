const { blogsCollection } = require('../../config/_mongoDB')

module.exports = async (req, res) => {
  const data = req.body || {}
  const result = await blogsCollection.insertOne(data)
  res.send({ success: true, msg: result })
}
