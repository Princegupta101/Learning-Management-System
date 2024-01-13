
import { useEffect, useState } from "react";
import { MdAutoDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { deleteCourseLecture, getCourseLectures } from "../../Redux/Slices/LectureSlice";

function Displaylectures(){
    const navigate =useNavigate();
    const dispatch= useDispatch();
    const {state }=useLocation();
    const {lectures}= useSelector((state)=>state.lecture);
    const {role}= useSelector((state)=>state.auth);

    const [currentVideo, setCurrentVideo]=useState(0);

    async  function onLectureDelete(courseId, lectureId){
        if(window.confirm("Are you Sure Want to delete the Lecture ?")){
            await dispatch(deleteCourseLecture({courseId:courseId,lectureId:lectureId}));
            await  dispatch(getCourseLectures(courseId));
        }
    }
    useEffect(()=>{
        if(!state) navigate("/course")
            dispatch(getCourseLectures(state._id))

    },[])


    return(
        <HomeLayout>
            <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-wihte mx-[5%]">
                <div className="text-center text-2xl font-semibold text-yellow-500">
                    Course Name: {state?.title}
                </div>

                {(lectures && lectures.length > 0 ) ?  
                    (<div className="flex flex-col md:flex-row justify-center gap-10 w-full">
                    {/* left section for playing videos and displaying course details to admin */}
                   <div className="space-y-5 md:w-[28rem] md:h-[35rem]  p-2 rounded-lg shadow-[0_0_10px_black]">
                        <video 
                            src={lectures && lectures[currentVideo]?.lecture?.secure_url}
                            className="object-fill rounded-tl-lg rounded-tr-lg  max-h-96"   
                            controls
                            disablePictureInPicture
                            muted
                            controlsList="nodownload"

                        >
                        </video>    
                        <div>
                            <h1>
                                <span className="text-yellow-500"> Title: {" "}
                                </span>
                                {lectures && lectures[currentVideo]?.title}
                            </h1>
                            <p>
                                <span className="text-yellow-500 line-clamp-4">
                                    Description: {" "}
                                </span>
                                {lectures && lectures[currentVideo]?.description}
                            </p>
                        </div>
                   </div>

                   {/* right section for displaying list of lectres */}
                   <div className="md:w-[28rem]  md:h-[35rem] p-2 rounded-lg shadow-[0_0_10px_black] space-y-4 ">
                        <div className="font-semibold text-xl text-yellow-500 flex items-center justify-between">
                                <p>Lectures list</p>

                                
                                {role === "ADMIN" && (
                                    <button onClick={() => navigate("/course/addlecture", {state: {...state}})} className=" btn btn-primary px-2 py-1 rounded-md font-semibold text-sm">
                                        Add new lecture
                                    </button>
                                )}
                        </div> 
                        <ul className=" space-y-4 md:overflow-y-auto">
                     
                            {lectures && 
                                lectures.map((lecture, idx) => {
                                    return (
                                        <li className="space-y-2 flex justify-between" key={lecture._id} >
                                            <p className="cursor-pointer  text-white" onClick={() => setCurrentVideo(idx)}>
                                                <span className=" text-md">
                                                    {" "} Lecture {idx + 1} : {" "}
                                                </span>
                                                {lecture?.title}
                                            </p>
                                            {role === "ADMIN" && (
                                                <button onClick={() => onLectureDelete(state?._id, lecture?._id)} className="font-semibold text-2xl">
                                                    <MdAutoDelete />
                                                </button>
                                            )}
                                        </li>
                                    )
                                })    
                            }
                        </ul>
                   </div>
                </div>) : (
                    role === "ADMIN" && (
                        <button onClick={() => navigate("/course/addlecture", {state: {...state}})} className="btn btn-active btn-primary px-4 py-2 rounded-md font-semibold  text-lg">
                            Add new lecture
                        </button>
                    )
                )}
            </div>
        </HomeLayout>
    )
}
export default Displaylectures;