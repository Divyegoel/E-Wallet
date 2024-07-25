const { JWT_SECRET } = require("../config");
const zod = require("zod");
const jwt = require("jsonwebtoken");

//using Zod library to verify input format by creating a zod object
const User_auth = zod.object({
    username : zod.string().trim().email(),
    password : zod.string().trim().min(6).max(30),
    firstName : zod.string().trim().min(3).max(50),
    lastName : zod.string().trim().min(3).max(50),
})

//Creating a partial user zod object for verifying input format for signin requests
const signin_user = User_auth.partial({
    firstName: true,
    lastName: true
})
const account_body = zod.object({
    amount : zod.number().positive().safe().finite(),
    to : zod.string()
})
const update_user = User_auth.partial();


// middleware for input validation using previously created zod object
function inputValidation(Auth){
    return (req,res,next)=>{
    const obj = req.body;
    console.log(obj);
   const result = Auth.safeParse(obj);
   console.log(result)
   if(!result.success){
   return  res.status(411).json({
       message : "Incorrect Inputs"
    });
   }
    next();
}
}

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log(req.headers)
    // console.log(req.headers.authorization)
    // console.log(authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        console.log(token)
        const decoded = jwt.verify(token,JWT_SECRET);

        req.userId = decoded.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware,
    User_auth,
    signin_user,
    inputValidation,
    update_user,
    account_body
}