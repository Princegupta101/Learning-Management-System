import { Schema,model } from "mongoose";
import bcrypt from"bcryptjs";
import jwt from 'jsonwebtoken'

const userSchema= new Schema({
    fullName: {
        type:'String',
        required:[true, 'Name is required'],
        minLength:[5,'Name must be 5 charchter'],
        maxLength:[50, 'Name should be less then 50 character '],
        lowercase:true,
        trim:true,
    },
    email:{
        type: 'String',
        required:[true, 'Email is required'],
        lowercase:true,
        trim:true,
        unique:true,
        match:[
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            'Please fill in a valid email address '
        ]
    },
    password:{
        type: 'String',
        required:[true, 'Password is required'],
        minLength:[8,'Password must be 8 charchter'],
        select:false
    },
    avatar:{
        public_id:{
            type:'String',
        },
        secure_url:{
            type:'String'
        }
    },
    role:{
        type:'String',
        enum:['USER','ADMIN'],
        default:'USER'
    },
    forgotPasswordToken:String ,
    forgotPAsswordExpiry: Date
},{
    timestamps:true
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this. password= await bcrypt.hash(this.password,10);

})

userSchema.method={
    generateJWTToken: async function (){
        return await jwt.sign(
            {id:this_id,email:this.email, subscription:this.subscription},
            process.env.JWT_SECRET,
            {
                expiresIn:process.env.JWT_EXPIRY,
            }

        )
    },
    comparePassword:async function(plaintextpassword){
        return  await bcrypt.compare(plaintextpassword,this.password)

    }
}

const User =model('User', userSchema);

export default User;