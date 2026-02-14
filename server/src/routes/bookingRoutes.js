import express from "express";
import { 
  createBooking, 
  getUserBookings, 
  getAllBookings, 
  updateBookingStatus, 
  deleteBooking 
} from "../controllers/bookingController.js";
import { isAuthenticated, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// User routes
router.post("/create", isAuthenticated, createBooking);
router.get("/user", isAuthenticated, getUserBookings);
router.delete("/:bookingId", isAuthenticated, deleteBooking);

// Admin routes
router.get("/all", isAuthenticated, isAdmin, getAllBookings);
router.put("/:bookingId/status", isAuthenticated, isAdmin, updateBookingStatus);

export default router;
