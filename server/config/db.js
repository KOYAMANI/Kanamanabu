const mongoose = require('mongoose');

const connectDB = async () => {
   
    try {
        const connect = await mongoose.connect(
            process.env.MONGO_URL_DOCKER,
            {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
       
        console.log(`MongoDB connected: ${connect.connection.host}`)
    } catch (error){
        console.log(`Error: ${error}`)

        process.exit();
    }

}


module.exports = connectDB;