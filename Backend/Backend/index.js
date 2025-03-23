const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");



const app = express();
app.use(cors());
app.use(express.json()); 

//connect to mongoose database
mongoose
    .connect('mongodb://127.0.0.1:27017/DeepFakeImage_FakeNews')
    .then(()=> console.log("Connection is succesful"))
    .catch((err)=> console.log(err));

  
const port = 8080;
app.listen(port , ()=>{
    console.log(`${port} port is started`);
    
})

app.get("/" , (req,res)=>{
    res.send("Backend API is working");
})


//register route 
const registerRoute = require("./routes/register");
app.use("/", registerRoute);

//login route
const loginRoute = require("./routes/login");
app.use("/" , loginRoute);