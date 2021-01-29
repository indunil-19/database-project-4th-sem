const {loginValidator, registerValidator}=require("../validaters/loginValidater")
const userServices=require('../services/userServices')

class RootController{
    static async indexPage(req,res){
        res.render('index',{
            user:''
        })
    }
    static async HomePage(req,res){
        res.render('home',{
            user:req.session.user
        })
    }

    static async login(req,res){
        
        try{
        if(req.body.email  || req.body.password){
           const {value, error}= await loginValidator.validate(req.body)
           if( error ) throw error
           const user= await userServices.login(value)
           req.session.user={}
           req.session.user.uid=user.uid,
           req.session.user.email=user.email,
           req.session.user.first_name=user.first_name,
           req.session.user.middle_name=user.middle_name,
           req.session.user.last_name=user.last_name,
           req.session.user.user_name=user.user_name
           res.redirect("/home")
        }
        else{
            res.render('login', {
                user:'',
                success:req.query.success,
                error:req.query.error,
                email:'',
                password:''
            })
        }
        }
        catch(error){
            res.render('login', {
                user:'',
                error:error,
                email:req.body.email,
                password:req.body.password,
                success:''
            })
        }
        
    }

    static async register(req,res){
       
        try{
            
            if(req.body.first_name || req.body.NIC || req.body.address_no || req.body.street || req.body.state || req.body.phone_number || req.body.email || req.body.user_name || req.body.password){
                    const {value, error}= registerValidator.validate(req.body)
                    
                    if(error) throw error
                    const user=await userServices.farmerRegister(value)
                    res.redirect('/login?success=user registation sucessfull')
                   
            }
            else{
                res.render('register',{
                    user:'',
                    NIC:'',
                    first_name:'',
                    middle_name:'',
                    last_name:'',
                    address_no:'',
                    street:'',
                    state:'',
                    phone_number:'',
                    email:'',
                    user_name:'',
                    password:'',
                    error:''
                })
            }
        }catch(e){
            res.render('register', {
                    user:'',
                    NIC:req.body.NIC,
                    first_name:req.body.first_name,
                    middle_name:req.body.middle_name,
                    last_name:req.body.last_name,
                    address_no:req.body.address_no,
                    street:req.body.street,
                    state:req.body.state,
                    phone_number:req.body.phone_number,
                    email:req.body.email,
                    user_name:req.body.user_name,
                    password:req.body.password,
                    error:e
            }) 
            
        }
    }
    static async logout(req,res){
        try {
            req.session.destroy();
            res.redirect('/')
        } catch (error) {
            res.redirect('/')
            
        }
    }


}

module.exports=RootController