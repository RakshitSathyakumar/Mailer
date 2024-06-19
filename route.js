import express from "express";
import { sendMailToClient } from "./controller.js";

const app = express.Router();

app.post('/sendMail',sendMailToClient);

export default app;