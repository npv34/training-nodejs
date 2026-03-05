
import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../untils/responseHandler";
import jwt from "jsonwebtoken";
import { UserService } from "../services/UserService";

const authMiddle = (request: Request, response: Response, next: NextFunction) => {
    const token = request.headers.authorization;
    const tokenString = token?.split(" ")[1];
    if (!tokenString) {
        return response.json(errorHandler(401, "unauthorized"));
    }
    jwt.verify(tokenString, process.env.JWT_SECRET || "secretKey", async function (err, decode: any) {
        if (err) {
            return response.json(errorHandler(401, "unauthorized"));
        }
        // kiem tra xem user trong decode co ton tai trong he thong khong
        const user = await UserService.findByEmail(decode.user.email);
        console.log(user);
        if (!user) {
            return response.json(errorHandler(401, "unauthorized"));
        }
        response.locals.user = user;
        next();
    })
}

export default authMiddle;
