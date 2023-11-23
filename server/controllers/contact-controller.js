import chalk from "chalk";
import Contact from "../models/contact-model.js";

const contactForm = async (req, res) => {
  try {
    const response = await req.body;
    await Contact.create(response);
    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.log(chalk.magenta(`[controller] ${error.message}`));
    return res.status(400).json({ message: error.message });
  }
};

export default contactForm;
