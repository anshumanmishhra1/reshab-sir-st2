const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config(); // Load environment variables

connectDB(); // Connect to MongoDB

const app = express();

// Middlewares
app.use(express.json()); // To parse JSON bodies

// 📌yaha hm routes ko manga rahe hai
app.use('/contacts', contactRoutes);


app.get('/', (req, res) => {
    res.send('API is running...');
});

//📌 Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
