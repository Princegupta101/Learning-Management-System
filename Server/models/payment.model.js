import {model, Schema} from 'mongoose';

const payamentSchema =new Schema({
    razorpay_payment_id:{
        type:String,
        required:true
    },
    razorpay_subscription_id:{
        type:String,
        required:true
    },
    razorpay_signature:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const Payment = model('Payment', payamentSchema);

export default Payment;