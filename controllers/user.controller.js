import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import {StatusCodes} from 'http-status-codes';
import 'dotenv/config';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function getUsers(req, res) {
  const users = await prisma.user.findMany();
  res.status(StatusCodes.OK).json(users);
}

async function createUser(req, res){
  // Get the user email and other details provided in the req body
  const {email} = req.body
  // Check if we already have a user with that email
  try{
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if(user != null && user.email === email){
      //  if they exist, send response to inform user that email is alread registered
      res.status(StatusCodes.BAD_REQUEST).json({error: "User with email provided already exists"})
    }else{
      console.log("Am inside this")
      // hash password
      let hashedPassword = await bcrypt.hash(req.body.password, 10)

      const newUser = await prisma.user.create({
        data: {...req.body, password: hashedPassword}
      })
      res.status(StatusCodes.CREATED).json({message: "User Created Successfully", newUser})
      
    }
  }
  catch(error){
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
  }        
}


async function userLogin(req, res) {
  // Provided the email and password
  const {email, password} = req.body
  // Check if the there is a user with the given email
  try{
    const user = await  prisma.user.findUnique({
      where:{
        email: email
      }
    })
    // Check if password provided is equal to the one stored in the DB
    if(bcrypt.compareSync(password, user.password)){
      // if password matches, send the user a token
      let userData = { name: user.name, userId: user.id, userRole: user.role };
      let token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: "24h" });
      res.status(StatusCodes.CREATED).json({message: "User Created", token});
    }else{
       // else, send error message
      res.status(StatusCodes.BAD_REQUEST).json({error: "Password or Email is incorrect. Login again"});
    }
         
  }catch(error){
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error: "Password or Email is incorrect. Login again", details:error})
  }

}

export { userLogin, getUsers, createUser };
