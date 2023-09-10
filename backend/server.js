const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


require("dotenv").config()
const port =  process.env.PORT
const uri =  process.env.URI

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


const CreateGetUser = require("./routes/CreateGetUser");
app.use(CreateGetUser);

const DeleteUser = require("./routes/DeleteUser");
app.use(DeleteUser);

const updateUser = require("./routes/UpdateUser");
app.use(updateUser);

// const searchUser = require("./routes/Search");
// app.use(searchUser);




mongoose.connect(uri).then(()=>{
    console.log("Connected to Mongodb");
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });