import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosinstance"

const initialState = {
    isLoggedIn : localStorage.getItem('isLoggedIn')|| false,
    role:localStorage.getItem('role')|| "" ,
    data: JSON.parse(localStorage.getItem("data")) || {}
    
}

export const creatAccount =createAsyncThunk("/auth/singup", async(data)=>{
    try {
        const res =axiosInstance.post("user/register", data);
        toast.promise(res,{
            loading:"wait creating your account",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed in create account"
        })
        return(await res).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const login =createAsyncThunk("/auth/login", async(data)=>{
    try {
        const res =axiosInstance.post("user/login", data);
        toast.promise(res,{
            loading:"wait authentication in process..... ",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to login"
        })
        return(await res).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const logout=createAsyncThunk("/auth/logout", async ()=>{
    try {
        const res =axiosInstance.post("user/logout");
        toast.promise(res,{
            loading:"wait logout in process..... ",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to logout"
        })
        return(await res).data;

    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const updateProfile=createAsyncThunk("/user/update/profile", async ( data)=>{
    try {
        const res =axiosInstance.put(`user/update`, data);
        toast.promise(res,{
            loading:"wait profile update in process..... ",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to profile update"
        })
        return(await res).data;

    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getuserData=createAsyncThunk("/user/details", async ()=>{
    try {
        const res =axiosInstance.get("user/me");
        return(await res).data;
    } catch (error) {
        toast.error(error?.message)
    }
})

export const forgetPassword =createAsyncThunk("/auth/forget-Password", async(data)=>{
    try {
        const res =axiosInstance.post("user/reset", data);
        toast.promise(res,{
            loading:"wait forgetPassword in process..... ",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to forgetPassword"
        })
        return(await res).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const changePassword = createAsyncThunk(
    "/auth/changePassword",
    async (userPassword) => {
        try {
        let res = axiosInstance.post("/user/change-password", userPassword);
        toast.promise(res,{
            loading:"wait  in process..... ",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to change Password"
        })
        return(await res).data;
        } catch (error) {
        toast.error(error?.response?.data?.message);
        }
 });

export const resetPassword = createAsyncThunk("/user/reset", async (data) => {
    try {
        let res = axiosInstance.post(`/user/reset/${data.resetToken}`, { password: data.password });
        toast.promise(res,{
            loading:"wait  in process..... ",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to reset Password"
        })
        return(await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(creatAccount.fulfilled, (state, action)=>{
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role
            state.isLoggedIn = true;

        })
        .addCase(login.fulfilled, (state, action)=>{
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role
            {state.role &&(state.isLoggedIn=true) } 

        })
        .addCase(logout.fulfilled, (state)=>{
            localStorage.clear();
            state.data={};
            state.isLoggedIn=false;
            state.role="";

        })
        .addCase(getuserData.fulfilled, (state, action)=>{
            if(action?.payload?.user)return;
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn=true;
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role

        })

    }
});

// export const {}= authSlice.actions;
export default authSlice.reducer;