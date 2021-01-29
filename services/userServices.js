const Error =require('../helpers/error')
const User=require('../models/user')
const bcrypt=require('bcrypt')

class userServices {
    static async login({email,password}){
        
        const user= await User.findUser(email)
        if(!user){
            throw new Error.BadRequest('Email is not registered');
        }
        const isPasswordCorrect =await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect){
             throw new Error.BadRequest('entered password is wrong');
         }
        return user;
        
    }
    static async farmerRegister({NIC,first_name, middle_name, last_name, email, address_no, state, street, phone_number, user_name, password}){
       const user=await User.findUser(email)
            if(user){
                throw new Error.BadRequest('email is already registered')
       }
        const hashpwd=await bcrypt.hash(password, 10);
        const newuser=await User.registerUser(NIC,first_name, middle_name, last_name, email,address_no, state, street, phone_number, user_name, hashpwd)
        return newuser;
    }
}

module.exports=userServices