const mongoose = require('mongoose');
const { DB_NAME } = require('../constants');

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        
        // Log connection details after successful connection
        console.log(`MongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error('MONGODB CONNECTION ERROR:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
