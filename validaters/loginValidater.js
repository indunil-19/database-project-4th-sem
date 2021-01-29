const Joi = require('joi')


const loginValidator =Joi.object().options({abortEarly: false}).keys({
    email: Joi.string().required().label("email"),
    password: Joi.string().required().label("password")
})
const registerValidator=Joi.object().options({abortEarly:false}).keys({
    NIC:Joi.string().required().label('NIC').min(10),
    first_name:Joi.string().required().label('first_name'),
    middle_name:Joi.string().allow(null).allow("").label('middle_name'),
    last_name:Joi.string().allow(null).allow("").label('last_name'),
    address_no:Joi.string().required().label('address_no'),
    street:Joi.string().required().label('street'),
    state:Joi.string().required().label('state'),
    phone_number:Joi.string().required().label('phone_number'),
    email:Joi.string().required().label('email'),
    user_name:Joi.string().required().label('user_name'),
    password:Joi.string().required().label('password')
})

const adminValidator=Joi.object().options({abortEarly:false}).keys({
    user_name:Joi.string().required().label('user_name').equal(process.env.SECRET),
    password:Joi.string().required().label("password").equal("xnv0w@jupitor")
})


module.exports={loginValidator , registerValidator,adminValidator};
