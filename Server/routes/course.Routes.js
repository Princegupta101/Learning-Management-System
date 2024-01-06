import {Router} from 'express'

import { getAllCourse, getLecturesByCourseId, createCourse, updateCourse, removeCourse, addLectureToCourseById, removeLecture } from '../controllers/course.controllers.js';
import { authorizedRoles, isLoggedIn } from '../middlewares/auth.middlewares.js';
import upload from '../middlewares/multer.middleware.js';

const router = Router();

router.route('/')
    .get( 
        getAllCourse
    )
    .post(
            isLoggedIn,
            authorizedRoles('ADMIN'),
            upload.single('thumbnail'), 
           createCourse
        );

router.route('/:id')
    .get(
        isLoggedIn ,
        authorizedRoles('ADMIN'),
        getLecturesByCourseId
    )
    .put(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        updateCourse
    )
    .delete(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        removeCourse
    )
    .post(
        // isLoggedIn,
        // authorizedRoles('ADMIN'),
        upload.single('lecture'), 
        addLectureToCourseById
    )
    .delete(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        removeLecture,
    )

export default router;