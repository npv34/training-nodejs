import { Request, Response } from "express";
import { UserService } from "../../services/UserService";

export class UserApiController {
    static async getAllUser(request: Request, response: Response) {
        try {
            const listUser = await UserService.getAll();
            response.json({
                status: 200,
                message: "success",
                data: listUser
            })
        } catch (e) {
            response.json({
                status: 500,
                message: e,
            })
        }

    }

    static async storeUser(request: Request, response: Response) {
        try {
            await UserService.createNewUser(request.body);
            response.json({
                status: 200,
                message: "create user success",
            })
        } catch (e: any) {
            response.json({
                status: 500,
                message: e.message,
            })
        }
    }
}