import { Router } from "express";
import {
  getAllUsers,
  getAllContacts,
} from "../controllers/admin-controller.js";

const router = Router();

router.route("/users").get(getAllUsers);
router.route("/contacts").get(getAllContacts);

export default router;
