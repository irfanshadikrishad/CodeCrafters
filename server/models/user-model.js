import dotenv from "dotenv";
import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import chalk from "chalk";
const { sign } = jwt;
dotenv.config();

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.methods.genJWT = function () {
  try {
    console.log(this);
    return sign(
      {
        id: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.SECRET, // jwt secret
      { expiresIn: "30d" }
    );
  } catch (error) {
    console.log(chalk.magenta(`[genJWT] ${error.message}`));
  }
};

const User = new model("User", userSchema);

export default User;
