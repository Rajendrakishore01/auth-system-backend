const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://rajendra:0128@cluster0.j6imwgh.mongodb.net/?appName=Cluster0")
.then(()=>console.log("Database connected"))
.catch(err=>console.log(err));

const userSchema = new mongoose.Schema({
  name:String,
  email:{type:String,unique:true},
  password:String
});
const User = mongoose.model("User",userSchema);


app.post("/register", async(req,res)=>{
  try{
    const {name,email,password}=req.body;

    const existing = await User.findOne({email});
    if(existing) return res.send("User already exists");

    const hash = await bcrypt.hash(password,10);
    const user = new User({name,email,password:hash});
    await user.save();

    res.send("User registered");
  }catch(err){
    console.log(err);
    res.send("Register error");
  }
});


app.post("/login", async(req,res)=>{
  try{
    const {email,password}=req.body;

    const user = await User.findOne({email});
    if(!user) return res.send("No user found");

    const valid = await bcrypt.compare(password,user.password);
    if(!valid) return res.send("Wrong password");

   
    const token = jwt.sign({id:user._id},"mysecret123",{expiresIn:"1d"});

    res.json({token});
  }catch(err){
    console.log(err);
    res.send("Login error");
  }
});


app.get("/dashboard",(req,res)=>{
  try{
    const authHeader = req.headers.authorization;

    if(!authHeader){
      return res.send("No token provided");
    }

    const token = authHeader.split(" ")[1];

    if(!token){
      return res.send("Token missing");
    }

    const verified = jwt.verify(token,"mysecret123");

    res.send("Welcome to dashboard ");
  }
  catch(err){
    console.log(err);
    res.send("Invalid token");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));