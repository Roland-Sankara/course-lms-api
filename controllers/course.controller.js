import { PrismaClient } from "@prisma/client";
import {StatusCodes} from 'http-status-codes';
import 'dotenv/config'

const prisma = new PrismaClient();

async function createCourse(req,res){
    let course = await prisma.course.create({
        data: req.body
    })
    res.status(StatusCodes.CREATED).json(course)
}

export default createCourse;