import { useRef, useState } from "react";
import {toast} from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../Layouts/HomeLayout";
import { login } from "../Redux/Slices/AuthSlice";

function Login(){

    const dispatch = useDispatch();
   const navigate = useNavigate();


    const [loginData, setloginData]=useState({
        email:"",
        password:"",
    });
    const lastAttemptRef = useRef(0);

    function handleUserInput(e){
        const{name, value}=e.target;
        setloginData({
            ...loginData,
            [name]:value
        })
    }

   async function onLogin(event){
        event.preventDefault();
    // simple debounce: ignore repeated clicks within 800ms
    const now = Date.now();
    if (now - lastAttemptRef.current < 800) return;
    lastAttemptRef.current = now;
        if (!loginData.email || !loginData.password) {
            toast.error("Please fill all the details ");
            return;
        }


        //dispatch create account action
       try {
        const response = await dispatch(login(loginData));
        if (response.error) {
            const msg = response.payload?.message || response.error?.message || "Invalid email or password. Please try again or register.";
            const toastId = "login-error";
            // update or create single toast with the same id so it doesn't stack
            toast.error(msg, { id: toastId, duration: 2000 });
            return;
        }

        if(response?.payload?.success){
            navigate("/");
            setloginData({
                email:"",
                password:"",
            })
        }
             } finally {
                 // nothing to do here; button remains clickable
             }
    }
    return(
        <HomeLayout>
                <div className=" flex items-center justify-center h-[90vh]">
                    <form  noValidate onSubmit={onLogin} className="flex flex-col   justify-center gap-3  rounded-lg text-white p-4  w-80  shadow-[0_0_10px_black] ">
                        <h1 className="text-center text-2xl font-bold">Login Page</h1>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-semibold">Email</label>
                            <input 
                                type="email"
                                required
                                name="email"
                                id="email"
                                placeholder="Enter your email...."
                                className=" bg-transparent px-2 py-1 border"
                                onChange={handleUserInput}
                                value={loginData.email}
                             />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="font-semibold">Password</label>
                            <input 
                                type="password"
                                required
                                name="password"
                                id="password"
                                placeholder="Enter your password...."
                                className=" bg-transparent px-2 py-1 border"
                                onChange={handleUserInput}
                                value={loginData.password}
                             />
                        </div>

            <button type="submit" className={` mt-2 bg-yellow-600 hover:bg-yellow-500 py-2 font-semibold text-lg cursor-pointer transition-all ease-in-out duration-300  rounded-sm`}>
                Login
            </button>

                        <Link to={"/forget-password"}>
                            <p className="text-center link text-accent cursor-pointer">
                            Forget Password
                            </p>
                        </Link>
          
                        <p className="text-center">
                         Donot have an account ? <Link to="/signup" className=" link  text-accent cursor-pointer">Signup</Link>
                        </p>

                    </form>
                </div>
        </HomeLayout>
    )
}
export default Login;