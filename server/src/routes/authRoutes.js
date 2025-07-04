import express from 'express';
import { RegisterUser,LoginUser,LogoutUser,UpdateUser } from "../controllers/authcontroller.js";
import { sample } from "../middlewares/authMiddleware.js";
const router= express.Router();
router.post("/register",RegisterUser);
router.post("/login",sample,LoginUser);
router.get("/logout",sample,LogoutUser);
router.put("/update",sample,UpdateUser);
export default router;