// controllers/userController.js
const User = require("../model/User.js");

exports.registerUser = (req, res) => {
  // Register logic with validation
  const { name, email, password } = req.body;
  const id = User.getUsersLength() + 1;
  User.register({
    id,
    name,
    email,
    password,
  });
  return res.redirect("/login");
};

exports.loginUser = (req, res) => {
  // Login logic with session management
  const { email, password } = req.body;
  console.log(User.validateLogin(email, password));

  if (User.validateLogin(email, password)) {
    req.session.userEmail = email;
    res.locals.user = email; // You can pass this globally
    return res.redirect("/jobs");
  }
  return res.render("login", {
    layout: true,
    email,
    password,
    errors: [{ msg: "Invalid User Creditionals." }],
  });
};

exports.logoutUser = (req, res) => {
  req.session.destroy();
  return res.redirect("/login");
};
