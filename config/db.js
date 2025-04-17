const mongoose = require('mongoose');

//📌yaha se hm bhejenge apne connectDB function apne server.js file mein

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); 
    }
};

module.exports = connectDB;
