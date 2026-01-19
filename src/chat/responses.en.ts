import type { ChatResponse } from "./responses"

export const RESPONSES_EN: Record<string, ChatResponse> = {
  greeting: {
    text: "Hi 👋 I'm Nico. What would you like to know?",
    followUps: [
      "What's your experience?",
      "What technologies do you work with?",
      "What projects have you worked on?",
      "How do you work?",
      "Are you available for projects?"
    ]
  },

  experience: {
    text:
      "I have over 7 years of experience developing real web products, both in teams and independently.",
    followUps: [
      "What type of projects have you worked on?",
      "Do you work remotely?",
      "How many years of experience do you have?",
      "⬅ Back to start"
    ]
  },

  stack: {
    text:
      "I mainly work with Vue, Astro and Tailwind on the frontend, and Laravel with MySQL on the backend. I also use Docker and APIs and have worked with React.js",
    followUps: [
      "Do you use Vue or React?",
      "Do you have fullstack experience?",
      "What technologies do you use in backend?",
      "⬅ Back to start"
    ]
  },

  projects: {
    text:
      "I've worked on various projects: management systems, e-commerce, administrative dashboards and complex web applications. Some projects are in my portfolio.",
    followUps: [
      "Can you show me some projects?",
      "Have you worked on e-commerce?",
      "What type of systems have you developed?",
      "⬅ Back to start"
    ]
  },

  way_of_working: {
    text:
      "I work pragmatically: simple solutions, good communication and focus on delivering real value.",
    followUps: [
      "Do you work in a team?",
      "Do you use agile methodologies?",
      "What's your work process?",
      "⬅ Back to start"
    ]
  },

  availability: {
    text:
      "Yes, I'm available for freelance projects and remote collaborations.",
    followUps: [
      "Full time or part time?",
      "What hours do you work?",
      "Do you work as a freelancer?",
      "⬅ Back to start"
    ]
  },

  // Second level responses
  "experience.projects": {
    text:
      "I've worked on management systems, e-commerce, administrative dashboards and complex web applications for different industries.",
    followUps: [
      "Can you show me some projects?",
      "Have you worked on e-commerce?",
      "⬅ Back to start"
    ]
  },

  "experience.remote": {
    text:
      "Yes, I mainly work remotely. I have experience working with distributed teams and managing my time autonomously.",
    followUps: [
      "How is your remote work?",
      "Do you work in a team?",
      "⬅ Back to start"
    ]
  },

  "experience.years": {
    text:
      "I have over 7 years of professional experience developing web applications. I started in 2016 and since then I've worked on various projects and technologies.",
    followUps: [
      "What technologies do you work with?",
      "What type of projects have you worked on?",
      "⬅ Back to start"
    ]
  },

  "stack.vue_react": {
    text:
      "I mainly work with Vue.js. I prefer Vue for its clear syntax, smooth learning curve and well-structured ecosystem. I also have experience with React.",
    followUps: [
      "What technologies do you use in frontend?",
      "Do you have fullstack experience?",
      "⬅ Back to start"
    ]
  },

  "stack.fullstack": {
    text:
      "Yes, I'm fullstack. I work with Vue/TypeScript on the frontend and Laravel/PHP with MySQL on the backend. I also handle Docker, REST APIs and have experience with third-party integrations.",
    followUps: [
      "What technologies do you use in backend?",
      "Do you work with Docker?",
      "⬅ Back to start"
    ]
  },

  "stack.backend": {
    text:
      "On the backend I mainly work with Laravel (PHP), MySQL for databases, and Docker for containers. I also develop REST APIs and handle integrations with external services.",
    followUps: [
      "Do you have fullstack experience?",
      "Do you work with APIs?",
      "⬅ Back to start"
    ]
  },

  "projects.show": {
    text:
      "You can see some of my projects in the projects section of my portfolio. They include management systems, e-commerce and complex web applications.",
    followUps: [
      "What type of systems have you developed?",
      "Have you worked on e-commerce?",
      "⬅ Back to start"
    ]
  },

  "projects.ecommerce": {
    text:
      "Yes, I've worked on e-commerce projects, developing both frontend and backend, including payment systems, inventory management and administrative panels.",
    followUps: [
      "What technologies did you work with in e-commerce?",
      "Can you show me some projects?",
      "⬅ Back to start"
    ]
  },

  "projects.ecommerce.tech": {
    text:
      "In e-commerce mainly with Prestashop, making complex websites like Smiles",
    followUps: [
      "Can you show me some projects?",
      "Have you worked on e-commerce?",
      "⬅ Back to start"
    ]
  },

  "projects.systems": {
    text:
      "I've developed management systems for different industries: resource administration, real-time metric dashboards, billing systems and inventory management.",
    followUps: [
      "Can you show me some projects?",
      "Have you worked on e-commerce?",
      "⬅ Back to start"
    ]
  },

  "way_of_working.team": {
    text:
      "Yes, I work well in a team. I have experience collaborating with designers, other developers and clients. I value clear communication and constructive feedback.",
    followUps: [
      "Do you use agile methodologies?",
      "Do you work as a freelancer?",
      "What's your work process?",
      "⬅ Back to start"
    ]
  },

  "way_of_working.agile": {
    text:
      "Yes, I work with agile methodologies. I use sprints, follow-up meetings and prioritize incremental value deliveries. I adapt well to different workflows depending on the project.",
    followUps: [
      "Do you work in a team?",
      "What's your work process?",
      "⬅ Back to start"
    ]
  },

  "way_of_working.process": {
    text:
      "My process: first I understand the problem well, then I propose simple and pragmatic solutions, develop iteratively and maintain constant communication with the team or client.",
    followUps: [
      "Do you work in a team?",
      "Do you use agile methodologies?",
      "⬅ Back to start"
    ]
  },

  "availability.fulltime": {
    text:
      "I can work both full time and part time, depending on the project. I'm open to discussing the modality that best fits the project's needs.",
    followUps: [
      "What hours do you work?",
      "Do you work as a freelancer?",
      "⬅ Back to start"
    ]
  },

  "availability.hours": {
    text:
      "I work mainly by objectives. I can work office hours (9-18hs), but I prefer working with flexible hours. I can adapt to different time zones if necessary.",
    followUps: [
      "Full time or part time?",
      "Do you work as a freelancer?",
      "⬅ Back to start"
    ]
  },

  "availability.freelance": {
    text:
      "Yes, I work as a freelancer. I have experience managing projects from start to finish, from planning to delivery, working directly with clients.",
    followUps: [
      "Full time or part time?",
      "What hours do you work?",
      "⬅ Back to start"
    ]
  },

  unknown: {
    text:
      "I can answer questions about my experience, stack, projects and work style. What would you like to know?",
    followUps: [
      "What's your experience?",
      "What technologies do you work with?",
      "What projects have you worked on?",
      "⬅ Back to start"
    ]
  }
}
