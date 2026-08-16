import express from "express"
import { userRegistration } from "../controllers/user.controller.js";


const router = express.Router();

// Registration
router.post("/register", userRegistration);


export default router;