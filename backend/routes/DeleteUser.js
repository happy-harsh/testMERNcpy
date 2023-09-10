const express = require("express");
const router = express.Router();
const User = require("../model/User");


// router.delete("/api/deleteUser/:userId",async (req,res)=>{
//   const user = req.params.userId;
//     await User.findByIdAndRemove(user).then((res)=>{
//         // if (!res.data) {
//         //     return res.status(404).json({ error: 'User not found' });
//         //   }
//         res.status(200).send(res.data);
//     }).catch((error)=>{
//         res.status(500).send(error);
//     })
// })

router.delete('/api/deleteUser/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const deletedUser = await User.findByIdAndDelete(userId);
  
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // User was deleted successfully
      res.status(200).send(deletedUser);
    } catch (error) {
      // Handle errors
    }
  });
  




module.exports = router;