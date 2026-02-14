import Contact from "../models/contactModel.js";
import Banquet from "../models/BanquetModel.js";
import Caterer from "../models/CateringModels.js";

export const ContactUs = async (req, res, next) => {
  try {
    const { name, email, subject, message, phone } = req.body;

    if (!name || !email || !subject || !message || !phone) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const newContact = await Contact.create({
      name,
      email,
      subject,
      message,
      phone,
      status: "Pending",
    });

    res.status(201).json({
      message: `Thanks for Contacting Us. You will receive a Response soon at ${newContact.email}`,
    });
  } catch (error) {
    next(error);
  }
};

export const getBanquetHalls = async (req, res, next) => {
  try {
    const banquetHalls = await Banquet.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      message: "Banquet halls retrieved successfully",
      data: banquetHalls,
    });
  } catch (error) {
    next(error);
  }
};

export const getCateringServices = async (req, res, next) => {
  try {
    const cateringServices = await Caterer.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      message: "Catering services retrieved successfully",
      data: cateringServices,
    });
  } catch (error) {
    next(error);
  }
};