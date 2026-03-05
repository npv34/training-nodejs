import { Request, Response } from "express";
import { UserService } from "../../services/UserService";
import { successHandler, errorHandler } from "../../untils/responseHandler";

export class UserApiController {
    static async getAllUser(request: Request, response: Response) {
        try {
            const listUser = await UserService.getAll();
            return response.json(successHandler(200, "success", listUser));
        } catch (e: any) {
            return response.json(errorHandler(500, e.message));
        }

    }

    static async storeUser(request: Request, response: Response) {
        try {
            await UserService.createNewUser(request.body);
            return response.json(successHandler(200, "create user success"));
        } catch (e: any) {
            return response.json(errorHandler(500, e.message));
        }
    }

    static async deleteUser(request: Request, response: Response) {
        try {
            await UserService.deleteById(Number(request.params.id));
            return response.json(successHandler(200, "delete user success"));
        } catch (e: any) {
            return response.json(errorHandler(500, e.message));
        }
    }
}