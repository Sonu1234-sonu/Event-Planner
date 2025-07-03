import express from "express";
import { Register,Login,Logout } from "../controllers/authcontroller.js";
import { sample } from "../middlewares/authMiddleware.js";
const router= express.Router();
router.post("/register",Register);
router.post("/login",sample,Login);
router.post("/logout",sample,Logout);
export default router;