// Edit this file to update the whole site. All content comes from the resume and LinkedIn profile.
export const profile = {
  name: "Hudha Farasha V P",
  title: "Entry-level AI Quality Engineer",
  positioning:
    "IT student who builds mobile and web apps, and is now learning to test them: automated testing, API testing and LLM evaluation.",
  about: [
    "",
  ],
  location: "Kozhikode, Kerala, India",
  email: "hudhafarasha97@gmail.com",
  phone: "+91 9895884756",
  linkedin: "https://www.linkedin.com/in/hudhafarasha-vp",
  github: "", // add your GitHub profile URL here; the icon appears automatically
  headline: "ASPIRING SOFTWARE ENGINEER | AI & CYBERSECURITY ENTHUSIAST | MOBILE & WEB APP DEVELOPER",
  intro: "I care about software quality. I build mobile and web apps, and I am learning test automation, API testing and AI evaluation, with a cybersecurity background alongside.",
  resume: "/resume.pdf",
  languages: "English, Malayalam, Hindi",
};

// Shown in the hero as a "test run". status: "pass" = done in projects/coursework, "wip" = currently learning.
export const heroChecks = [
  { status: "pass", text: "builds mobile apps with Flutter and React Native" },
  { status: "pass", text: "stores and queries data with Firebase Firestore, Supabase and SQL" },
  { status: "pass", text: "writes Python and Java with OOP fundamentals" },
  { status: "wip", text: "automates tests with Playwright, Pytest and Appium" },
  { status: "wip", text: "evaluates LLM output with Promptfoo and DeepEval" },
];

export const projects = [
  {
    name: "MindLog – AI-Powered Reflection and Productivity App",
    short: "Journaling with tags, AI summaries, activity timelines, and task, habit and reflection tracking.",
    repo: "", image: "",
    subtitle: "AI-powered reflection and productivity app",
    problem: "Journaling, tasks and habits usually live in separate apps, so patterns in thoughts, emotions and productivity are hard to see.",
    solution: "A journaling app with structured entries, tagging, AI-generated summaries, activity timelines, and combined task, habit and reflection tracking.",
    tech: ["React Native", "Expo", "Supabase"],
    contribution: "Developed the application.",
  },
  {
    name: "Haritham – Smart Waste Management System",
    short: "Flutter app that helps Panchayats organise and improve garbage collection.",
    repo: "", image: "",
    subtitle: "Smart waste management system",
    problem: "Garbage collection in Panchayats needs to be more efficient, and citizens, Haritha Karma Sena workers and the Panchayath need a shared way to coordinate.",
    solution: "A Flutter mobile app backed by Firebase Firestore for storing and retrieving collection data.",
    tech: ["Flutter", "Firebase Firestore"],
    contribution: "Built the system and its Flutter mobile application.",
  },
  {
    name: "Local Economy Operating System",
    short: "Mobile platform connecting local businesses and users for service discovery and booking.",
    repo: "", image: "",
    subtitle: "Mobile platform for local services",
    problem: "Local businesses and nearby users need an easy way to find and transact with each other.",
    solution: "A mobile platform with user onboarding, service listings, booking and interaction features, and real-time updates.",
    tech: ["Mobile app"],
    contribution: "Built the platform and its core features.",
  },
  {
    name: "Personal Portfolio Website",
    short: "Responsive portfolio showcasing projects, skills, certifications, education and profile.",
    repo: "", image: "",
    problem: "A single place to present my profile, projects and skills.",
    solution: "A responsive portfolio website built with HTML, CSS and JavaScript.",
    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Node.js"],
    contribution: "Designed and developed it.",
  },
];

export const experience = [
  {
    role: "Cyber Security and Ethical Hacking Intern",
    org: "Cloudnex Infotech, Kochi, Kerala",
    period: "08 Jun 2026 – 14 Jun 2026",
    points: ["Completed a 7-day internship on cybersecurity concepts and ethical hacking practices."],
  },
  {
    role: "Python for Data Science Workshop",
    org: "IIT Palakkad",
    period: "Feb 2026",
    points: ["Used Python with NumPy and pandas to load, clean and analyse datasets in a hands-on workshop."],
  },
  {
    role: "Cybersecurity Job Simulation",
    org: "Mastercard",
    period: "",
    points: ["Completed a cybersecurity job simulation."],
  },
];

export const skillGroups = [
  { group: "Programming", items: ["Python", "C", "Java"] },
  { group: "Database", items: ["SQL", "Firebase Firestore", "Supabase"] },
  { group: "Development", items: ["Flutter", "React Native", "Expo"] },
  { group: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { group: "Tools", items: ["Git", "GitHub", "VS Code", "Android Studio"] },
  { group: "Security", items: ["Linux", "Kali Linux", "Nmap", "Networking"] },
  { group: "Testing and QA", learning: true, note: "Currently learning, not yet used in a project",
    items: ["Playwright", "Pytest", "Postman", "Appium", "Promptfoo", "DeepEval"] },
];

export const education = [
  { school: "Government Engineering College, Idukki, Kerala", degree: "B.Tech, Information Technology", period: "2023 – 2027", extra: "CGPA 6.88 / 10" },
  { school: "Kunnamangalam Higher Secondary School", degree: "Higher Secondary Education", period: "2020 – 2022", extra: "93%" },
];

export const certifications = [
  "Artificial Intelligence for Cybersecurity",
  "Cloud Security Operations",
  "Cybersecurity with Cloud Computing",
  "Edge Computing in a Cloud Computing World",
  "Building a Cybersecurity Awareness Program",
  "Designing Effective Cybersecurity Tabletop Exercises",
  "Mastercard Cybersecurity Job Simulation",
];
