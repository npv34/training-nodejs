
import express, { Router, Request, Response } from "express";
import { UserApiController } from "../controllers/api/UserApiController";

const apiRouter: Router = express.Router();

apiRouter.get("/users", UserApiController.getAllUser);
apiRouter.post("/users", UserApiController.storeUser);

export default apiRouter;