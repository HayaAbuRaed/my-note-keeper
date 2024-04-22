import express from "express";
import connect from "./config/connection.js";
import dotenv from "dotenv";
import setupMiddleware from "./middlewares/index.middleware.js";

const app = express();

dotenv.config();

setupMiddleware(app);

export default app;

connect();
