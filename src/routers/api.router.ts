
import express, { Router, Request, Response } from "express";
import { UserApiController } from "../controllers/api/UserApiController";
import AuthApiController from "../controllers/api/AuthApiController";
import authMiddle from "../middlewares/AuthMiddle";

const apiRouter: Router = express.Router();

apiRouter.get("/users", authMiddle, UserApiController.getAllUser);
apiRouter.post("/users", authMiddle, UserApiController.storeUser);
apiRouter.delete("/users/:id", authMiddle, UserApiController.deleteUser);

apiRouter.post("/auth/login", AuthApiController.login);

export default apiRouter;