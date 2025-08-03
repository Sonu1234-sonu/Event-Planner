import express from "express";
import { GetAllContacts,UpdateContacts } from "../controllers/adminController.js";
import { isAdmin, Protect } from "../middlewares/authMiddleware.js";
import { addBanquetHall ,deleteBanquetHall,editBanquetHall,viewBanquetHalls} from "../controllers/adminController.js";


const router = express.Router();

router.get("/contacts", Protect, isAdmin, GetAllContacts);
router.put("/contacts/:Qid", Protect, isAdmin, UpdateContacts);
router.post("/banquet", Protect, isAdmin, addBanquetHall);
router.delete("/banquet/:id", Protect, isAdmin, deleteBanquetHall);
router.put("/banquet/:id", Protect, isAdmin, editBanquetHall);
router.get("/banquet/:id", Protect, isAdmin, viewBanquetHalls);






export default router;