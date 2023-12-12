import express from "express";
import services from "../controllers/service-controller.js";

const router = express.Router();

router.route("/service").get(services);

export default router;
