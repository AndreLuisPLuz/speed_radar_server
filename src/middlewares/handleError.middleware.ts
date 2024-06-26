import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import "express-async-errors"

export const handleError = (err:Error, req:Request, res:Response, next:NextFunction) => {

    if(err instanceof AppError) {
        res.status(err.statusCode).json({ message: err.message })
    }

    console.log(err)
    return res.status(500).json({ message: "Internal Server Error" })
}