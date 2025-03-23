import express from "express";
import { getAllDoctorsList } from "../controllers/doctorController.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", getAllDoctorsList);

export default doctorRouter;
