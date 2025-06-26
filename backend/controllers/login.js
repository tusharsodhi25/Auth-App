// const auth = require('../model/auth');
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
// require('dotenv').config();
// exports.login = async (req , res)=>{





//     try{

//         const{email,password} = req.body;

//         const user = await auth.findOne({email});

//         if(!user){
//             return res.status(404)
//             .json({
//                 success:false,
//                 message:"user not found"
//             })
//         }


//         const passwordMatch = await bcrypt.compare(password,user.password);
//         if(!passwordMatch){
//             return res.status(401)
//             .json({
//                 success:false,
//                 message:"invalid credentials"
//             })
//         }

//         const payload = {
//             email:user.email
//         }


//         const token = jwt.sign(payload,
//             process.env.JWT_SECRET,
//             {expiresIn:"7d"})



//         const options = {
//             expiresIn : new Date(Date.now()+3*60*60*1000),
//             httpOnly : true,

//         }
         

//         res.cookie('cookie',token,options)
//         .json({
//             success:true,
//             message:"login successfully",
//             token,
//             user:{
//                 id:user.id,
//                 email:user.email
//             }
//         })
      
       

//     }

//     catch(error){
//          console.log(error);
//     res.status(500).json({ success: false, message: 'Server error' });
//     }






// }


const auth = require('../model/auth');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.login = async (req , res)=>{

    try{

        const {email,password,role} = req.body;

        if(!email || !password){
            return res.status(400)
            .json({
                success:false,
                message:"invalid credentials"
            })
        }

        const user = await auth.findOne({email});

        if(!user){
            return res.status(404)
            .json({
                success:false,
                message:"user not found"
            })
        }

       const passmatch =  await bcrypt.compare(password,user.password);

       if(!passmatch){
        return res.status(401)
        .json({
            success:false,
            message:"incorrect password"
        })
       }

       const payload = {
        email:user.email,
        role:user.role
       }

       const token = await jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"7d"});


       const options = {
           expires : new Date(Date.now()+3*60*60*1000),
           httpOnly:true
       }


       return res.cookie('token',token,options)
       .json({
        success:true,
        message:"login successfully",
        token,
        user:{
        id:user.id,
        email:user.email,
        role:user.role
        }
      
       })

    }
    catch(error){
         console.log(error),
        res.status(500)
        .json({
            success:false,
            message:"error"
        })
    }







}