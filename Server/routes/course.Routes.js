import {Router} from 'express'

import { getAllCourse, getLecturesByCourseId, createCourse, updateCourse, removeCourse, addLectureToCourseById, removeLecture } from '../controllers/course.controllers.js';
import { authorizedRoles, authorizedSubscriber, isLoggedIn } from '../middlewares/auth.middlewares.js';
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
        // authorizedSubscriber,
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
        isLoggedIn,
        authorizedRoles('ADMIN'),
        upload.single('lecture'), 
        addLectureToCourseById
    );
    router.route('/:courseId/lectures/:lectureId') .delete(
        isLoggedIn,
        authorizedRoles('ADMIN'),
        removeLecture,
    )

export default router;