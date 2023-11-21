import express from "express";
import home, { register, login } from "../controllers/auth-controller.js";
import validate from "../middlewares/validate-middleware.js";
import signupSchema from "../validators/auth-validator.js";

const router = express.Router();

router.route("/").get(home);
router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);

export default router;
