//main file where all the api calls of '/api/v1' comes 
const express = require('express');
const { Accounts, User } = require('../db');
const { default: mongoose } = require('mongoose');
const { authMiddleware, inputValidation, account_body } = require('./middleware');

const account_router = express.Router();

account_router.get('/balance',authMiddleware,async (req,res)=>{
    const userId = req.userId;
    if(!userId) {
        return  res.status(411).json({});
    }
    const obj = await Accounts.findOne({userId:userId});
    console.log(obj);
    return res.status(200).json({
          userId:  userId,
            balance: obj.balance
    });
});


account_router.post('/transfer',authMiddleware,inputValidation(account_body), async (req,res)=>{
    const session =  await mongoose.startSession();

     session.startTransaction();
     const {to,amount} = req.body;
     console.log(to)
     console.log(req.userId)
     console.log(amount)
  
    if(req.userId === to){
        return res.status(403).json({
            message : "Can't send money to yourselves"
        });
    }
   
    const account = await Accounts.findOne({userId:req.userId}).session(session);
    if(!account || account.balance < amount){
         await session.abortTransaction();
         return res.status(400).json({
            message : "Insufficient Balance"
         });
    }
  
    const user = await User.findOne({_id : to}).session(session);
    if(!user){
        await session.abortTransaction();
        return res.status(400).json({
           message : "Invalid account"
        })
    }
    await Accounts.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Accounts.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
    
})

module.exports = account_router;
 