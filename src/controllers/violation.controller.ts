import { Request, Response } from "express";
import {
    createViolationService,
    listViolationsService,
    checkViolationsUpdateService
} from "../services";

const createViolationController = async(
    req: Request,
    res: Response
): Promise<Response> => {

    const violation = await createViolationService(req.body);
    return res.status(201).json(violation);
};

const listViolationsController = async(
    req: Request,
    res: Response
): Promise<Response> => {

    const violations = await listViolationsService();
    return res.status(200).json(violations);
};

const checkViolationsUpdateController = async(
    req: Request,
    res: Response
): Promise<Response> => {

    const hasBeenUpdated = await checkViolationsUpdateService(
        String(req.query.latestViolationClientId)
    );
    return res.status(200).json(hasBeenUpdated);
}

export {
    createViolationController,
    listViolationsController,
    checkViolationsUpdateController
};