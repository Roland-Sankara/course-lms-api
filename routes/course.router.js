import express from "express";
import createCourse from "../controllers/course.controller.js";
import checkRequestForAuthToken from "../helper-functions/jwt-auth.js";
import {validate, courseSchema} from "../helper-functions/data-validation.js";

const courseRouter = express.Router();

// courseRouter.get("/",checkRequestForAuthToken,);
courseRouter.post("/",validate(courseSchema),createCourse);

export default courseRouter;
