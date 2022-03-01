const mongoose = require('mongoose');
const logger = require('../logger')

const connectDB = async () => {
    logger.info(`process.env: ${process.env.MONGO_URL}`)
   
    try {
        const connect = await mongoose.connect(
            process.env.MONGO_URL,         
            {
            useUnifiedTopology: true,
            useNewUrlParser: true,

        });
       
        logger.info(`MongoDB connected: ${connect.connection.host}`)
    } catch (error){
        logger.error(`Error: ${error}`)

        process.exit();
    }

}


module.exports = connectDB;