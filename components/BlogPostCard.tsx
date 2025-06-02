
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import { CalendarDaysIcon, UserCircleIcon, TagIcon } from './icons/HeroIcons';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <article className="bg-white dark:bg-[#3E322B] shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col h-full">
        {post.imageUrl && (
          <img 
            src={post.imageUrl || `https://picsum.photos/seed/${post.id}/600/300`} 
            alt={post.title} 
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold mb-2 text-[#B0784F] dark:text-[#E0B58A] group-hover:text-[#C5895A] dark:group-hover:text-[#D4A373] transition-colors">
            {post.title}
          </h2>
          <div className="flex items-center text-xs text-[#8A766A] dark:text-[#A39890] mb-3 space-x-3">
            <span className="flex items-center">
              <CalendarDaysIcon className="h-4 w-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <UserCircleIcon className="h-4 w-4 mr-1" />
              {post.author}
            </span>
          </div>
          <p className="text-[#574133] dark:text-[#EFEAE6] text-sm mb-4 flex-grow">
            {post.summary}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              <TagIcon className="h-4 w-4 mr-1 text-[#8A766A] dark:text-[#A39890] self-center" />
              {post.tags.map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-[#F5EADD] dark:bg-[#4A3F37] text-[#B0784F] dark:text-[#D4A373] rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="mt-auto">
            <span className="text-sm font-medium text-[#C5895A] dark:text-[#D4A373] group-hover:underline">
              Read more &rarr;
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;