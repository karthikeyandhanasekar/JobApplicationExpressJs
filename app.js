const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const indexRouter = require("./routes/index");
const expressEjsLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const app = express();

app.use(expressEjsLayouts);
app.set("views", path.resolve("views"));
// Middleware
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layout"); // Set 'layout.ejs' as the default layout
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "your-secret-key", // Change this to a secure random string
    resave: false, // Don't resave session if unmodified
    saveUninitialized: true, // Save session even if it's uninitialized
    cookie: {
      secure: false, // Set to true if using https
      maxAge: 3600000, // Session expiry time (1 hour)
    },
  })
);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  // This will set the user to all views automatically
  res.locals.user = req.session.userEmail;
  next();
});
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
