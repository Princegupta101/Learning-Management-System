import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosinstance";

const initialState ={
    courseData: []
}

export const getAllCourse = createAsyncThunk("/course/get", async ()=>{
    try {
        const response=axiosInstance.get("/course");
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

export const createNewCourse= createAsyncThunk("/course/create", async(data)=>{
    try {
        let fromData = new FormData();
        fromData.append("title",data?.title);
        fromData.append("description",data?.description);
        fromData.append("category",data?.category);
        fromData.append("createdBy",data?.createdBy);
        fromData.append("thumbnail",data?.thumbnail);

        const response=axiosInstance.post("/course", fromData);
        toast.promise(response,{
            loading:"Creating new course",
            success:"Course created sucessfully",
            error:"Failed to create course"
        });

        return (await response).data;
        
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
