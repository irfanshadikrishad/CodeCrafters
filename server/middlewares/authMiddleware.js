import { config } from "dotenv";
import pkg from "jsonwebtoken";
import User from "../models/user-model.js";
import chalk from "chalk";

config();
const { verify } = pkg;

const authMiddleware = async (req, res, next) => {
  try {
    const authorization = await req.header("Authorization");
    const token = await authorization.split(" ")[1];
    const isVerified = verify(token, process.env.SECRET);
    if (!token && !isVerified) {
      return res.status(401).json({ error: "Unauthorized!" });
    } else {
      const user = await User.findOne({ email: isVerified.email }).select({
        password: 0,
      });
      //   custom properties
      req.user = user;
      req.token = token;
      req.userID = user._id;
      // get out from middleware
      next();
    }
  } catch (error) {
    console.log(chalk.magenta(`[error] ${error}`));
    return res.status(401).json({ error: `Unauthorized! - ${error}` });
  }
};

export default authMiddleware;
