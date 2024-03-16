const mongoose = require('mongoose')
const databaseUrl = 'mongodb+srv://shally:SHALLY@cluster0.erq6fnh.mongodb.net/'
// process.env.DATABASE_URL 
module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
