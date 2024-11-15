// models/Job.js
class Job {
  constructor() {
    this.jobs = [
      {
        id: 1,
        category: "Software Development",
        designation: "Full Stack Developer",
        location: "Remote, USA",
        companyName: "Google",
        salary: "100,000-130,000 USD",
        applicationDeadline: "2024-12-15",
        requiredSkills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
        openings: 3,
        postedDate: "2024-11-01T10:30:00",
        description:
          "As a Full Stack Developer at Google, you will work on both frontend and backend development, designing robust web applications that deliver seamless user experiences. You'll collaborate with cross-functional teams and drive the development of scalable applications using modern frameworks.",
        applicants: [
          {
            name: "Alice Johnson",
            email: "alice@example.com",
            resume: "alice_resume.pdf",
          },
          {
            name: "Bob Smith",
            email: "bob@example.com",
            resume: "bob_resume.pdf",
          },
        ],
      },
      {
        id: 2,
        category: "Data Science",
        designation: "Data Analyst",
        location: "New York, NY",
        companyName: "Amazon",
        salary: "80,000-100,000 USD",
        applicationDeadline: "2024-12-20",
        requiredSkills: ["Python", "SQL", "Tableau", "Excel", "AWS"],
        openings: 2,
        postedDate: "2024-11-05T12:45:00",
        description:
          "Join Amazon as a Data Analyst to analyze large datasets and uncover insights that guide business decisions. You will use advanced analytics tools to identify trends and patterns, and generate actionable recommendations for our product and marketing teams.",
        applicants: [
          {
            name: "Charlie Brown",
            email: "charlie@example.com",
            resume: "charlie_resume.pdf",
          },
        ],
      },
      {
        id: 3,
        category: "Cybersecurity",
        designation: "Security Engineer",
        location: "San Francisco, CA",
        companyName: "Microsoft",
        salary: "120,000-150,000 USD",
        applicationDeadline: "2025-01-05",
        requiredSkills: ["Python", "AWS", "Firewalls", "Penetration Testing"],
        openings: 1,
        postedDate: "2024-11-10T09:00:00",
        description:
          "As a Security Engineer at Microsoft, you will protect our infrastructure and data by identifying vulnerabilities, performing penetration tests, and implementing secure practices across platforms. This role requires expertise in cybersecurity tools and a proactive approach to threat mitigation.",
        applicants: [],
      },
      {
        id: 4,
        category: "Cloud Computing",
        designation: "Cloud Solutions Architect",
        location: "Seattle, WA",
        companyName: "IBM",
        salary: "110,000-140,000 USD",
        applicationDeadline: "2024-12-25",
        requiredSkills: ["Azure", "GCP", "AWS", "Docker", "Kubernetes"],
        openings: 2,
        postedDate: "2024-11-07T14:00:00",
        description:
          "At IBM, the Cloud Solutions Architect designs scalable and secure cloud architectures for enterprise clients. This role involves creating cloud migration plans, optimizing resource utilization, and ensuring secure deployments on multi-cloud platforms.",
        applicants: [
          {
            name: "Diana Prince",
            email: "diana@example.com",
            resume: "diana_resume.pdf",
          },
          {
            name: "Bruce Wayne",
            email: "bruce@example.com",
            resume: "bruce_resume.pdf",
          },
        ],
      },
      {
        id: 5,
        category: "Machine Learning",
        designation: "Machine Learning Engineer",
        location: "Austin, TX",
        companyName: "Apple",
        salary: "130,000-160,000 USD",
        applicationDeadline: "2025-01-10",
        requiredSkills: [
          "Python",
          "TensorFlow",
          "PyTorch",
          "AWS Sagemaker",
          "Data Preprocessing",
        ],
        openings: 4,
        postedDate: "2024-11-09T08:30:00",
        description:
          "Apple is seeking a Machine Learning Engineer to develop and optimize machine learning models for applications across our ecosystem. You'll be working with vast datasets, leveraging the latest ML techniques to deliver innovative solutions that enhance user experiences.",
        applicants: [
          {
            name: "Clark Kent",
            email: "clark@example.com",
            resume: "clark_resume.pdf",
          },
          {
            name: "Lois Lane",
            email: "lois@example.com",
            resume: "lois_resume.pdf",
          },
        ],
      },
    ];
  }

  createJob(job) {
    this.jobs.push(job);
  }

  getAllJobs() {
    return this.jobs;
  }

  getJobById(id) {
    return this.jobs.find((job) => job.id === id);
  }

  addApplicant(jobId, applicant) {
    const job = this.getJobById(jobId);    
    job.applicants.push(applicant);
  }
}

module.exports = new Job();
