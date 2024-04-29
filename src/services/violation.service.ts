import { Violation } from "../entities";
import {
    IViolationCreatePayload,
    IViolationCheckUpdateResponse
} from "../contracts";
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
    const violations = await violationRepo.find({
        order: {
            createdAt: "DESC",
        }
    });

    return violations;
};

const checkViolationsUpdateService = async(
    latestViolationClientId: string
): Promise<IViolationCheckUpdateResponse> => {

    const violationRepo = AppDataSource.getRepository(Violation);
    const latestViolation = await violationRepo.findOne({
        order: {
            createdAt: "DESC",
        },
    });

    if (!latestViolation) {
        throw new AppError("Latest server violation not found.");
    }

    return {
        mustFetchAnew: (latestViolation.id != latestViolationClientId)
    };
};

export {
    createViolationService,
    listViolationsService,
    checkViolationsUpdateService
};