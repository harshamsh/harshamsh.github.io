import React, { useMemo } from 'react';
import BlogPostCard from '../components/BlogPostCard';
import { blogPosts } from '../data/blogData';
// BlogPost type is implicitly used by blogPosts
// import { BlogPost } from '../types';
import { NewspaperIcon } from '../components/icons/HeroIcons';

const BlogListPage: React.FC = () => {
  // All blog posts are displayed by default now.
  // If filtering by manual tags is desired later, selectedTag and filtering logic can be re-added.
  const filteredBlogPosts = useMemo(() => blogPosts, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#B0784F] dark:text-[#E0B58A] mb-4 flex items-center justify-center">
          <NewspaperIcon className="h-10 w-10 mr-3 text-[#C5895A] dark:text-[#D4A373]" />
          My Blog
        </h1>
        <p className="text-lg text-[#574133] dark:text-[#EFEAE6] max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on software development, technology trends, and my personal learning journey.
        </p>
      </div>

      {/* AI Smart Filters section has been removed */}

      {filteredBlogPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-[#8A766A] dark:text-[#A39890] py-10">
          No blog posts yet. Stay tuned!
        </p>
      )}
       <div className="mt-12 p-6 bg-[#F5F0EB] dark:bg-[#3A2E27]/70 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-[#B0784F] dark:text-[#D4A373] mb-2">Note on Extensibility:</h3>
        <p className="text-sm text-[#574133] dark:text-[#A39890]">
          Currently, blog posts are managed in a local data file (<code>data/blogData.ts</code>). To add new posts, this file needs to be updated and the application redeployed.
        </p>
        <p className="text-sm text-[#574133] dark:text-[#A39890] mt-2">
          For seamless updates without code changes, this section can be integrated with a headless CMS (like Strapi, Contentful, Sanity.io) or a custom backend API. This would allow new posts to be published dynamically.
        </p>
      </div>
    </div>
  );
};

export default BlogListPage;