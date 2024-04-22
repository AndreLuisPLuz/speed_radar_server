import { Router } from "express";
import {
    createViolationController,
    listViolationsController
} from "../controllers";

const violationRouter = Router();

violationRouter.post(
    "",
    createViolationController
);

violationRouter.get(
    "",
    listViolationsController
);

export default violationRouter;