import User from "../models/usermodel.js";
import AppError from "../utils/error.util.js";

const cookieOptions={
    maxAge : 7*24*60*60*1000,
    httpOnly:true,
    secure:true

}

const register=async(req,res,next)=>{
    const {fullName, email, password}= req.body;

    if(!password||!email||!fullName){
        return next(new AppError('All fileds are  required ', 400));
    }

    const userExists = await User.findOne({email});
    if(userExists){
        return next(new AppError('Email already exists  ', 400));
    }
    const user = await User.create({
        fullName,
        email,
        password,
        avatar:{
            public_id:email,
            secure_url:''
        }
         
    });

    if(!user){
        return next(new AppError('User registration failed please try again ', 400));
    }

    //todo:file uplod

    await user.save();

    user.password= undefined;

    const token = await user.generateJWTToken();
    res.cookie('token', token, cookieOptions)

    res.status(201).json({
        suceess:true,
        message:'User regidtered sucessfully',
        user,
    });
};

const login=async (req,res)=>{

    try {

        const {email, password}= req.body;

        if(!email||!password){
            return next(new AppError('All fileds are required ', 400));
        }
    
        const user= await User.findOne({
            email
        }).select('+password');
    
        if(!user || !user.comparePassword(password)){
            return next(new AppError('Email or password does not match ', 400));
        }
    
        const token = await user.generateJWTToken();
        user.password= undefined;
    
    
        res.cookie('token ',token, cookieOptions);
    
    
        res.status(200).json({
            suceess: true,
            message:'User loggedin Successfully',
            user,
        })
        
    } catch (e) {
       return next(new AppError(e.message, 500));
    }

   
};

const logout=(req,res)=>{
    res.cookie('token', null, {
        secure:true,
        maxAge:0,
        httpOnly:true
    });

    res.status(200).json({
        suceess: true,
        message:'User logged out  Successfully',
        user,
    })
};

const getProfile=async (req,res)=>{
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);

        res.status(200).json({
            suceess: true,
            message:'User details ',
            user,
        })
    } catch (e) {
        return next(new AppError('Failed to fetch profile ', 500));
    }

};

export {
    register,
    login,
    logout,
    getProfile
}