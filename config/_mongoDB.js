const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017'
const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})
const database = mongoClient.db('studyverse')
const blogsCollection = database.collection('blogsCollection')
const commentsCollection = database.collection('commentsCollection')
module.exports = { blogsCollection, commentsCollection }
