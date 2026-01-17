import express, { Router, Request, Response } from "express";
import { request } from "node:http";
import AuthController from "../controllers/AuthController";

const router: Router = express.Router();

router.get("/", (resquest: Request, response: Response) => {
    response.render("home", {name: "Quan"})
})

router.get("/login", AuthController.showFormLogin)
router.post("/login", AuthController.handleSubmitLogin)


router.get("/register", AuthController.showFormRegister)

router.get("/users/:id", (request: Request, response: Response) => {
    const {id} = request.params;
    response.render("users/detail", {idUser: id})
})

export default router;