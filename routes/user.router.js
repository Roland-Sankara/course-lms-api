import express from "express";
import { getToken, getUsers } from "../controllers/user.controller.js";
import checkRequestForAuthToken from "../helper-functions/jwt-auth.js";

const userRouter = express.Router();

userRouter.get("/",checkRequestForAuthToken,getUsers);
userRouter.get("/token", getToken);

export default userRouter;
