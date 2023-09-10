const express = require("express");
const router = express.Router();
const User = require("../model/User");


router.get('/api/search', async (req, res) => {
    const { query } = req.query; // Get the search query from the request URL query parameters
    
    try {
      const users = await User.find({ username: { $regex: query, $options: 'i' } }); // Case-insensitive search
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;