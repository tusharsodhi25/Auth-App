const {signup} = require('../controllers/signup');
const{login} = require('../controllers/login');
const express = require('express');
const { authorisation,isStudent,isAdmin } = require('../middleware/authorisation');

const router = express.Router();


router.post('/signup',signup);
router.post('/login',login)


// protected routes

router.get('/test',authorisation,(req , res)=>{
    res.status(200)
    .json(
        {
            success:true,
            message:"welcome to test route"
        }
    )
})


router.get('/student',authorisation,isStudent,(req , res)=>{
    res.status(200)
    .json({
        success:true,
        message:"welcome to student route"
    })
})

router.get('/admin',authorisation,isAdmin,(req , res)=>{
    res.status(200)
    .json({
        success:true,
        message:"welcome to Admin route"
    })
})





module.exports = router;