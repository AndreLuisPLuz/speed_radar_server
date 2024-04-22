import express from "express";
import { violationRouter } from "./routers";

import "express-async-errors";
import "reflect-metadata";

import cors from 'cors'
import 'dotenv/config';

import { handleError } from "./middlewares";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/violation", violationRouter);

app.use(handleError);

export default app;