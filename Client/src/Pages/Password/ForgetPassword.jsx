import  { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link} from "react-router-dom"

import { isEmail } from "../../Helpers/regexMatcher";
import HomeLayout from "../../Layouts/HomeLayout";
import { forgetPassword } from "../../Redux/Slices/AuthSlice";

function ForgetPassword(){
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email:""
    });
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        // checking for the empty field
        if (!data.email) {
          toast.error("All fields are mandatory");
          return;
        }
    
        // email validation using regex
       if (!isEmail(data.email)) {
            toast.error("Invaild email id  ")
            return;
        }
    
        // calling the api from auth slice
        const response = await dispatch(forgetPassword(data));
        // console.log(response)
        if(response?.payload?.success){
            setData({
                email:""
            });
        }
      };

    return (
        <HomeLayout>
               <div className="flex items-center justify-center h-[100vh]">
                    {/* forget password card */}
                    <form
                    onSubmit={handleFormSubmit}
                    className="flex flex-col justify-center gap-6 rounded-lg p-4 text-white w-80 h-[26rem] shadow-[0_0_10px_black]"
                    >
                    <h1 className="text-center text-2xl font-bold">Forget Password</h1>

                    <p>
                        Enter your registered email, we will send you a verification link on
                        your registered email from which you can reset your password
                    </p>

                    <div className="flex flex-col gap-1">
                        <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your registered email"
                        className="bg-transparent px-2 py-1 border"
                        value={data.email}
                        onChange={(event) => setData({email:event.target.value})}
                        />
                    </div>

                    <button
                        className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                        type="submit"
                    >
                        Get Verification Link
                    </button>

                    <p className="text-center">
                        Already have an account ?{" "}
                        <Link to={"/login"} className="link text-accent cursor-pointer">
                        Login
                        </Link>
                    </p>
                    </form>
                </div>
        </HomeLayout>
    )
}
export default ForgetPassword;