import { response } from "express";
import Contact from "../models/contactModel.js";
import sendEmail from "../utils/sedEmail.js";
import BanquetHall from "../models/BanquetModel.js";


export const GetAllContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({ message: "All Contacts Fetched", data: contacts });
  } catch (error) {
    next(error);
  }
};

export const UpdateContacts = async (req, res, next) => {
  try {
    const QueryId = req.params.Qid;
    const { status, reply } = req.body;

    const updatedQuery = await Contact.findByIdAndUpdate(
      QueryId,
      {
        status,
        reply,
      },
      { new: true }
    );

    const statusColors = {
      Pending: "#f0ad4e",
      Resolved: "#5cb85c",
      Rejected: "#d9534f",
    };
    const mailBody = `
     <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
    <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 30px;">
      <h2 style="color: #333333;">Message Status Notification</h2>

      <p style="margin: 10px 0;"><strong style="color: #555;">Name:</strong> <span style="color: #000;">${
        updatedQuery.name
      }</span></p>

      <p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> <span style="color: #000;">${
        updatedQuery.phone
      }</span></p>

      <p style="margin: 10px 0;"><strong style="color: #555;">Original Message:</strong><br />
        <span style="color: #000;">${updatedQuery.message}</span>
      </p>

      <p style="margin: 10px 0;"><strong style="color: #555;">Festive Flair Reply:</strong><br />
        <span style="color: #000;">${updatedQuery.reply}</span>
      </p>

       <p style="margin: 10px 0;"><strong style="color: #555;">Note:</strong>
        <span style="color: #000;">Please Contact Again if Required.</span>
      </p>

      <p style="margin: 10px 0;">
        <strong style="color: #555;">Status:</strong>
        <span style="display: inline-block; padding: 6px 12px; font-weight: bold; border-radius: 5px; color: #fff; background-color: ${
          statusColors[updatedQuery.status]
        };">
          ${updatedQuery.status}
        </span>
      </p>

      
      <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
        © ${new Date().getFullYear()} Festive Flair Event Planner PVT. LTD. | All rights reserved.
      </p>
    </div>
  </div>
    `;

       await sendEmail(updatedQuery.email, updatedQuery.subject, mailBody);

    res.status(200).json({ message: "Contact Updated", data: updatedQuery });

   
    
  } catch (error) {
    next(error);
  }
};

export const addBanquetHall = async (req, res, next) => {
      try {
        const { hallName, address, capacity, managerName, contactNumber, email, rent, minBookingAmount, featureDescription, photos } = req.body;
        
        if (!hallName || !address || !capacity || !managerName || !contactNumber || !email || !rent || !minBookingAmount || !featureDescription) {
          const error = new Error("All required fields must be provided");
          error.statusCode = 400;
          return next(error);
        }

        const newHall = await BanquetHall.create({
          hallName,
          address,
          capacity,
          managerName,
          contactNumber,
          email,
          rent,
          minBookingAmount,
          featureDescription,
          photos: photos || []
        });
        
        res.status(201).json({ message: "Banquet Hall Added Successfully", data: newHall });
      } catch (error) {
        next(error);
      }
    };

    /**
     * Delete a Banquet Hall by ID
     */
    export const deleteBanquetHall = async (req, res, next) => {
      try {
        const hallId = req.params.id;
        const deletedHall = await BanquetHall.findByIdAndDelete(hallId);
        if (!deletedHall) {
          return res.status(404).json({ message: "Banquet Hall not found" });
        }
        res.status(200).json({ message: "Banquet Hall Deleted", data: deletedHall });
      } catch (error) {
        next(error);
      }
    };

    /**
     * Edit a Banquet Hall by ID
     */
    export const editBanquetHall = async (req, res, next) => {
      try {
        const hallId = req.params.id;
        const updates = req.body;
        const updatedHall = await BanquetHall.findByIdAndUpdate(hallId, updates, { new: true });
        if (!updatedHall) {
          return res.status(404).json({ message: "Banquet Hall not found" });
        }
        res.status(200).json({ message: "Banquet Hall Updated", data: updatedHall });
      } catch (error) {
        next(error);
      }
    };

    /**
     * View all Banquet Halls
     */
    export const viewBanquetHalls = async (req, res, next) => {
      try {
        const halls = await BanquetHall.find();
        res.status(200).json({ message: "All Banquet Halls Fetched", data: halls });
      } catch (error) {
        next(error);
      }
    };