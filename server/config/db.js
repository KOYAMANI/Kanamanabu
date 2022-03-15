const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URL

const connectDB = async () => {
   
    try {
        const connect = await mongoose.connect(
            connectionString,
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