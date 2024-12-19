const mongoose = require('mongoose');

// MongoDB connection URI (replace with your actual connection string)
const mongoURI = 'mongodb+srv://anandhu:appleorange@cluster0.fuapshf.mongodb.net/blogDB?retryWrites=true&w=majority&tls=true';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB();