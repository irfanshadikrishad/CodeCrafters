import { Router } from "express";
import {
  getAllUsers,
  getAllContacts,
  deleteUser,
  deleteMessage,
  getSingleUser,
  updateUser,
} from "../controllers/admin-controller.js";

import authMiddleware from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

const router = Router();

router
  .route("/users")
  .get(authMiddleware, getAllUsers)
  .delete(authMiddleware, adminMiddleware, deleteUser);
router
  .route("/contacts")
  .get(authMiddleware, getAllContacts)
  .delete(authMiddleware, adminMiddleware, deleteMessage);

router
  .route("/users/:id")
  .get(authMiddleware, adminMiddleware, getSingleUser)
  .patch(authMiddleware, adminMiddleware, updateUser);

export default router;
