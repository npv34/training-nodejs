import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {

    static async showUserList(request: Request, response: Response) {
        const listUser = await UserService.getAll();
        const listRole = await UserService.getAllRoles();
        response.render("users/list", { users: listUser, roles: listRole });
    }

    static async createUser(request: Request, response: Response) {
        try {
            await UserService.createNewUser(request.body);
            response.redirect("/users");
        } catch (error) {
            response.redirect("/404");
        }
    }

    static async deleteUser(request: Request, response: Response) {
        try {
            UserService.deleteById(Number(request.params.id));
            response.redirect("/users")
        } catch (err) {
            response.redirect("/404")
        }
    }
}