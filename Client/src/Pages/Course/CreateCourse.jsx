import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { createNewCourse } from "../../Redux/Slices/CourseSlice";

  function CreateCourse(){

    const dispatch =useDispatch();
    const navigate =useNavigate();

    const [userInput, setUserInput]=useState({
        title:"",
        category:"",
        description:"",
        thumbnail:null,
        previewImage:""

    });

     function handleImageUpload(e){
        e.preventDefault();
        const uploadedImage=e.target.files[0];
        if(uploadedImage){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", function(){
                setUserInput({
                    ...userInput,
                    previewImage:this.result,
                    thumbnail:uploadedImage
                })
            })
        }
    }
    
    function handleUserInput(e){
        e.preventDefault();
        const {name,value}=e.target;
       setUserInput({
            ...userInput,
            [name]:value
       })
    }

    async function OnFormSubmit(e){
        e.preventDefault();
        if(!userInput.title ||!userInput.description||!userInput.category||!userInput.thumbnail|!userInput.previewImage){
            toast.error("All fields are mandatory");
            return;
        }

        const response = await dispatch(createNewCourse(userInput));
        if(response?.payload?.success){
            setUserInput({
                title:"",
                category:"",
                description:"",
                thumbnail:null,
                previewImage:""
            });
            navigate("/courses");
        }
    }
    return(
        <HomeLayout>
             <div className="flex items-center justify-center h-[100vh]">
                <form 
                    onSubmit={OnFormSubmit}
                    className="flex flex-col justify-center gap-2 md:gap-5 rounded-lg p-4 mt-5 relative text-white w-[80vw] md:w-[700px] sm:my-10   shadow-[0_0_10px_black]  "
                >
            
                      <div>
                        <Link to={"/courses"} className="  absolute left-2 text-xl text-accent cursor-pointer">
                            <AiOutlineArrowLeft/>
                        </Link>
                    </div>
            
                    <h1 className=" text-center text-2xl font-bold">
                        Create New Course
                    </h1>

                    <main className=" grid lg:grid-cols-2 grid-cols-1 gap-x-10">
                        <div>
                            <div>
                                <label htmlFor="image_uploads" className="  cursor-pointer">
                                        {userInput.previewImage ? (
                                            <img 
                                                className=" w-full h-44 m-auto border"
                                                src={userInput.previewImage}
                                            />
                                        ):(
                                            <div className=" w-full h-44 m-auto flex items-center justify-center border">
                                                <h1 className=" font-bold text-lg">  Upload your course thumbnail</h1>
                                            </div>
                                        ) }
                                </label>
                                <input
                                    className="hidden"
                                    type="file"
                                    id="image_uploads"
                                    accept=".jpg, .jpeg, .png"
                                    name="image_uploads"
                                    onChange={handleImageUpload}
                                />
                            </div>
                                   
                            <div className=" flex  flex-col gap-1">
                                <label className=" text-lg font-semibold" htmlFor="title">
                                            Course title
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter course title"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.title}
                                    onChange={handleUserInput}
                                />
                            </div>   
                        </div >

                        <div className="flex flex-col gap-1">
                            <div className=" flex  flex-col gap-1">
                                <label className=" text-lg font-semibold" htmlFor="createdBy">
                                        Course Instructor
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="Enter course instructor"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.createdBy}
                                    onChange={handleUserInput}
                                />
                            </div>  
                            <div className=" flex  flex-col gap-1">
                                <label className=" text-lg font-semibold" htmlFor="category">
                                        Course category
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter course category"
                                    className="bg-transparent px-2 py-1 border"
                                    value={userInput.category}
                                    onChange={handleUserInput}
                                />
                            </div>      
                            <div className=" flex  flex-col gap-1">
                                <label className=" text-lg font-semibold" htmlFor="description">
                                        Course description
                                </label>
                                <textarea
                                    required
                                    type="text"
                                    name="description"
                                    id="description"
                                    placeholder="Enter course description"
                                    className="bg-transparent px-2 py-1  h-24 overflow-scroll resize-none border"
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                />
                            </div>        
                        </div>
                    </main>

                    <button type="submit" className="w-full bg-yellow-600 text-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out py-2 rounded-sm font-semibold">
                        Create Course
                    </button>

                </form>
            </div>
        </HomeLayout>  
    )
}
export default CreateCourse;