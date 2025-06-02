
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { CalendarDaysIcon, UserCircleIcon, TagIcon, ArrowLeftIcon } from '../components/icons/HeroIcons';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />; 
  }

  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => (
      paragraph.trim() === '' ? null : <p key={index} className="mb-4 leading-relaxed text-[#574133] dark:text-[#EFEAE6]">{paragraph}</p>
    )).filter(Boolean);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-[#3E322B] shadow-xl rounded-lg p-6 md:p-10">
      <Link to="/blog" className="inline-flex items-center text-[#C5895A] dark:text-[#D4A373] hover:underline mb-6 group">
        <ArrowLeftIcon className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
        Back to Blog List
      </Link>

      {post.imageUrl && (
        <img 
          src={post.imageUrl || `https://picsum.photos/seed/${post.id}/800/400`} 
          alt={post.title} 
          className="w-full h-64 md:h-80 object-cover rounded-lg mb-8 shadow"
        />
      )}
      
      <h1 className="text-3xl md:text-4xl font-bold text-[#B0784F] dark:text-[#E0B58A] mb-4">{post.title}</h1>
      
      <div className="flex flex-wrap items-center text-sm text-[#8A766A] dark:text-[#A39890] mb-6 space-x-4">
        <span className="flex items-center">
          <CalendarDaysIcon className="h-5 w-5 mr-1.5" />
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span>
        <span className="flex items-center">
          <UserCircleIcon className="h-5 w-5 mr-1.5" />
          By {post.author}
        </span>
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          <TagIcon className="h-5 w-5 mr-1 text-[#8A766A] dark:text-[#A39890] self-center" />
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-[#F5EADD] dark:bg-[#4A3F37] text-[#B0784F] dark:text-[#D4A373] rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}
      
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Custom styling for paragraph text color is applied in renderContent */}
        {renderContent(post.content)}
      </article>
    </div>
  );
};

export default BlogDetailPage;