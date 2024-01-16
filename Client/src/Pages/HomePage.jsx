import { Link } from "react-router-dom";

import homeimg from '../Assets/Images/homepageMainImage.png'
import HomeLayout from "../Layouts/HomeLayout";

function HomePage(){
    return(
        <HomeLayout>
            <div className="pt-10 text-white flex flex-col md:flex-row items-center justify-center  mx-5 gap-10 lg:mx-16  h-[50rem] sm:h-[90vh]">
                <div className=" mt-16 sm:mt-0  flex flex-col justify-center  md:w-1/2 space-y-6">
                        <h1 className=" text-4xl sm:text-5xl font-semibold">
                            Find out best 
                            <span className=" text-yellow-500 font-bold">
                                    Online Coures 
                            </span>
                        </h1>
                        <p className=" text-lg sm:text-xl text-gray-200">
                            We have a large library of course taught by highly skilled and qualified faculties at a very affordable rate cost .
                        </p>
                        <div className=" space-x-6">
                            <Link to="/courses">
                                <button className=" bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                        Explpore courses
                                </button>
                            </Link>

                            <Link to="/contact">
                                <button className=" border border-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                                        Contact Us
                                </button>
                            </Link>


                        </div>
                </div>
                <div className="lg:w-1/2 flex items-center justify-center ">
                    <img src={homeimg} alt="homepage image" />
                </div>

            </div>

        </HomeLayout>
    )
}
export default HomePage;