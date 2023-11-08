import chalk from "chalk";
import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("hello, express");
});

app.listen(PORT, () => {
  console.log(chalk.cyan(PORT));
});
