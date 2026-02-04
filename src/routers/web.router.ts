import express, { Router, Request, Response } from "express";
import AuthController from "../controllers/AuthController";
import { UserController } from "../controllers/UserController";

const router: Router = express.Router();

router.get("/", (request: Request, response: Response) => {
    response.render("home", { name: "Quan" })
})

router.get("/login", AuthController.showFormLogin)
router.post("/login", AuthController.handleSubmitLogin)


router.get("/register", AuthController.showFormRegister)

router.get("/users/:id/delete", UserController.deleteUser)
router.get("/users", UserController.showUserList)
router.post("/users/create", UserController.createUser)

export default router;