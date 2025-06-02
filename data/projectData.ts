
import { Project } from '../types';

export const projectData: Project[] = [
  {
    id: "proj1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product listings, shopping cart, and payment integration. Built with a focus on scalability and user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/seed/ecommerce/600/400",
    liveUrl: "#", // Replace with actual URL
    repoUrl: "#", // Replace with actual URL
    year: "2023"
  },
  {
    id: "proj2",
    title: "Task Management App",
    description: "A collaborative task management application that allows users to create, assign, and track tasks within teams. Features real-time updates and a Kanban board view.",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    imageUrl: "https://picsum.photos/seed/taskapp/600/400",
    liveUrl: "#",
    repoUrl: "#",
    year: "2022"
  },
  {
    id: "proj3",
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets. Implemented various chart types and data filtering capabilities using D3.js and React.",
    technologies: ["React", "D3.js", "Python", "Flask", "Pandas"],
    imageUrl: "https://picsum.photos/seed/dataviz/600/400",
    repoUrl: "#",
    year: "2021"
  },
   {
    id: "proj4",
    title: "Personal Blog Engine",
    description: "A lightweight and fast personal blog engine built with a static site generator. Supports Markdown for content creation and easy deployment.",
    technologies: ["Next.js", "Markdown", "Vercel", "TypeScript"],
    imageUrl: "https://picsum.photos/seed/blogengine/600/400",
    liveUrl: "#",
    repoUrl: "#",
    year: "2024"
  }
];
