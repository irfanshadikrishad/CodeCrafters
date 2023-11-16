import dotenv from "dotenv";
import chalk from "chalk";
import User from "../models/user-model.js";
import bcrypt from "bcryptjs";

dotenv.config();
const { hashSync, genSaltSync } = bcrypt;
const salt = genSaltSync(Number(process.env.SALT));

const home = async (req, res) => {
  try {
    res.status(200).send("auth-router");
  } catch (error) {
    console.log(chalk.magenta(error));
  }
};

const register = async (req, res) => {
  try {
    // separeting variables
    const { username, email, phone, password, isAdmin } = await req.body;
    // email check
    await User.findOne({ email: email }).then((data) => {
      if (data) {
        console.log(
          chalk.yellow(`[warning] email already exists: ${data._id}`)
        );
        res.status(400).json({ error: "user already exists" });
      } else {
        // hashing password
        const hashedPassword = hashSync(password, salt);
        // saving to the database
        const user = new User({
          username,
          email,
          phone,
          password: hashedPassword,
          isAdmin,
        });
        user.save().then((registered) => {
          console.log(chalk.cyan(`[registered] ${registered._id}`));
          res.status(201).json({ registered: registered._id });
        });
      }
    });
  } catch (error) {
    console.log(chalk.magenta(`[register] ${error.message}`));
    res.status(400).json({ error: error.message });
  }
};

export default home;
export { register };
