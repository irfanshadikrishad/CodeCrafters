import chalk from "chalk";
import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

const database = () => {
  connect(process.env.MONGO)
    .then(() => {
      console.log(chalk.cyan(`[database] connected`));
    })
    .catch((error) => {
      console.log(chalk.yellow(`[database] ${error}`));
    });
};

export default database;
