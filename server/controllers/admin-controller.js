import chalk from "chalk";
import User from "../models/user-model.js";
import Contact from "../models/contact-model.js";

const getAllUsers = async (req, res) => {
  try {
    const isAdmin = await req.user.isAdmin;
    if (isAdmin) {
      const users = await User.find({}).select({
        password: 0,
      });
      if (users && users.length !== 0) {
        res.status(200).json(users);
      } else {
        res.status(404).json({ message: "No users found!" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized! • Access denied!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[getAllUsers] ${error.message}`));
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const isAdmin = await req.user.isAdmin;
    if (isAdmin) {
      const contacts = await Contact.find();
      if (contacts && contacts.length !== 0) {
        res.status(200).json(contacts);
      } else {
        res.status(404).json({ message: "No Contacts!" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized! • Access denied!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[getAllContacts] ${error.message}`));
    next(error);
  }
};

export { getAllUsers, getAllContacts };