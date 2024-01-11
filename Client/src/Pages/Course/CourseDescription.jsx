
import { useSelector } from "react-redux";
import {  useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";

function CourseDescripition() {

    const {state}=useLocation();
    const navigate = useNavigate();
    
    const {role, data}=useSelector((state)=>state.auth)

    return(
        <HomeLayout>
            <div className=" min-h-[90vh] pt-12 md:px-20 flex flex-col items-center justify-center text-white  shadow-[0_0_10px_black] ">
                <div>  
                    <h1 className=" w-full text-2xl font-bold text-yellow-500 mb-5 text-center">
                         {state?.title}
                       </h1>
                </div>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 relative   w-1/2">

                    <div className=" space-y-4">
                        <img
                             className=" w-full h-64"
                             alt="thumbnail"
                             src={state?.thumbnail?.secure_url}
                        />
                        <div className=" space-y-4">
                            <div className="flex flex-col items-center justify-center text-xl">
                                    <p className=" font-semibold">
                                            <span>
                                                Total lectures :{" "}
                                            </span>
                                            {state?.numberOfLectures}
                                    </p>
                                    <p className=" font-semibold">
                                            <span>
                                                Instructor :{" "}
                                            </span>
                                            {state?.createdBy}
                                    </p>
                            </div>
                        </div>
                    </div>

                    <div className=" space-y-2 text-xl">
                            <p className=" text-yellow-500 "> Course description:   </p>
                            <p className=" lg:h-60">{state?.description}</p>
                            {role==="ADMIN"||data?.subscription?.status=== "active"?(
                                <button className=" bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">
                                    Watch lectures
                                </button>
                            ):(
                                <button onClick={()=>navigate("/checkout")} className=" bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-500 transition-all ease-in-out duration-300">
                                    Subscribe
                                </button>
                            )
                            }
                    </div>
                    
                </div>
            </div>
            
        </HomeLayout>
    )
    
}
export default CourseDescripition;