import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosinstance";

const initialState={
    lectures:[]
}
 
export const getCourseLectures= createAsyncThunk("/course/lecture/get", async(cid)=>{
    try {
        const response = axiosInstance.get(`/course/${cid}`);
        toast.promise(response,{
            loading:"Fetching course lectures",
            success:"Lectures fetched successfully",
            error:"Failed to load the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

export const addCourseLectures= createAsyncThunk("/course/lecture/add", async(data)=>{
    try {
        const fromData = new FormData();
        fromData.append("lecture",data.lecture);
        fromData.append("title",data.title);
        fromData.append("description",data.description);
        
        const response = axiosInstance.post(`/course/${data.id}`,fromData);
        toast.promise(response,{
            loading:"Adding course lecture",
            success:"Lectures added successfully",
            error:"Failed to add the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

export const deleteCourseLecture= createAsyncThunk("/course/lecture/delete", async(data)=>{
    try {

        const response = axiosInstance.delete(`/course/${data.courseId}/lectures/${data.lectureId}`);
        toast.promise(response,{
            loading:"Delete course lecture",
            success:"Lecture delete successfully",
            error:"Failed to delete the lectures"
        });
        return (await response).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

const lectureSlice = createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCourseLectures.fulfilled,(state, action)=>{
            state.lectures=action?.payload?.lectures;
        })
        .addCase(addCourseLectures.fulfilled,(state, action)=>{
            state.lectures=action?.payload?.lectures;
        })
    }

})
export default lectureSlice.reducer;