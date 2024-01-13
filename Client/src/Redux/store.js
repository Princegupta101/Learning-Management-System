import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducer from "./Slices/AuthSlice";
import CourseSliceReducer from "./Slices/CourseSlice";
import LecturesReducer from './Slices/LectureSlice'
import  RazorpayReducer from './Slices/RazorpaySlice';
import  StatReducer from './Slices/StatSlice';

const store = configureStore({
    reducer:{
        auth:AuthSliceReducer,
        course: CourseSliceReducer, 
        razorpay: RazorpayReducer,
        lecture:LecturesReducer,
        stat:StatReducer,
    },
    devTools: true
})
export default store;