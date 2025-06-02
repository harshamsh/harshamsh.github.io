
import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: "blog1",
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks: A Deep Dive",
    date: "2024-07-15",
    author: "Harsha Musunuru",
    summary: "Explore the power of React Hooks, understand their mechanics, and learn best practices for building efficient and maintainable functional components.",
    content: `React Hooks have revolutionized how we write components. useState, useEffect, useContext, and custom hooks provide powerful tools for managing state and side effects.
    
In this post, we'll cover:
- The motivation behind Hooks.
- Detailed explanations of common Hooks.
- How to create your own custom Hooks.
- Common pitfalls and how to avoid them.
    
Let's start with useState... (imagine more content here)`,
    tags: ["React", "JavaScript", "Frontend"],
    imageUrl: "https://picsum.photos/seed/reacthooks/600/300",
  },
  {
    id: "blog2",
    slug: "tailwind-css-for-modern-uis",
    title: "Building Modern UIs with Tailwind CSS",
    date: "2024-06-28",
    author: "Harsha Musunuru",
    summary: "Discover how Tailwind CSS, a utility-first CSS framework, can accelerate your UI development workflow and help you create beautiful, responsive designs.",
    content: `Tailwind CSS offers a different approach to styling. Instead of writing custom CSS, you apply pre-defined utility classes directly in your HTML.
    
Benefits include:
- Rapid prototyping and development.
- Highly customizable and configurable.
- Consistent styling across your application.
- Smaller CSS bundle sizes when used with PurgeCSS.
    
We'll look at practical examples and how to set up Tailwind in your project. (imagine more content here)`,
    tags: ["Tailwind CSS", "CSS", "Web Design"],
    imageUrl: "https://picsum.photos/seed/tailwindcss/600/300",
  },
  {
    id: "blog3",
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for Robust Applications",
    date: "2024-05-10",
    author: "Harsha Musunuru",
    summary: "Leverage the full potential of TypeScript by following these best practices for type safety, code organization, and maintainability in large-scale applications.",
    content: `TypeScript adds static typing to JavaScript, helping catch errors early and improve code quality.
    
Key practices to consider:
- Use strict mode and enable all compiler checks.
- Prefer interfaces for object shapes and types for unions/intersections.
- Leverage utility types like Partial, Required, Pick, Omit.
- Write clear and effective JSDoc comments for types.
    
Adopting these practices will lead to more reliable and easier-to-understand codebases. (imagine more content here)`,
    tags: ["TypeScript", "JavaScript", "Software Engineering"],
    imageUrl: "https://picsum.photos/seed/typescript/600/300",
  }
];

// To add a new blog post:
// 1. Create a new object similar to the ones above.
// 2. Ensure 'id' and 'slug' are unique.
// 3. Add it to this 'blogPosts' array.
// 4. If the application is live, you'll need to rebuild and redeploy.
//
// For true "no code update" extensibility, this data would be fetched
// from a Headless CMS (e.g., Strapi, Contentful, Sanity) or a custom backend API.
// The React components (BlogListPage, BlogDetailPage) would then use
// useEffect and fetch/axios to load this data dynamically.
