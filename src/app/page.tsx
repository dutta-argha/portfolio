"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const skillSections = [
  {
    title: "Programming Languages",
    items: ["Java", "JavaScript", "C", "Python", "C++"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "React.js"],
  },
  {
    title: "Backend & Database",
    items: ["Firebase", "SQL"],
  },
  {
    title: "Core Computer Science",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems (Basics)",
      "Computer Networks (Basics)",
    ],
  },
  {
    title: "Tools & Technologies",
    items: ["Git & GitHub", "VS Code", "Eclipse (for SAP ABAP)"],
  },
  {
    title: "Cloud & Others",
    items: ["AWS (AI & ML Fundamentals)", "Cybersecurity Basics"],
  },
];

const projectEntries = [
  {
    name: "WildGuard AI",
    summary:
      "A machine learning framework for endangered species population forecasting and conservation risk assessment.",
    points: [
      "Built a multi-task ML system to forecast species population (5 years ahead), classify trends, and assess conservation risk.",
      "Processed real-world wildlife data (1969-2024) and engineered 44+ features for stronger predictions.",
      "Compared ARIMA, LSTM, Prophet, Random Forest, and XGBoost; selected best models using accuracy metrics.",
      "Achieved strong forecasting performance with ARIMA (MAPE ~1.79%).",
      "Developed an interactive Streamlit dashboard for real-time insights and visualization.",
      "Enabled data-driven conservation with early warning signals and risk prioritization.",
    ],
  },
  {
    name: "Shipment Delivery Application",
    summary:
      "A full-stack web application designed to manage and track shipments efficiently.",
    points: [
      "Implemented secure user authentication and authorization.",
      "Enabled real-time shipment tracking.",
      "Integrated online payment functionality.",
      "Built a responsive and user-friendly interface.",
    ],
  },
  {
    name: "Smart Irrigation System for Precision Farming",
    summary:
      "An IoT-based solution aimed at optimizing water usage in agriculture.",
    points: [
      "Automated irrigation decisions based on environmental conditions.",
      "Focused on improving efficiency and reducing water wastage.",
    ],
  },
  {
    name: "Responsive Single-Page Website (GyanGen)",
    summary:
      "A modern and responsive web application with clean UI/UX design.",
    points: [
      "Developed a fully responsive layout across devices.",
      "Focused on performance and smooth user experience.",
    ],
  },
  {
    name: "Enhanced Vertical Windmill System",
    summary:
      "An innovative engineering project focused on improving energy efficiency.",
    points: [
      "Designed to optimize wind energy utilization.",
      "Achieved Rank 1 in a technical project competition.",
    ],
  },
];

const educationEntries = [
  {
    school: "Maulana Abul Kalam Azad University of Technology, West Bengal",
    duration: "2022 - 2026",
    level: "Bachelor of Technology, Information Technology",
    note:
      "Final-year undergraduate focused on software engineering, full-stack development, and core computer science.",
  },
  {
    school: "BHATAR M P HIGH SCHOOL",
    duration: "2021",
    level: "Higher Secondary (Class XII)",
    note: "Board: WBCHSE | Stream: Science | Percentage: 84%",
  },
  {
    school: "BAISNABDANGA SREE GOURANGA VIDYAPITH",
    duration: "2019",
    level: "Secondary (Class X)",
    note: "Board: WBBSE | Percentage: 81.86%",
  },
];

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [photoIndex, setPhotoIndex] = useState(0);

  const profilePhotoCandidates = [
    "/argha-photo.jpg",
    "/argha-photo.jpeg",
    "/argha-photo.png",
    "/argha-photo.webp",
  ];
  const profilePhotoSrc =
    profilePhotoCandidates[photoIndex] ?? "/profile-placeholder.svg";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <main className="site-wrap">
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />

      <header className="topbar section-shell">
        <p className="brand">Argha Dutta</p>
        <div className="nav-actions">
          <nav>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? (
              <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4.2" />
                <path d="M12 2.5v2.2M12 19.3v2.2M4.8 4.8 6.4 6.4M17.6 17.6l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.8 19.2l1.6-1.6M17.6 6.4l1.6-1.6" />
              </svg>
            ) : (
              <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.5 13.6a8 8 0 1 1-8.1-8.1 6.3 6.3 0 0 0 8.1 8.1Z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-layout">
          <div className="hero-copy">
            <h1>Hey, I am Argha</h1>
            <p className="hero-tagline">
              full-stack engineering, databases, and systems. always building.
            </p>
            <p className="lead">
              I am a motivated final-year student from West Bengal, focused on
              programming, problem-solving, and core computer science. I
              believe in consistent growth and I am preparing to contribute
              meaningfully as a software engineer.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button" href="mailto:imarghadutta@gmail.com">
                Email Me
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap" aria-label="Profile photo">
            <div className="hero-photo-ring">
              <Image
                className="hero-photo"
                src={profilePhotoSrc}
                alt="Argha Dutta"
                width={420}
                height={520}
                priority
                onError={() => setPhotoIndex((value) => value + 1)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell panel" id="about">
        <h2>About Me</h2>
        <p>
          I am a motivated and disciplined final-year student aspiring to become
          a software engineer. Coming from a humble background, I have developed
          a strong work ethic and a deep commitment to building a better future
          through technology.
        </p>
        <p>
          My goal is to join an organization where I can continuously learn,
          contribute meaningfully, and grow into a skilled and responsible
          engineer.
        </p>
      </section>

      <section className="section-shell panel" id="education">
        <h2>Education</h2>
        <div className="education-timeline">
          {educationEntries.map((entry) => (
            <article
              key={`${entry.school}-${entry.duration}`}
              className="education-item"
            >
              <span className="edu-dot" aria-hidden="true" />
              <div className="education-card">
                <div className="education-head">
                  <h3>{entry.school}</h3>
                  <p className="edu-duration">{entry.duration}</p>
                </div>
                <p className="edu-degree">{entry.level}</p>
                <p className="edu-note">{entry.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillSections.map((group) => (
            <article key={group.title} className="panel skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectEntries.map((project) => (
            <article key={project.name} className="panel project-card">
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell panel contact" id="contact">
        <h2>Contact</h2>
        <p>Let us connect and build something meaningful together.</p>
        <div className="contact-links">
          <a href="mailto:imarghadutta@gmail.com">imarghadutta@gmail.com</a>
          <a href="https://github.com/dutta-argha" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/argha-dutta/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://x.com/arghatwts" target="_blank" rel="noreferrer">
            X (Twitter)
          </a>
        </div>
      </section>

      <footer className="section-shell footer">
        <p>© {new Date().getFullYear()} Argha Dutta.</p>
      </footer>
    </main>
  );
}
