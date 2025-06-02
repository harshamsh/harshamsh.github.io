
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  year: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
  content: string; // Newlines will be converted to paragraphs
  tags?: string[];
  imageUrl?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
  experience: Array<{
    id: string;
    title: string;
    company: string;
    dateRange: string;
    responsibilities: string[];
    technologies?: string[];
  }>;
  education: Array<{
    id: string;
    degree: string;
    institution: string;
    dateRange: string;
    details?: string;
  }>;
  skills: {
    programmingLanguages: string[];
    frameworksLibraries: string[];
    toolsPlatforms: string[];
    databases: string[];
    others?: string[];
  };
  // Add other sections like certifications or awards if needed
}
