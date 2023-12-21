import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosinstance";

const initialState ={
    courseData: []
}

export const getAllCourse = createAsyncThunk("/course/get", async ()=>{
    try {
        const response=axiosInstance.get("/courses");
        toast.promise(response, {
            loading:"loading course data ...",
            success:"courses loaded sucessfully",
            error:"Failed to get the courses",
        });
        return (await response).data.courses;
    } catch (error) {
        toast.error(error?.response?.data?.message);    
    }
})

const courseSlice =createSlice({
    name :"course",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllCourse.fulfilled,(state, action)=>{
            if(action.payload){
                state.courseData=[...action.payload]
                
            }
        })
    } 
});

export default courseSlice.reducer;
