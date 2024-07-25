//main file where all the api calls of '/api/v1' comes 
const express = require('express');

//userRouter from user.js
const userRouter = require("./user");
const  account_router = require("./account");

const router = express.Router();
//Route all '/api/v1/user' request to userRouter 
router.use("/user", userRouter)
router.use("/account", account_router)

module.exports = router;
