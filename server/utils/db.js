import chalk from "chalk";
import { connect } from "mongoose";

const URI =
  "mongodb+srv://mern-thapa:piTSlZxYKvAqeuOy@mernstack.40km1ck.mongodb.net/?retryWrites=true&w=majority";

const database = () => {
  connect(URI)
    .then(() => {
      console.log(chalk.cyan(`[database] connected`));
    })
    .catch((error) => {
      console.log(chalk.yellow(`[database] ${error}`));
    });
};

export default database;
