import { Router } from "express";
import { fetchBloodBanksByPinCode } from "../controllers/user.controller.js";

const router = Router();

router.route("/search").post(fetchBloodBanksByPinCode)

export default router