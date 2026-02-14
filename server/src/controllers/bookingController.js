import Booking from "../models/bookingModel.js";
import Banquet from "../models/BanquetModel.js";
import Caterer from "../models/CateringModels.js";

export const createBooking = async (req, res, next) => {
  try {
    const {
      banquetHallId,
      cateringServiceId,
      eventType,
      eventDate,
      guestCount,
      totalAmount,
      advanceAmount,
      specialRequirements,
      contactNumber,
      alternateContact,
    } = req.body;

    const userId = req.user._id;

    if (!banquetHallId || !eventType || !eventDate || !guestCount || !totalAmount || !advanceAmount || !contactNumber) {
      const error = new Error("All required fields must be provided");
      error.statusCode = 400;
      return next(error);
    }

    // Check if banquet hall exists
    const banquetHall = await Banquet.findById(banquetHallId);
    if (!banquetHall) {
      const error = new Error("Banquet hall not found");
      error.statusCode = 404;
      return next(error);
    }

    // Check if catering service exists (if provided)
    if (cateringServiceId) {
      const cateringService = await Caterer.findById(cateringServiceId);
      if (!cateringService) {
        const error = new Error("Catering service not found");
        error.statusCode = 404;
        return next(error);
      }
    }

    const newBooking = await Booking.create({
      userId,
      banquetHallId,
      cateringServiceId,
      eventType,
      eventDate,
      guestCount,
      totalAmount,
      advanceAmount,
      specialRequirements,
      contactNumber,
      alternateContact,
    });

    res.status(201).json({
      message: "Booking created successfully",
      data: newBooking,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserBookings = async (req, res, next) => {
  try {
    const userId = req.user._id;
    
    const bookings = await Booking.find({ userId })
      .populate("banquetHallId", "hallName address capacity rent")
      .populate("cateringServiceId", "catererName perPlateVeg perPlateNonVeg")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "Bookings retrieved successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find()
      .populate("userId", "fullName email phone")
      .populate("banquetHallId", "hallName address capacity rent")
      .populate("cateringServiceId", "catererName perPlateVeg perPlateNonVeg")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "All bookings retrieved successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBookingStatus = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const { status } = req.body;

    if (!status || !["Pending", "Confirmed", "Cancelled", "Completed"].includes(status)) {
      const error = new Error("Valid status is required");
      error.statusCode = 400;
      return next(error);
    }

    const booking = await Booking.findByIdAndUpdate(
      bookingId,
      { status },
      { new: true }
    ).populate("userId", "fullName email phone")
     .populate("banquetHallId", "hallName address capacity rent")
     .populate("cateringServiceId", "catererName perPlateVeg perPlateNonVeg");

    if (!booking) {
      const error = new Error("Booking not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      message: "Booking status updated successfully",
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBooking = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const userId = req.user._id;

    const booking = await Booking.findOne({ _id: bookingId, userId });
    
    if (!booking) {
      const error = new Error("Booking not found or unauthorized");
      error.statusCode = 404;
      return next(error);
    }

    await Booking.findByIdAndDelete(bookingId);

    res.status(200).json({
      message: "Booking deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
