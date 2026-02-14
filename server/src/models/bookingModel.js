import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    banquetHallId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Banquet",
      required: true,
    },
    cateringServiceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Caterer",
      required: false,
    },
    eventType: {
      type: String,
      required: true,
      enum: ["Wedding", "Birthday", "Anniversary", "Corporate", "Other"],
    },
    eventDate: {
      type: Date,
      required: true,
    },
    guestCount: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    advanceAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
      default: "Pending",
    },
    specialRequirements: {
      type: String,
      default: "",
    },
    contactNumber: {
      type: String,
      required: true,
    },
    alternateContact: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
