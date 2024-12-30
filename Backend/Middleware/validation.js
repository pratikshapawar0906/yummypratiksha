const joi=require('joi')

const signUpValidation=(req,res,next)=>{

    const Schema=joi.object({
        name:joi.string().min(3).max(100).required(),
        email:joi.string().email().required(),
        password:joi.string().min(6).max(100).required(),
        confirmPassword: joi.string().valid(joi.ref('password')).required()
          .messages({ 'any.only': 'Passwords must match' }),
    })
    const {error}= Schema.validate(req.body);
    if(error){
        return res.status(400)
          .json({message :"Bad request",error})
    }
    next();
}

const loginValidation=(req,res,next)=>{

    const Schema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(6).max(100).required(),
        
    })
    const {error}= Schema.validate(req.body);
    if(error){
        return res.status(400)
          .json({message :"Bad request",error})
    }
    next();
}

const contactValidation = (req, res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        phone: joi.string().min(10).max(15).pattern(/^[0-9]+$/).required(), // added a pattern for phone
        message: joi.string().min(10).max(10000).required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400)
            .json({message :"Bad request",error})
    }

    next();
};

module.exports= { 
    signUpValidation,
    loginValidation,
    contactValidation
}
