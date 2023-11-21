import chalk from "chalk";

const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = err.errors[0].message;
    console.log(chalk.magenta(`[validate] ${message}`));
    res.status(400).json({ error: message });
  }
};

export default validate;
