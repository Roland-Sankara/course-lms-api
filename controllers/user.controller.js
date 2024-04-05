import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import {StatusCodes} from 'http-status-codes';
import 'dotenv/config'

const prisma = new PrismaClient();

async function getUsers(req, res) {
  const users = await prisma.user.findMany();
  res.status(StatusCodes.OK).json(users);
}

function getToken(req, res) {
  // create the token
  let userData = { name: "Ray Kevin", age: 30, userId: "Some_12" };
  let token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: "24h" });
  res.status(StatusCodes.CREATED).json(token);
}

export { getToken, getUsers };
