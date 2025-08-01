import cloudinary from "../config/cloudinary.js";
import User from "../models/userModel.js";
export const GetProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    if (!currentUser) {
      const error = new Error("User Not Found !! Login Again");
      error.statusCode = 401;
      return next(error);
    }

    res
      .status(200)
      .json({
        message: `Welcome back ${currentUser.fullName}`,
        data: currentUser,
      });
  } catch (error) {
    next(error); 
  }
};
// export const UpdateProfile = async (req, res, next) => {
//   try {
//     const currentUser = req.user;
//     const { fullName, phone } = req.body;

//     if (!currentUser) {
//       const error = new Error("User Not Found !! Login Again");
//       error.statusCode = 401;
//       return next(error);
//     }
//     const photo = req.file;
//     let picture;
//     if (photo) {
//       const b64 = Buffer.from(photo.buffer).toString("base64");
//       const dataURI = `data:${photo.mimetype};base64,${b64}`;

//       const result = await cloudinary.uploader.upload(dataURI, {
//         folder: "eventPlannerPictures",
//         width: 500,
//         height: 500,
//         crop: "fill",
//       });
//       picture = result.secure_url;
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//       currentUser._id,
//       {
//         fullName,
//         phone,
//         photo: picture || currentUser.photo,
//       },
//       { new: true }
//     );

//     res.status(200).json({ message: "Profile Updated", data: updatedUser });
//   } catch (error) {
//     next(error);
//   }
// };
// new code from 
export const DeactivateMail = async (req, res, next) => {
  try {
    const QueryId = req.params.Qid;
    const { status, reply } = req.body;

    const deactivateQuery = await Contact.findByIdAndUpdate(
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
        deactivateQuery.name
      }</span></p>

      <p style="margin: 10px 0;"><strong style="color: #555;">Phone:</strong> <span style="color: #000;">${
        deactivateQuery.phone
      }</span></p>

      <p style="margin: 10px 0;"><strong style="color: #555;">Original Message:</strong><br />
        <span style="color: #000;">${deactivateQuery.message}</span>
      </p>

      <p style="margin: 10px 0;"><strong style="color: #555;">Festive Flair Reply:</strong><br />
        <span style="color: #000;">${deactivateQuery.reply}</span>
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