import express from "express";
import tryCatchWrapper from "../../utils/tryCatchWrapper";
import signUp from "./controllers/signUp";

const authController = express.Router();

authController.post("/auth/sign-up", tryCatchWrapper(signUp));

export default authController;
