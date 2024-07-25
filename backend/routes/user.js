const express = require('express');
const jwt = require("jsonwebtoken");
const zod = require('zod');
const {JWT_SECRET} = require('../config')
const {User, Accounts} = require('../db');
const { authMiddleware } = require('./middleware');
const {User_auth} = require("./middleware");
const {signin_user} = require("./middleware");
const {inputValidation} = require("./middleware");
const {update_user} = require("./middleware");
const rootRouter = express.Router();


//put request to update user credentials 
 rootRouter.put('/update',authMiddleware,inputValidation(update_user),async (req,res)=>{
       const userId = req.userId;
       const updateUser = await User.updateOne({_id : userId},req.body);
     return   res.status(200).json({
        message: "Updated successfully"
    })
 })





//post request for user signup 
 rootRouter.post('/signup',inputValidation(User_auth),async (req,res)=>{
    const success = await User.findOne({username: req.body.username});
    if(success){
        return res.status(411).json({
            message : "Email Already Taken"
        });
    }
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const rndInt = Math.floor(Math.random() * 10000) + 1
    const userId = user._id;
    const user_account = await Accounts.create({
        userId: userId,
        balance:  rndInt
    })

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    return res.json({
        message: "User created successfully",
        token: token
    })

})



//post request for user signin 
rootRouter.post('/signin',inputValidation(signin_user),async (req,res)=>{
    console.log(req.body);
    const  user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    if(!user){
       return res.status(403).json({
        message: "User does not exist"
       })
    }

    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET);

    res.json({
        token: token
    })
    return;

    

})

//post request for user signin 
rootRouter.get('/bulk',async (req,res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })
    if(!users){
       return res.status(403).json({
        message: "User does not exist"
       })
    }

    res.status(200).json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
    

})
 

module.exports = rootRouter;