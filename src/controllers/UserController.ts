import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController{
    
    static async showUserList(request: Request, response: Response) {
        const listUser = await UserService.getAll();
        console.log(listUser);
        response.render("users/list", { users: listUser});
    }

    static async deleteUser(request: Request, response: Response) {
        try{
            UserService.deleteById(request);
            response.redirect("/users")
        }catch(err) {
            response.redirect("/404")
        }
    }
}