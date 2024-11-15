const auth = (req, res, next) => {
  // Write your code here
  res.locals.user = req.session.userEmail; // You can pass this globally

  if (req.session.userEmail) next();
  else return res.redirect("/login");
};

module.exports = { auth };
