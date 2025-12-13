const express = require("express");
const router = express.Router();


const userAuth =require("../middleware/authMiddleware.js")
const {Login} = require("../controllers/userController.js");
const {Signup} = require("../controllers/userController.js");

  router.post("/signup",Signup);
  router.post("/login",Login);

module.exports = router;