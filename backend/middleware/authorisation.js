const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.authorisation = async (req , res, next)=>{
    try{

        // extract jwt token 
        const token = req.cookies.token;

        // if token not found

        if(!token){
           return  res.status(401)
            .json({
                success:false,
                message:"token not found"
            })
        }

        // verify the token
        try{
            const payload = jwt.verify(token,process.env.JWT_SECRET);
            console.log(payload);
            

            // use  verified token in request
            req.user = payload;

            next();


        }catch(error){
           return  res.status(401)
            .json({
                success:false,
                message:"token is invalid"
            })
        }

    }
    catch(error){
        return res.status(500)
        .json({
            success:false,
            message:"something went wrong while verifying the token"
        })

    }
}

exports.isStudent = async (req , res,next)=>{


    try{

        if(req.user.role !=='student'){
            return res.status(401)
            .json({
                success:false,
                message:"this is protected route for students"
            })
        }
        next();

    }
    catch(error){
        return res.status(500)
        .json({
            success:false,
            message:"user role can not be verified"
        })

    }
}


exports.isAdmin = async (req , res,next)=>{


    try{

        if(req.user.role !=='admin'){
            return res.status(401)
            .json({
                success:false,
                message:"this is protected route for admin"
            })
        }
        next();

    }
    catch(error){
        return res.status(500)
        .json({
            success:false,
            message:"user role can not be verified"
        })

    }
}