import express from "express";
import { GetAllContacts, UpdateContacts } from "../controllers/adminController.js";
import { isAdmin, isAuthenticated } from "../middlewares/authMiddleware.js";
import { addBanquetHall, deleteBanquetHall, editBanquetHall, viewBanquetHalls } from "../controllers/adminController.js";

const router = express.Router();

router.get("/contacts", isAuthenticated, isAdmin, GetAllContacts);
router.put("/contacts/:Qid", isAuthenticated, isAdmin, UpdateContacts);
router.post("/banquet-halls", isAuthenticated, isAdmin, addBanquetHall);
router.delete("/banquet-halls/:id", isAuthenticated, isAdmin, deleteBanquetHall);
router.put("/banquet-halls/:id", isAuthenticated, isAdmin, editBanquetHall);
router.get("/banquet-halls", isAuthenticated, isAdmin, viewBanquetHalls);






export default router;