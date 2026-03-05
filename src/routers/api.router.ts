
import express, { Router, Request, Response } from "express";
import { UserApiController } from "../controllers/api/UserApiController";
import AuthApiController from "../controllers/api/AuthApiController";
import authMiddle from "../middlewares/AuthMiddle";
import permissionMiddle from "../middlewares/PermissionMiddle";

const apiRouter: Router = express.Router();

apiRouter.get("/users", UserApiController.getAllUser);
apiRouter.post("/users", UserApiController.storeUser);
apiRouter.delete("/users/:id", authMiddle, permissionMiddle, UserApiController.deleteUser);

apiRouter.post("/auth/login", AuthApiController.login);

export default apiRouter;