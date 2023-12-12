import chalk from "chalk";
import Service from "../models/service-model.js";

const services = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      res.status(404).json({ message: "No services available." });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(chalk.magenta(`[service-controller] ${error.message}`));
  }
};

export default services;
