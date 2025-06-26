const auth = require('../model/auth');
const bcrypt = require('bcrypt')
exports.signup = async (req , res)=>{


    try{

        const{name,email,password,role} = req.body;
         console.log("Received data:", req.body); 

        const existinguser = await auth.findOne({email});


        if(existinguser){
            return res.status(400)
            .json({
                success:false,
                message:"user already existed"
            })
        }


        let hashpassword;

        try{

            hashpassword = await bcrypt.hash(password,10);

        }
        catch(error){
              return res.status(500)
              .json({
                success:false,
                message:"error in hashing password"
              })
        }


        const user = await auth.create({name,email,password:hashpassword,role})

        return res.status(200)
        .json({
            success:true,
            message:"user created successfully",
            data:user

        })

    }

    catch(error){
        console.log(error)
        res.status(500)
        .json({
            success:false,
            message:"error in sign up"
        })
    }

}