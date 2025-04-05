import express from "express";
import {
  getAllDoctorsList,
  loginDoctor,
  getDoctorAppointments,
  appointmentComplete,
  appointmentCancel,
  doctorDashboard,
  getDoctorProfile,
  updateDoctorProfile,
} from "../controllers/doctorController.js";
import authDoctor from "../middlewares/authDoctor.js";

const doctorRouter = express.Router();

doctorRouter.get("/list", getAllDoctorsList);
doctorRouter.post("/login", loginDoctor);
doctorRouter.get("/appointments", authDoctor, getDoctorAppointments);
doctorRouter.post("/complete-appointment", authDoctor, appointmentComplete);
doctorRouter.post("/cancel-appointment", authDoctor, appointmentCancel);
doctorRouter.get("/doctor-dashboard", authDoctor, doctorDashboard);
doctorRouter.get("/doctor-dashboard", authDoctor, getDoctorProfile);
doctorRouter.get("/profile", authDoctor, getDoctorProfile);
doctorRouter.post("/update-profile", authDoctor, updateDoctorProfile);

export default doctorRouter;
