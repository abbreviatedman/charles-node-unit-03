const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();

const connectToMongoDb =  async function () {
    mongoose.set('strictQuery', false);
    try{
        await mongoose.connect(processs.env.MONGODB_URI);
        console.log("connected to the MongoDB Atlas cluster");
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectToMongoDb;
