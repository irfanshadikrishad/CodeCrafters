import chalk from "chalk";
import express from "express";
import router from "./router/auth-router.js";

const app = express();
app.use("/api/auth", router);
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("hello, express");
});

app.listen(PORT, () => {
  console.log(chalk.cyan(`[${PORT}] listening`));
});
