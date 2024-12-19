const mongoose = require('mongoose');

// Define a schema for the User model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
}, {
    timestamps: true, // This will add createdAt and updatedAt timestamps

});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
