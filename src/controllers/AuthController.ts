import { Request, Response } from "express";

class AuthController {
    static showFormLogin(request: Request, response: Response): void {
        response.render("auth/login")
    }

    static handleSubmitLogin(request: Request, response: Response) {
        const data = request.body;
        response.redirect("/users")
    }

    static showFormRegister(request: Request, response: Response): void {
        response.render("auth/register")
    }
}

export default AuthController;