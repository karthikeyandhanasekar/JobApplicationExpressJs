const { body, validationResult } = require("express-validator");

const registerValidation = async (req, res, next) => {
  const rules = [
    body("name").notEmpty().withMessage("Full name is required"),
    body("email")
      .isEmail()
      .withMessage("Enter a valid email address")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];
  await Promise.all(
    rules.map((rule) => {
      return rule.run(req);
    })
  );
  // Check validation results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send(errors);
  }
  next();
};

const applicationValidation = async (req, res, next) => {
  const rules = [
    body("id").notEmpty().withMessage("Application ID is required"),
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("contact")
      .isLength({ min: 10, max: 10 })
      .isNumeric()
      .withMessage("Contact number must be a valid 10-digit number"),
    body("resume").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("Resume is required");
      } else if (!req.file.originalname.toLowerCase().endsWith(".pdf"))
        throw new Error("Resume must be a PDF file");
      else return true;
    }),
  ];
  await Promise.all(
    rules.map((rule) => {
      return rule.run(req);
    })
  );
  const { name, email, contact } = req.body;
  // Check validation results
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("apply", {
      layout: true,
      errors: errors,
      success: null,
      applicant: { id, name, email, contact, resume: req.file },
    });
  }
  next();
};

module.exports = { applicationValidation, registerValidation };
