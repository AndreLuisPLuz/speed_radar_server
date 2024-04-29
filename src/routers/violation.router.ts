import { Router } from "express";
import {
    createViolationController,
    listViolationsController,
    checkViolationsUpdateController
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

violationRouter.get(
    "/updateCheck",
    checkViolationsUpdateController
)

export default violationRouter;