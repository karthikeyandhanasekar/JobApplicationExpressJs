// controllers/jobController.js
const Job = require("../model/Job.js");

exports.createJob = (req, res) => {
  // Create job with recruiter session validation
};

exports.getAllJobs = (req, res) => {
  return res.render("job", { layout: true, jobs: Job.getAllJobs() });
};

exports.getSpecificJob = (req, res) => {
  return res.render("jobdetails", {
    layout: true,
    isAuth: req.session.userEmail,
    job: Job.getJobById(Number(req.params.id)),
  });
};

exports.applyToJob = (req, res) => {
  // Apply to job and send confirmation email
  const { id, name, email, contact } = req.body;

  // Access the uploaded file's path from req.file
  const resume = req.file ? req.file.path : null;
  if (!resume) {
    return res.status(400).json({ error: "Resume upload failed." });
  }
  const applicant = { name, email, contact, resume };
  Job.addApplicant(Number(id), applicant);
  console.log(applicant);

  return res.render("apply", {
    layout: true,
    errors: null,
    success: "Applied Successfully",
    applicant: { id, name, email, contact, resume: req.file },
  });
};
