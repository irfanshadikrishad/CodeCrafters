import chalk from "chalk";
import User from "../models/user-model.js";
import Contact from "../models/contact-model.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select({
      password: 0,
    });
    if (users && users.length !== 0) {
      res.status(200).json(users);
    } else {
      res.status(404).json({ message: "No users found!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[getAllUsers] ${error.message}`));
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (contacts && contacts.length !== 0) {
      res.status(200).json(contacts);
    } else {
      res.status(404).json({ message: "No Contacts!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[getAllContacts] ${error.message}`));
    next(error);
  }
};

export { getAllUsers, getAllContacts };
