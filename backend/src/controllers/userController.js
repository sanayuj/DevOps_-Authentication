const { json, response } = require("express");
const userModel=require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken");
const maxAge=3 * 24 * 60 * 60;


const createToken = (id) => {
    return jwt.sign({ id }, "JWT", {
      expiresIn: maxAge,
    });
  };

   module.exports.Signup = async (req, res, next) => {
    console.log(req.body,"%%%%");
    
    const { name, email, password, confirmpassword } = req.body;
  
    try {
    
  
      const emailExists = await userModel.findOne({ email: email });
  
      if (emailExists) {
        console.log("already exists");
        return res.json({ message: "Email already exists", status: false });
      }
  
      const newUser = new userModel({
        name: name,
        email: email,
        password: password,
      });
      await newUser.save();
      const token = createToken(userModel._id);

      return res.json({ message: "Submited successfully", status: true, token });
    } catch (error) {
      console.log(error);
      return res.json({
        message: "Internal server error in sign up",
        status: false,
      });
    }
  };