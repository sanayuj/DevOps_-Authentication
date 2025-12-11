const express = require("express");
const router = express.Router();


const userAuth =require("../middleware/authMiddleware.js")
const {login} = require("../controllers/userController.js");
const {Signup} = require("../controllers/userController.js");

  router.post("/Signup",Signup);

module.exports = router;