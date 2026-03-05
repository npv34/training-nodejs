import { Request, Response } from "express";
import { errorHandler, successHandler } from "../../untils/responseHandler";
import { UserService } from "../../services/UserService";
import jwt from "jsonwebtoken";

class AuthApiController {
    static async login(request: Request, response: Response) {
        try{

            const {email, password} = request.body;
            const user = await UserService.findByEmail(email);
            if(!user) {
                return response.json(errorHandler(404, "user not found"));
            }
            // bo qua kiem tra password
            const token = jwt.sign({ user: user }, process.env.JWT_SECRET || "secretKey", { expiresIn: "1h" });
            return response.json(successHandler(200, "login success", {token: token}));

        }catch(e: any){
            return response.json(errorHandler(500, e.message));
        }
        
    }
}

export default AuthApiController