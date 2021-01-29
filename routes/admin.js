const express=require('express')
const router=express.Router()
const adminContoller=require("../controllers/adminController")




router.get('/login', adminContoller.loginPage)
router.get('/home', adminContoller.home)




router.post('/login', adminContoller.login)


module.exports=router