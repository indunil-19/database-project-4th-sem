const {adminValidator} =require('../validaters/loginValidater')

class  AdminController{
        static async login(req,res){
            try{
                    const {error, value}= await adminValidator.validate(req.body)
                    if(error) throw error;
                    req.session.user={}
                    req.session.user.type='admin'
                    req.session.user.uid=process.env.ADMINID
                    res.redirect('/admin/home?success=admin login successfull')




            }catch(error){
                    res.render('adminLogin',{
                        error:error,
                        username: req.body.user_name,
                        password:req.body.password,
                        user:''
                    })
            }
        }


        static async loginPage(req,res){
            res.render('adminLogin',{
                error:'',
                userName:"",
                password:"",
                user:''
            })
        }

        static async home(req,res){
            res.render('adminHome', {
                
            })
        }




}

module.exports=AdminController