import cloudinary from 'cloudinary'
import fs from 'fs/promises'

import Course from "../models/course.model.js"
import AppError from "../utils/error.util.js";

const getAllCourse = async (req, res, next)=>{
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
      
}

const getLecturesByCourseId = async (req, res, next)=>{
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
}

const createCourse = async (req, res, next)=>{
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
    
}

const updateCourse = async (req, res, next)=>{
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
}

const removeCourse = async (req, res, next)=>{
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
}

const addLectureToCourseById= async(req, res, next )=>{
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
                folder:'lms'
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

}

const removeLecture = async(req, res, next )=>{

}

export{
    getAllCourse,
    getLecturesByCourseId,
    createCourse,
    updateCourse,
    removeCourse,
    addLectureToCourseById,
    removeLecture,
}