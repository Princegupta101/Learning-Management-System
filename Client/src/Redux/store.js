import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducres from "./Slices/AuthSlice";
import CourseSliceReducres from "./Slices/CourseSlice";
import  razorpayRedures from './Slices/RazorpaySlice';

const store = configureStore({
    reducer:{
        auth:AuthSliceReducres,
        course: CourseSliceReducres, 
        razorpay: razorpayRedures,
    },
    devTools: true
})
export default store;