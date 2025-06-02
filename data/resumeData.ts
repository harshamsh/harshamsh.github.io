
import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "Harsha Musunuru",
  title: "Senior Software Engineer",
  summary: "A highly skilled and motivated software engineer with X+ years of experience in designing, developing, and deploying scalable web applications. Passionate about clean code, innovative solutions, and continuous learning. Proven ability to work in fast-paced, Agile environments and collaborate effectively with cross-functional teams.",
  contact: {
    email: "youremail@example.com",
    linkedin: "linkedin.com/in/yourusername",
    github: "github.com/yourusername",
    portfolio: "yourportfolio.com" // This website
  },
  experience: [
    {
      id: "exp1",
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      dateRange: "Jan 2021 - Present",
      responsibilities: [
        "Led the development of key features for a flagship SaaS product, resulting in a 20% increase in user engagement.",
        "Mentored junior engineers, fostering a culture of knowledge sharing and growth.",
        "Designed and implemented RESTful APIs for a microservices architecture.",
        "Optimized application performance, reducing page load times by 30%.",
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
    },
    {
      id: "exp2",
      title: "Software Engineer",
      company: "Innovatech Ltd.",
      dateRange: "Jun 2018 - Dec 2020",
      responsibilities: [
        "Developed and maintained web applications using Angular and Java Spring Boot.",
        "Collaborated with product managers and designers to translate requirements into technical specifications.",
        "Participated in code reviews and contributed to improving code quality standards.",
        "Integrated third-party APIs to extend application functionality."
      ],
      technologies: ["Angular", "Java", "Spring Boot", "MySQL", "Jenkins"]
    }
  ],
  education: [
    {
      id: "edu1",
      degree: "M.S. in Computer Science",
      institution: "University of Advanced Technology",
      dateRange: "2016 - 2018",
      details: "Specialization in Software Engineering. Thesis on 'Scalable Cloud Architectures'."
    },
    {
      id: "edu2",
      degree: "B.S. in Information Technology",
      institution: "State College",
      dateRange: "2012 - 2016",
      details: "Graduated Magna Cum Laude."
    }
  ],
  skills: {
    programmingLanguages: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
    frameworksLibraries: ["React", "Angular", "Vue.js", "Node.js", "Express.js", "Spring Boot", ".NET Core"],
    toolsPlatforms: ["Git", "Docker", "Kubernetes", "AWS", "Azure", "Jenkins", "JIRA"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    others: ["Agile Methodologies", "Microservices", "CI/CD", "RESTful APIs", "GraphQL"]
  }
};
