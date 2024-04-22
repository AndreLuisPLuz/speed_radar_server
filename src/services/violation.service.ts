import { Violation } from "../migrations";
import { IViolationCreatePayload } from "../contracts";
import { AppDataSource } from "../data-source";

import { AppError } from "../errors";

const createViolationService = async(
    payload: IViolationCreatePayload
): Promise<Violation> => {

    const violationRepo = AppDataSource.getRepository(Violation);
    const violation = violationRepo.create(payload);

    await violationRepo.save(violation);

    return violation;
};

const listViolationsService = async(): Promise<Violation[]> => {
    const violationRepo = AppDataSource.getRepository(Violation);
    const violations = await violationRepo.find();

    return violations;
};

export {
    createViolationService,
    listViolationsService
};