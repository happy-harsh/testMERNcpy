const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.put('/api/updateUser/:id', async (req, res) => {
    try {
      const {id} = req.params;
      const data = req.body;
      const updatedUser = await User.findByIdAndUpdate(id,data,{ new: true });
  
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // User was updated successfully
      res.status(200).send(updatedUser);
    } catch (error) {
      // Handle errors
    }
  });

module.exports = router;