import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"

import CourseCard from "../../Compontents/CourseCard";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCourse } from "../../Redux/Slices/CourseSlice";

function CourseList(){

    const dispatch = useDispatch()
    const {courseData}= useSelector((state)=>state.course);

   async function loadCourses(){
         await dispatch(getAllCourse());
    }
    useEffect(()=>{
        loadCourses();
    },[]);
    return (
        <HomeLayout>
           <div className=" min-h-[90vh]   pt-12  flex flex-col gap-10 text-white">
                <h1 className="text-center text-3xl  font-semibold">
                    Explore the course made by 
                    <span className=" font-bold text-yellow-500">
                        Industry experts
                    </span>
                </h1>
                <div className=" grid xl:grid-cols-3 md:grid-cols-2 mx-auto  gap-16 grid-cols-1 text-center mb-10">
                    {courseData?.map((element)=>{
                        return <CourseCard key={element._id} data={element}/>
                    })}
                </div>
             
           </div>

        </HomeLayout>
    )
}
export default CourseList;