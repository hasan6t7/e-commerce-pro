import UserModel from "../models/user.model.js";
import { catchError, errorResponse, successResponse } from "../utils/responseHandler.js";
import { zSchema } from "../utils/zodSchema.js";

export const userRegistration = async (req, res) => {
  try {
    const validationSchema = zSchema.pick({
      name: true,
      email: true,
      password: true,
    });

    const validationData = validationSchema.safeParse(req.body);

    if (!validationData.success) {
      return errorResponse(
        res,
        400,
        "Invalid or missing input field",
        validationData.error.errors
      );
    }

    const { name, email, password } = validationData.data;

    const checkUser = await UserModel.exists({ email });

    if (checkUser) {
      return errorResponse(res, 409, "User Already Registered");
    }

    const newRegister = new UserModel({
      name,
      email,
      password,
    });

    await newRegister.save();

    return successResponse(res, 201, "User registered successfully");
  } catch (error) {
    return catchError(res, error, "Error From User Registration Controller");
  }
};