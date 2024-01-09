import { useState } from "react";
import {toast} from 'react-hot-toast'
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { isEmail, isPassword } from "../Helpers/regexMatcher";
import HomeLayout from "../Layouts/HomeLayout";
import { creatAccount } from "../Redux/Slices/AuthSlice";

function Signup(){

    const dispatch = useDispatch();
   const navigate = useNavigate();


    const [prevImage, setPrevImage]=useState("");

    const [signupData, setSignupData]=useState({
        fullName:"",
        email:"",
        password:"",
        avatar:"",
    });

    function handleUserInput(e){
        const{name, value}=e.target;
        setSignupData({
            ...signupData,
            [name]:value
        })
    }

    function getImage(event){
        event.preventDefault();

        //getting image
        const uploadedImage = event.target.files[0];

        if(uploadedImage){
           setSignupData({
                ...signupData,
                avatar:uploadedImage
           });
           const fileReader =new FileReader();
           fileReader.readAsDataURL(uploadedImage);
           fileReader.addEventListener("load", function(){
                 console.log(this.result);
                setPrevImage(this.result);
           })   
        }
    }

   async function createNewAccount(event){
        event.preventDefault();
        if (!signupData.email ||!signupData.fullName||!signupData.avatar || !signupData.password) {
            toast.error("Please fill all the details ");
            return;
        }

        //checking name filed 
        if(signupData.fullName.length<5){
            toast.error("Name should be atleast of 5characters ")
            return;
        }

        //email vaildtaion 
        if (!isEmail(signupData.email)) {
            toast.error("Invaild email id  ")
            return;
        }

        //checking password
        if(!isPassword(signupData.password)){
            toast.error("Password should be 6 - 16 character long with atleast a number and special character");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", signupData.fullName);
        formData.append("email", signupData.email);
        formData.append("password", signupData.password);
        formData.append("avatar", signupData.avatar);


        //dispatch create account action
       const response = await dispatch(creatAccount(formData));
        if(response?.payload?.success){
            navigate("/");
            setSignupData({
                fullName:"",
                email:"",
                password:"",
                avatar:"",
            })
            setPrevImage("");
        }
    }
    return(
        <HomeLayout>
                <div className=" flex items-center justify-center h-[90vh]">
                    <form  noValidate onSubmit={createNewAccount} className="flex flex-col   justify-center gap-3  rounded-lg text-white p-4 w-80  shadow-[0_0_10px_black] ">
                        <h1 className="text-center text-2xl font-bold">Registion Page</h1>
                        <label htmlFor="image_uploads" className=" cursor-pointer">
                            {prevImage ? (
                               < img  className="w-24 h-24 rounded-full m-auto" src={prevImage}  />
                               ) : (
                                    <BsPersonCircle className="w-24 h-24 rounded-full m-auto"/>
                            ) }
                        </label>
                        <input 
                            className="hidden"
                            type="file"
                            name="image_uploads"
                            id="image_uploads"
                            accept=".jpg, .jpeg , .png ,.svg"
                            onChange={getImage}
                        />

                        <div className="flex flex-col gap-1">
                            <label htmlFor="fullName" className="font-semibold">Name</label>
                            <input 
                                type="text"
                                required
                                name="fullName"
                                id="fullName"
                                placeholder="Enter your FullName...."
                                className=" bg-transparent px-2 py-1 border"
                                onChange={handleUserInput}
                                value={signupData.fullName}
                             />
                        </div>

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
                                value={signupData.email}
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
                                value={signupData.password}
                             />
                        </div>
                        <button  type="submit" className=" mt-2 bg-yellow-600 hover:bg-yellow-500 py-2 font-semibold text-lg cursor-pointer transition-all ease-in-out duration-300  rounded-sm">
                                Create Account
                        </button>
                        <p className="text-center">
                            Already have an account ? <Link to="/login" className=" link  text-accent cursor-pointer">Login</Link>
                        </p>

                    </form>
                </div>
        </HomeLayout>
    )
}
export default Signup;