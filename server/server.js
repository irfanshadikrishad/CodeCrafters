import dotenv from "dotenv";
import chalk from "chalk";
import express from "express";
import cors from "cors";
import router from "./router/auth-router.js";
import contactForm from "./controllers/contact-controller.js";
import database from "./utils/db.js";
import errorMiddleware from "./middlewares/error-middleware.js";
import service from "./router/service-router.js";
import adminRouter from "./router/admin-router.js";

database();
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://code-crafters-basement.vercel.app",
    methods: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use("/api/auth", router);
app.use("/api/form", contactForm);
app.use("/api/data", service);
app.use("/api/admin", adminRouter);
app.use(errorMiddleware);

// SERVER Status
app.get("/", (req, res) => {
  res.status(200).json({ status: 200 });
});

app.listen(process.env.PORT, () => {
  console.log(chalk.cyan(`[${process.env.PORT}] listening`));
});
