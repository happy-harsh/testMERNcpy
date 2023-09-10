const express = require("express");
const router = express.Router();
const User = require("../model/User");

// defining apis
router.post("/api/createUser", async (req,res)=>{
    const {name, age, email} = req.body;

      // Create a new user document
    const newUser = new User({ name, age, email });

    await newUser.save().then((user)=>{
        res.status(200).send(user);
    }).catch((error)=>{
        res.status(500).send(error);
    })

})

// find() to get all the user details 
router.get("/api/getUser",async (req,res)=>{
    await User.find().then((allUser)=>{
        res.status(200).send(allUser);
    }).catch((error)=>{
        res.send(error);
    })
})







module.exports = router;