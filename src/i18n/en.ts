// src/i18n/en.ts
export default {
  header: [  
      { title: "Experience", section: "experiencia", url: "#experiencia" },
      { title: "Projects", section: "proyectos", url: "#proyectos" },
      { title: "About Me", section: "sobre-mi", url: "#sobre-mi" },
      { title: "Resume", url: "/CV_NICO_PIOVANO_2024.pdf", download: true }
    ],
  personal: {
    title: "Fullstack Developer",
    subtitle: "+7 years of experience.",
    badge: "Available for work",
  },
  projects: {
    title: "Projects",
    code: "Code",
    preview: "Preview",
    items: [
      {
        title: "ChatQuasar - Live Chat!",
        description: "A chat developed with the latest Vue (Quasar). Multiple users can chat in the same chat. Login and authentication with Gmail and Firebase. Created from scratch with Quasar."
      },
      {
        title: "Weather App",
        description: "Application connected to two APIs (one for cities, another for weather) to check current, daily and weekly weather. Developed with search history. Created from scratch with Vue and Tailwind CSS."
      }
    ]
  },
  experience: {
    title: "Work Experience",
    learning: "Learnings:",
    items: [
      {
        date: "Aug. 2024 - Currently..",
        title: "Fullstack Web Developer",
        company: "Servicios Computables S.A.",
        usos: ['Vue', 'Laravel', 'Docker', 'MySQL'],
        description: "Development of computer systems for different Municipalities of the Argentine Republic.",
        aprendizajes: "Frontend technology improvement. Vue component and state reuse. Improved Docker usage."
      },
      {
        date: "Jun. 2021 - Apr. 2023",
        title: "Fullstack Web Developer",
        company: "Servicios Computables S.A.",
        usos: ['React', 'Laravel', 'Docker', 'MySQL'],
        description: "Development of computer systems for different Municipalities of the Argentine Republic.",
        aprendizajes: "Personal and professional frontend development. React state and hooks management. Unit test development."
      },
      {
        date: "Nov. 2020 - May. 2021",
        title: "Backend Web Developer",
        company: "Creative Coefficient",
        usos: ['Prestashop', 'React', 'Docker'],
        description: "Joint development of administrative panel for an internationally recognized mileage system (Smiles).",
        aprendizajes: "CMS management, direct communication with US clients through daily meetings in English."
      },
      {
        date: "Dec. 2018 - Jan. 2021",
        title: "Fullstack Web Developer",
        company: "CNRT (Ministry of Transport)",
        usos: ['Symfony', 'AngularJS', 'Angular', 'MySQL'],
        description: "Maintenance and development of internal and external systems for short and long distance public transport.",
        aprendizajes: "Started as Trainee. From pure language to Frameworks. Solid foundation in security, data architecture and SQL query optimization."
      }
    ]
  },
  aboutMe: {
    title: "About me 😉",
    paragraphs: [
      {
        before: "I started my programming career in 2016 ",
        strong: "developing with patience, confidence, and a resolute approach",
        after: " to the challenges presented."
      },
      {
        before: "I quickly adapt to new technologies and projects, and I always seek ",
        strong: "pragmatic solutions",
        after: " that allow effective progress, even in challenging environments."
      },
      {
        before: "Additionally, I have traveled and lived in several Latin American countries while working in hostels, which strengthened my ",
        strong: "social skills, adaptability, and ability to collaborate",
        after: " with diverse teams."
      },
      {
        before: "My current goals include expanding into the freelance field and applying my ",
        strong: "adaptable and results-driven approach",
        after: " to generate concrete outcomes in each project."
      }
    ]
  },
  footer: {
    developed: "Developed with",
    downloadCV: "Download CV 2026"
  },
  browserModal: {
    title: "Browser Recommendation",
    message: "This page contains 3D visual effects that work better in Mozilla Firefox.",
    recommendation: "For an optimal experience, I recommend using Firefox.",
    downloadFirefox: "Download Firefox",
    continue: "Continue"
  },
  seo: {
    title: "Nico Piovano Portfolio - Web Developer with +7 years of experience",
    description: "Hire Nico to create your web or mobile application. Web Developer."
  }
}