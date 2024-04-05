import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import 'dotenv/config';

function checkRequestForAuthToken(req, res, next) {
  // console.log(req.headers)
  if (req.headers.authorization) {
    let authHeader = req.headers.authorization;
    let token = authHeader.split(" ")[1];

    if (token) {
      // Verify if the token is authentic
      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) {
          res.status(StatusCodes.FORBIDDEN).send("Invalid Token Provided");
        } else {
          req.tokenData = decodedToken
          next();
        }
      });
    } else {
      res.status(StatusCodes.BAD_REQUEST).send("Auth Token Is Missing");
    }
  } else {
    res.status(StatusCodes.BAD_REQUEST).send("Missing Authorization Header");
  }
}

export default checkRequestForAuthToken;
