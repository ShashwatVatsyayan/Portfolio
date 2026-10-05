/**
 * Centralized Technical Skills Data
 */
export const skillsData = {
  languages: [
    { name: "Python", category: "Core" },
    { name: "Java", category: "OOP" },
    { name: "C++", category: "Systems" },
    { name: "C", category: "Low-Level" },
    { name: "JavaScript", category: "Web" },
    { name: "Swift", category: "Apple Ecosystem" }
  ],
  frontend: [
    { name: "HTML", category: "Semantic Markup" },
    { name: "CSS", category: "Modern Styling" },
    { name: "JavaScript", category: "Interactive ES6+" },
    { name: "React", category: "Component Architecture" }
  ],
  backend: [
    { name: "Node.js", category: "Runtime" },
    { name: "Express.js", category: "REST Framework" }
  ],
  database: [
    { name: "MongoDB", category: "Document Database" },
    { name: "MongoDB Atlas", category: "Cloud Database" }
  ],
  other: [
    { name: "Vite", category: "Build Tooling" },
    { name: "npm", category: "Package Manager" },
    { name: "Docker", category: "Containerization" },
    { name: "FastAPI", category: "Async Python" },
    { name: "TypeScript", category: "Typed JavaScript" },
    { name: "Tailwind CSS", category: "Utility Styling" },
    { name: "JWT Authentication", category: "Security" },
    { name: "Web Workers", category: "Multi-Threading" },
    { name: "REST/API Development", category: "Integration" },
    { name: "Google Gemini APIs", category: "AI Integration" },
    { name: "Git", category: "Version Control" },
    { name: "GitHub", category: "Collaboration" }
  ]
};

if (typeof window !== "undefined") {
  window.skillsData = skillsData;
}
