import cloudinary from 'cloudinary'
import fs from 'fs/promises'

import asyncHandler from '../middlewares/asyncHAndler.middleware.js';
import Course from "../models/course.model.js"
import AppError from "../utils/error.util.js";

/**
 * @ALL_COURSES
 */
export const getAllCourse = asyncHandler(async (req, res, next)=>{
    try {
        const courses = await Course.find({}).select('-lectures');
        res.status(200).json({
            success:true,
            message:'All course',
            courses,
        })
        
    } catch (error) {
        return next(
            new AppError(e.message,500)
        )
    }
      
});
/**
 * @GET_LECTURES_BY_COURSE_ID
 */
export const getLecturesByCourseId = asyncHandler(async (req, res, next)=>{
    try {
        const {id} = req.params;

        const course = await  Course.findById(id);

        if(!course){
            return next(
                new AppError(e.message,500)
            )
        }

        res.status(200).json({
            success:true,
            message:'Course lectures fecthed sucesssfully ',
            lectures:course.lectures,
        })
        
        
    } catch (error) {
        return next(
            new AppError(e.message,500)
        )
    }
});
/**
 * @CREATE_COURSE
 */
export const createCourse = asyncHandler(async (req, res, next)=>{
    const {title, description , category, createdBy}= req.body;
    if(!title||! description ||! category||!createdBy){
        return next(
            new AppError('Alll fields are required ', 400)
        )
    }
    
    const course = await Course.create({
        title,
        description,
        category,
        createdBy,
        thumbnail:{
            public_id:'Dummy',
            secure_url:'Dummy'
        },
    });

    if(!course){
        return next(
            new AppError('Course could not created please try again  ', 500)
        )
    }
    if(req.file){
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path,{
                folder:'lms'
            });
            if(result){
                course.thumbnail.public_id=result.public_id;
                course.thumbnail.secure_url=result.secure_url;
            }
            fs.rm(`uploads/${req.file.filename}`);
        }catch (error) {
            return next(
                new AppError(error.message, 500)
            )
        }
        await course.save();
        
        res.status(200).json({
            success:true,
            message:'Course created sucesssfully ',
            course,
        })
   
    } 
    
});
/**
 * @UPDATE_COURSE_BY_ID
 */
export const updateCourse = asyncHandler(async (req, res, next)=>{
    try {
        const {id}= req.params;

    const course =  await Course.findByIdAndUpdate(
        id,
        {
            $set:req.body
        },
        {
            runValidators: true
        }
    )   
    if(!course){
        return next (
            new AppError("Course with given id does not exist", 500)
        ) 
    }
    
    } catch (error) {
        return next (
            new AppError(error.message, 500)
        )
    }
    res.status(200).json({
        success:true,
        message:'Course Updated sucesssfully ',
    })
});
/**
 * @DELETE_COURSE_BY_ID
 */
export const removeCourse = asyncHandler(async (req, res, next)=>{
    try {
        const {id }= req.params;
        const course = await  Course.findById(id);
        if(!course){
            return next (
                new AppError("Course with given id does not exist", 500)
            ) 
        }
        
        await Course.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:'Course Removed sucesssfully ',
        })
        
    } catch (error) {
        return next (
            new AppError(error.message, 500)
        )
    }
});
/**
 * @ADD_LECTURE
 */
export const addLectureToCourseById= asyncHandler(async(req, res, next )=>{
    const { title, description} = req.body;

    const {id }= req.params;
    if(!title||! description){
        return next(
            new AppError('Alll fields are required ', 400)
        )
    }

    const course = await Course.findById(id);

    if(!course){
        return next(
            new AppError('course are not exist', 500)
        )
    }

    const lectureData ={
        title,
        description,
        lecture:{}
    }
    if(req.file){
        try {
            const result = await cloudinary.v2.uploader.upload(req.file.path,{
                folder:'lms',
                chunk_size:50000000,
                resource_type:'video'
            });
            if(result){
                lectureData.lecture.public_id=result.public_id;
                lectureData.lecture.secure_url=result.secure_url;
            }
            fs.rm(`uploads/${req.file.filename}`);
        }catch (error) {
            return next(
                new AppError(error.message, 500)
            )
        }
        course.lectures.push(lectureData);
        
        course.numberOfLectures=course.lectures.length;

        await course.save();
        
        res.status(200).json({
            success:true,
            message:' lecture Added sucesssfully ',
            course,
        })
   
    } 

});
/**
 * @Remove_LECTURE
 */
export const removeLecture =asyncHandler( async(req, res, next )=>{
    try {
        const courseId = req.params.courseId;
        const lectureId = req.params.lectureId;

        const course = await Course.findById(courseId);
        if (!course) {
            return next(new AppError('Course not found', 404));
        }

        // Find the index of the lecture in the array
        const lectureIndex = course.lectures.findIndex(
            (lecture) => lecture._id.toString() === lectureId
        );

        if (lectureIndex === -1) {
            return next(new AppError('Lecture not found', 404));
        }
         // Delete the lecture from cloudinary
        await cloudinary.v2.uploader.destroy(
            course.lectures[lectureIndex].lecture.public_id,
            {
            resource_type: 'video',
            }
        );
        // Remove the lecture from the array
        course.lectures.splice(lectureIndex, 1);
        course.numberOfLectures -= 1;
        
        await course.save();

        res.status(200).json({
            success: true,
            message: 'Lecture removed successfully',
        });

    }catch (error) {
        return next (
            new AppError(error.message, 500)
        )
    }
});