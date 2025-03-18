const mongoose = require('mongoose')
require('dotenv').config()


const connectDB =async ()=>{
    try {
       
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.ex6qc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)

        console.log("mongodb connect successfuly")
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure   
    }
}

module.exports = connectDB