import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { isPassword } from "../../Helpers/regexMatcher";
import HomeLayout from "../../Layouts/HomeLayout";
import { resetPassword } from "../../Redux/Slices/AuthSlice";

function ResetPassword(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        password: "",
        cnfPassword: "",
        resetToken: useParams().resetToken,
    });
    const handleUserInput = (event) => {
        const { name, value } = event.target;
        setData({
             ...data, 
             [name]: value 
        });
      };

      const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(!isPassword(data.password )){
            toast.error("Password should be 6 - 16 character long with atleast a number and special character");
            return;
        }

        if (!data.password || !data.cnfPassword || !data.resetToken) {
            toast.error( "Minimum password length should be 8 with Uppercase, Lowercase, Number and Symbol");
            return;
        }

        if (data.password !== data.cnfPassword) {
            toast.error("Both password should be same");
            return;
        }

        const response = await dispatch(resetPassword(data));
        if(response?.payload?.success){
            navigate("/login");
            setData({
                password: "",
                cnfPassword: "",
              });
        }
    }
    return (
        <HomeLayout>
             <div
                onSubmit={handleFormSubmit}
                className="flex items-center justify-center h-[100vh]"
            >
                <form className="flex flex-col justify-center gap-6 rounded-lg p-4 text-white w-80 h-[26rem] shadow-[0_0_10px_black]">
                <h1 className="text-center text-2xl font-bold">Reset Password</h1>

                <div className="flex flex-col gap-1">
                    <label className="text-lg font-semibold" htmlFor="email">
                    New Password
                    </label>
                    <input
                    required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your new password"
                    className="bg-transparent px-2 py-1 border"
                    value={data.password}
                    onChange={handleUserInput}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-lg font-semibold" htmlFor="cnfPassword">
                    Confirm New Password
                    </label>
                    <input
                    required
                    type="password"
                    name="cnfPassword"
                    id="cnfPassword"
                    placeholder="Confirm your new password"
                    className="bg-transparent px-2 py-1 border"
                    value={data.cnfPassword}
                    onChange={handleUserInput}
                    />
                </div>

                <button
                    className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
                    type="submit"
                >
                    Reset Password
                </button>
                </form>
            </div>
        </HomeLayout>
    )
}
export default ResetPassword;