interface IViolationCreatePayload {
    speedKmH: number;
};

interface IViolationCheckUpdateResponse {
    mustFetchAnew: boolean;
}

export {
    IViolationCreatePayload,
    IViolationCheckUpdateResponse
};