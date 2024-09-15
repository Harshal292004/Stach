const express= require('express')
const router= express.Router()
const {createdUser,loginUser}=require('../controllers/userAuthController')

router.get("/",function(req,res){
    res.send("hey its working ")
})



if(process.env.NODE_ENV==="development"){
    router.get("/login",function(req,res){
        res.render('user-login')
    })

    
    router.get("/create",function(req,res){
        res.render('user-create')
    })

    
    router.post("/create",createdUser)
    
    router.post("/login",loginUser)
}



module.exports=router