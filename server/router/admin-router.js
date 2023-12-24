import { Router } from "express";
import {
  getAllUsers,
  getAllContacts,
} from "../controllers/admin-controller.js";

import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.route("/users").get(authMiddleware, getAllUsers);
router.route("/contacts").get(authMiddleware, getAllContacts);

export default router;
