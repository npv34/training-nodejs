import { NextFunction, Request, Response } from "express";
import { errorHandler } from "../untils/responseHandler";

const permissionMiddle = (request: Request, response: Response, next: NextFunction) => {
    const user = response.locals.user;
    if (!user) {
        return response.json(errorHandler(401, "unauthorized"));
    }
    if(user.role.name !== "admin") {
        return response.json(errorHandler(403, "forbidden"));
    }
    next();
}

export default permissionMiddle;
