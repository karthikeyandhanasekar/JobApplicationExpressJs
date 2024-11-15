var express = require("express");
var router = express.Router();
const { auth } = require("../middleware/auth");
const path = require("path");
const fs = require("fs");

/* GET home page. */
const userController = require("../controllers/userController");
router.get("/", (req, res) => {
  return res.render("landing", { layout: true });
});

router.get("/register", (req, res) => {
  return res.render("register", { layout: true, errors: null });
});

router.get("/resumes/uploads/:filename", (req, res) => {
  const filePath = path.resolve("uploads", req.params.filename);

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${req.params.filename}"`
    );
    res.sendFile(filePath);
  } else {
    res.status(404).send("File not found");
  }
});
router.get("/apply/:jobId", auth, (req, res) => {
  const { jobId } = req.params;
  return res.render("apply", {
    layout: true,
    errors: null,
    success: null,
    applicant: { id: jobId },
  });
});

router.get("/login", (req, res) => {
  return res.render("login", {
    layout: true,
    errors: null,
    email: null,
    password: null,
  });
});

router.post("/register", userController.registerUser);

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/logout", userController.logoutUser);

const jobController = require("../controllers/jobController");
const { upload } = require("../middleware/storage");
const { applicationValidation } = require("../middleware/registerValidation");

router.get("/jobs", jobController.getAllJobs);
router.get("/jobs/:id", jobController.getSpecificJob);
router.post(
  "/applicants",
  upload.single("resume"),
  applicationValidation,
  jobController.applyToJob
);

router.post("/create", jobController.createJob);

router.get("/logout", userController.logoutUser);
module.exports = router;
