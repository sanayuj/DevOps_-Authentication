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
      console.log("Inside try !!!!");
      
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


  module.exports.Login = async (req, res, next) => {
        console.log(req.body,"-------->");
  const { email, password } = req.body;

  try {

    console.log(email, "login email");
    console.log(password, "login password");

    const user = await userModel.findOne({ email });
if (!user) {
      return res.json({
        message: "Email not registered",
        status: false,
      });
    }
    if (user) {
      const matchPassword = await bcrypt.compare(password, user.password);

      if (matchPassword) {
        console.log("Pass Match!!!!");
        
        const token = createToken(user._id);

        return res.json({
          message: "Login successfully",
          user,
          status: true,
          token,
        });
      } else {
        return res.json({ message: "Invalid password", status: false });
      }
    } else {
      return res.json({ message: "User not found", status: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Internal server error in login",
      status: false,
    });
  }
};
