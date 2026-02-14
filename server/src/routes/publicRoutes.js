import express from "express";
import { ContactUs, getBanquetHalls, getCateringServices } from "../controllers/publicController.js";


const router = express.Router();

router.post("/contactus", ContactUs);
router.get("/banquet-halls", getBanquetHalls);
router.get("/catering-services", getCateringServices);


export default router;