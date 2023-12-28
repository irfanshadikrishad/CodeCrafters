import chalk from "chalk";

const adminMiddleware = async (req, res, next) => {
  try {
    const { isAdmin } = await req.user;
    if (isAdmin) {
      next();
    } else {
      res.status(200).json({ message: "Unauthorized!" });
    }
  } catch (error) {
    console.log(chalk.magenta(`[adminMiddleware] ${error.message}`));
    next(error);
  }
};

export { adminMiddleware };
