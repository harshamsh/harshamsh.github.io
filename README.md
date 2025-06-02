# Personal Portfolio Website

This is a creative personal portfolio website for a software engineer, showcasing a resume, projects, and a blog. It's built with React, TypeScript, and Tailwind CSS.

## Features

*   Responsive design
*   Light and Dark mode with a custom warm brown theme
*   Sections: Home, Resume, Projects, Blog
*   Content managed via data files in `src/data/`

## Tech Stack

*   React 19
*   TypeScript
*   Tailwind CSS (via CDN)
*   React Router

## Prerequisites

*   Node.js (v18.x or higher recommended for local development servers)
*   A modern web browser

## Environment Variables

No specific environment variables are required for the core functionality of this portfolio as it stands.

## Installation

This project is set up to run directly from `index.html` using ES modules imported via CDN. No formal installation of npm packages is strictly required to *run* it as is, but for development or adding a build step, you'd typically initialize a `package.json`.

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-portfolio-repo.git 
    # Replace with your actual repository URL
    cd your-portfolio-repo
    ```

## Development (Serving Static Files)

To run this project locally:
1.  Ensure you have a local HTTP server capable of serving static files from the project's root directory.
    *   **Using `npx serve` (requires Node.js):**
        ```bash
        npx serve .
        ```
    *   **Using Python:**
        If you have Python 3:
        ```bash
        python -m http.server
        ```
        If you have Python 2:
        ```bash
        python -m SimpleHTTPServer
        ```
    *   **Using VS Code Live Server Extension:** If you use VS Code, the "Live Server" extension is a great option.
2.  Open your browser and navigate to the local address provided by the server (e.g., `http://localhost:3000`, `http://localhost:8000`, or `http://127.0.0.1:5500` for Live Server).

## Building for Production

The current setup does not include a bundler (like Vite, Webpack, or Parcel). For production, it's highly recommended to add a build step to:
*   Bundle JavaScript and TypeScript files.
*   Optimize assets (minify HTML, CSS, JS).
*   Enable Tailwind CSS JIT compilation for smaller CSS files.

**If you integrate Vite (Recommended):**
1.  Install Vite and necessary plugins:
    ```bash
    npm install --save-dev vite @vitejs/plugin-react
    # or
    yarn add --dev vite @vitejs/plugin-react
    ```
2.  Create a `vite.config.js` or `vite.config.ts` file.
3.  Update `index.html` to be Vite-compatible (e.g., script type module src="/index.tsx").
4.  Add build scripts to your `package.json`:
    ```json
    {
      "scripts": {
        "dev": "vite",
        "build": "tsc && vite build",
        "preview": "vite preview"
      }
    }
    ```
5.  Then build:
    ```bash
    npm run build
    # or
    yarn build
    ```
This would create a `dist` folder with static assets ready for deployment.

**Without a Bundler (Current State):**
You can deploy the existing files (`index.html`, `*.tsx`, `data/*.ts`, etc.) directly to a static hosting provider.

## Deployment

You can deploy this portfolio to any static site hosting service, such as:

*   Netlify
*   Vercel
*   GitHub Pages
*   AWS S3 + CloudFront

Ensure your hosting provider is configured to:
1.  Serve `index.html` as the entry point.
2.  Handle client-side routing (usually by redirecting all paths to `index.html`).

## Updating Content

The portfolio's content (blog posts, projects, resume data) is managed in TypeScript files within the `src/data/` directory.

### Blog Posts
1.  Navigate to `src/data/blogData.ts`.
2.  Modify the `blogPosts` array. Each post is an object.
3.  Ensure `id` and `slug` are unique for each post.
4.  Commit changes and redeploy.

### Projects
1.  Navigate to `src/data/projectData.ts`.
2.  Modify the `projectData` array. Each project is an object.
3.  Commit changes and redeploy.

### Resume
1.  Navigate to `src/data/resumeData.ts`.
2.  Modify the `resumeData` object.
3.  Commit changes and redeploy.

## Customization

*   **Theme & Styling**: Colors, fonts, and general styling are primarily controlled by Tailwind CSS classes in the `.tsx` components (located in `src/components/`, `src/pages/`, and `App.tsx`). You can adjust these classes or use Tailwind's arbitrary value support (e.g., `bg-[#RRGGBB]`) for custom styling.
*   **Personal Information**:
    *   Update `Your Name`, social media links (GitHub, LinkedIn, Email), and copyright in `src/components/Footer.tsx`.
    *   Replace placeholder "MyPortfolio" and name in `src/components/Navbar.tsx` and `src/pages/HomePage.tsx`.
    *   Update profile image URL in `src/pages/HomePage.tsx`.
    *   Modify contact details and resume content in `src/data/resumeData.ts`.
    *   Change the browser tab title and favicon in `index.html`.
*   **Favicon**: The current favicon is an emoji. Replace the `<link rel="icon" ...>` tag in `index.html` with your own favicon.