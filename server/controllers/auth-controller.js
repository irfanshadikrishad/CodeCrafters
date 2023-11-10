import chalk from "chalk";

const home = async (req, res) => {
  try {
    res.status(200).send("auth-router");
  } catch (error) {
    console.log(chalk.yellow(error));
  }
};

const register = async (req, res) => {
  try {
    res.status(200).send("auth-register");
  } catch (error) {
    console.log(chalk.yellow(error));
  }
};

export default home;
export { register };
