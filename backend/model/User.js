// Import mongoose
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Removes whitespace from the beginning and end of the name
  },
  age: {
    type: Number,
    required: true,
    min: 18, // Minimum age
  },
  email: {
    type: String,
    required: true,
    unique: true, // Email should be unique
    trim: true,
    lowercase: true, // Store emails in lowercase for consistency
  },
});

// Create the User model
// now this model can be used for crud opeartion in the user collection
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
