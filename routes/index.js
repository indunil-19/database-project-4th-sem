const express=require('express')
const router=express.Router();
const RootController=require("../controllers/rootController")
const ifLoggedIn=require('../middleware/ifLoggedIn')
const ifNotLoggedIn=require('../middleware/ifNotLoggedIn')

//router.use('/', RootController.HomePage )
// router.use('/login',ifLoggedIn, RootController.login)
// router.use('/register', ifLoggedIn, RootController.register)
// router.use('/home', ifNotLoggedIn, RootController.HomePage)
// router.use('/logout', ifNotLoggedIn,RootController.logout)

// router.use('/',  RootController.indexPage)


router.use('/admin', require('./admin'))

module.exports=router

