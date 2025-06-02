
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../components/icons/HeroIcons';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4 py-12">
      {/* <img 
        src="https://picsum.photos/seed/profile/200/200" // Replace with your actual photo
        alt="Harsha Musunuru"
        className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover mb-8 shadow-xl border-4 border-[#C5895A] dark:border-[#D4A373]"
      /> */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#4A3B31] dark:text-[#F0EBE3]">
        Hi, I'm <span className="text-[#C5895A] dark:text-[#D4A373]">Harsha Musunuru</span>
      </h1>
      <p className="text-xl md:text-2xl text-[#574133] dark:text-[#EFEAE6] mb-8 max-w-2xl">
        A passionate Software Engineer specializing in building creative and efficient web solutions. Welcome to my digital space!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-3xl">
        <Link to="/resume" className="group bg-white dark:bg-[#3E322B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-[#B0784F] dark:text-[#E0B58A] mb-2">My Resume</h2>
          <p className="text-[#574133] dark:text-[#EFEAE6] mb-4 text-sm">Discover my skills, experience, and professional journey.</p>
          <span className="inline-flex items-center text-[#C5895A] dark:text-[#D4A373] group-hover:underline">
            View Resume <ArrowRightIcon className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
        <Link to="/projects" className="group bg-white dark:bg-[#3E322B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold text-[#B0784F] dark:text-[#E0B58A] mb-2">My Projects</h2>
          <p className="text-[#574133] dark:text-[#EFEAE6] mb-4 text-sm">Explore a collection of projects I've worked on.</p>
          <span className="inline-flex items-center text-[#C5895A] dark:text-[#D4A373] group-hover:underline">
            See Projects <ArrowRightIcon className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
        <Link to="/blog" className="group bg-white dark:bg-[#3E322B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-semibold text-[#B0784F] dark:text-[#E0B58A] mb-2">My Blog</h2>
          <p className="text-[#574133] dark:text-[#EFEAE6] mb-4 text-sm">Read my thoughts on technology, development, and more.</p>
          <span className="inline-flex items-center text-[#C5895A] dark:text-[#D4A373] group-hover:underline">
            Visit Blog <ArrowRightIcon className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
      <p className="mt-12 text-[#8A766A] dark:text-[#A39890] text-sm">
        Feel free to explore and get in touch!
      </p>
    </div>
  );
};

export default HomePage;