const mongoose = require ('mongoose');
const dotenv = require('dotenv');

const connectToMongoDb = async () => {
    try{
        mongoose.set('strictQuery', false); 
        await moongoose.connect(process.env.MONGODB_URI)
        console.log("MONGODB CONNECTED");
    } catch (error) {
      console.log(error);
    }
  };
  module.exports = connectToMongoDb;