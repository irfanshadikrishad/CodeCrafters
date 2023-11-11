import express from "express";
import home, { register } from "../controllers/auth-controller.js";

const router = express.Router();

router.route("/").get(home);
router.route("/register").post(register);

export default router;
