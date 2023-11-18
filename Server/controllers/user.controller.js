import User from "../models/usermodel.js";
import AppError from "../utils/error.util.js";

const cookieOptions={
    maxAge : 7*24*60*60*1000,
    httpOnly:true,
    secure:true

}

const register=async(req,res,next)=>{
    const {fullName, email, password}= req.body;

    if(!fullName|| !email|| !password){
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
            secure_url:'https://res.cloudinary.com/du9jzqlpt/image/upload/v1674647316/avatar_drzgxv.jpg',
        }
         
    });

    if(!user){
        return next(
            new AppError('User registration failed please try again ', 400)
        );
    }

    //todo:file uplod

    await user.save();

    const token = await user.generateJWTToken()

    user.password= undefined;

    res.cookie('token', token, cookieOptions)

    res.status(201).json({
        suceess:true,
        message:'User registered sucessfully',
        user,
    });
};

const login=async (req,res,next)=>{

    try {

        const {email, password}= req.body;

        if(!email||!password){
            return next(new AppError('Email and Password are required ', 400));
        }
    
        const user= await User.findOne({
            email
        }).select('+password');
    
        if(!(user &&(await user.comparePassword(password)))){
            return next(
                new AppError('Email or password does not match ', 400)
            );
        }
    
        const token = await user.generateJWTToken();
        user.password= undefined;
    
    
        res.cookie('token ',token, cookieOptions);
    
    
        res.status(200).json({
            suceess: true,
            message:'User logged in Successfully',
            user,
        })
        
    } catch (e) {
       return next(new
         AppError(e.message, 500));
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

const getProfile=async (req,res, next)=>{
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