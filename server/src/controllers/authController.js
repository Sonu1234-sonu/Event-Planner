import User from "../models/userModel.js"
import bcrypt from "bcrypt"
export const RegisterUser = async (req, res, next) => {
    try {

        const { fullName, email, phone, password } = req.body;

        if (!fullName || !email || !phone || !password) {
            const error = new Error("All Feilds Required");
            error.statusCode=400;
            return next(error);
        }


        const existingUser = await User.findOne({ email })
        if (existingUser) {
            const error = new Error("Email Already Register");
            error.statusCode=409;
            return next(error);

        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser = await User.create({
            fullName, email, phone, password:hashedPassword,
        });

        res.status(201).json({ messsage: "Registration Successfull" })
    } catch (error) {
        next(error);
    }
}

export const LoginUser = (req, res) => {
    res.json({ messsage: "User Login Done" });
};

export const LogoutUser = (req, res) => {
    res.json({ messsage: "User Logout Done" });
};
export const UpdateUser = (req, res) => {
    res.json({ messsage: "User Update Done" });
};