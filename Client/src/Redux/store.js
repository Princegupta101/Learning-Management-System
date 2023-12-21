import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducres from "./Slices/AuthSlice";
import CourseSliceReducres from "./Slices/CourseSlice";

const store = configureStore({
    reducer:{
        auth:AuthSliceReducres,
        course: CourseSliceReducres,  
    },
    devTools: true
})
export default store;