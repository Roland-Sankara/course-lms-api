import express from "express";
import { userLogin, getUsers, createUser } from "../controllers/user.controller.js";
import checkRequestForAuthToken from "../helper-functions/jwt-auth.js";
import {isAdmin} from "../helper-functions/middleware.js"

const userRouter = express.Router();

userRouter.get("/",[checkRequestForAuthToken, isAdmin],getUsers);
userRouter.post("/", createUser);
userRouter.post("/login", userLogin);

export default userRouter;
