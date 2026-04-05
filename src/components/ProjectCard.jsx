import React from 'react';

const ProjectCard = ({ title, description, image, tags }) => {
  return (
    <div className="group border border-gray-800 bg-black hover:border-accent p-6 flex flex-col gap-6">
      <div className="overflow-hidden bg-gray-900 aspect-video flex items-center justify-center text-gray-700 text-6xl">
        {/* Placeholder for real images */}
        <span className="font-display font-black uppercase italic tracking-tighter opacity-10">
          PROJ
        </span>
      </div>
      
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-accent px-2 py-1 border border-accent/20">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-accent">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="pt-4">
          <a href="#" className="text-sm font-bold uppercase tracking-widest text-white hover:underline underline-offset-4 decoration-accent">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
