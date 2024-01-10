import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { getuserData } from "../../Redux/Slices/AuthSlice";

function CheckoutSuccess(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getuserData());
    })
    return(
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center text-white">
                    <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative">
                        <h1 className="bg-green-500 absolute text-center top-0 w-full py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">Payment Successfull</h1>

                        <div className="px-4 flex flex-col items-center justify-center space-y-2">
                            <div className="text-center space-y-2">
                                <h2 className="text-lg font-semibold">
                                    Welcome to the pro bundle
                                </h2>
                                <p className="text-left">
                                    Now you can enjoy all the courses.
                                </p>

                            </div>
                            <AiFillCheckCircle className="text-green-500 text-5xl" />
                        </div>

                        <Link to="/" className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full py-2 text-xl font-semibold text-center rounded-br-lg rounded-bl-lg">
                            <button>Go to dashboard</button>
                        </Link>
                
                    </div>

            </div>
        </HomeLayout>
    )
}
export default CheckoutSuccess;