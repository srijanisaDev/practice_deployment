// -----------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR ALL SITE CONTENT
// Edit this file to update any text, link, project, etc. on the site.
// No need to touch the component files.
// -----------------------------------------------------------------------------

export const profile = {
  name: "Srijan",
  tagline: "Python Developer",
  // Place the image at public/profile.jpg. If the file is missing, the UI
  // gracefully falls back to the initials below.
  profilePhoto: "/profile.jpg",
  initials: "S",
  bio:
    "I am a Python developer and Computer Science undergraduate focused on building reliable backend systems and applied AI. I work with frameworks like FastAPI, LangChain, and LangGraph to design APIs and LLM-driven applications that solve real problems. I care about clean architecture, practical performance, and writing code that holds up in production. Outside of coursework, I enjoy turning ideas into working tools and continually deepening my understanding of backend and machine learning engineering.",
};

export const contact = {
  // Public email shown on the site (safe to display).
  email: "srijankumar770@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/srijanisaDev" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/srijan-link/" },
    { label: "LeetCode", url: "https://leetcode.com/u/srijangeek/" },
  ],
};

export const education = [
  {
    institution: "KIIT University, Bhubaneswar",
    degree: "B.Tech, Computer Science and Systems Engineering",
    period: "2023 – 2027",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "C"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "LangChain",
      "LangGraph",
      "FastAPI",
      "SQLAlchemy (async)",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
    ],
  },
  {
    category: "Tools & Platforms",
    items: ["uv", "Redis", "Git", "PostgreSQL (Neon/pgvector)", "Docker"],
  },
];

export const experience = [
  {
    role: "Campaign Coordinator & Volunteer",
    organization: "Lok Prerna Samadhan (NGO)",
    location: "Deoghar, Jharkhand",
    period: "April 15 – June 30, 2026",
    highlights: [
      "Led a community cleanliness campaign in coordination with the office of the Deputy Commissioner of Deoghar, Jharkhand, taking on organizing and leadership responsibilities.",
      "Organized on-ground drives to clean roads and surrounding localities, mobilizing and directing volunteers.",
      "Conducted public awareness sessions educating residents on sanitation and cleanliness practices.",
    ],
  },
];

export const projects = [
  {
    name: "NLP from Scratch",
    description:
      "A complete natural language processing learning website with datasets and code that anyone can run locally or directly on Google Colab, plus full documentation.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    links: [
      { label: "Live Demo", url: "https://nlp.devsrijan.tech" },
      { label: "Web App Code", url: "https://github.com/srijanisaDev/NLP-WebApp" },
      { label: "Notebooks", url: "https://github.com/srijanisaDev/NLP-from-scratch" },
    ],
  },
  {
    name: "Next Word Prediction (LSTM RNN)",
    description:
      "A next-word prediction model built with an LSTM recurrent neural network, served through an interactive web interface.",
    tech: ["Python", "TensorFlow", "Streamlit"],
    links: [
      { label: "Code", url: "https://github.com/srijanisaDev/LSTM_RNN" },
    ],
  },
];

export const achievements = [
  {
    title: "2nd Place — CyberPeace Foundation Hackathon",
    date: "September 2025",
    description: "",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
