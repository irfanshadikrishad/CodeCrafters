import dotenv from "dotenv";
import chalk from "chalk";
import express from "express";
import router from "./router/auth-router.js";
import contactForm from "./controllers/contact-controller.js";
import database from "./utils/db.js";
import errorMiddleware from "./middlewares/error-middleware.js";

database();
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/form", contactForm);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.status(200).send("hello, express");
});

app.listen(process.env.PORT, () => {
  console.log(chalk.cyan(`[${process.env.PORT}] listening`));
});
