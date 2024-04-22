import { Request, Response } from "express";
import {
    createViolationService,
    listViolationsService
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

export {
    createViolationController,
    listViolationsController
};