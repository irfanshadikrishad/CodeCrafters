import express from "express";
import home, { register, login } from "../controllers/auth-controller.js";

const router = express.Router();

router.route("/").get(home);
router.route("/register").post(register);
router.route("/login").post(login);

export default router;
