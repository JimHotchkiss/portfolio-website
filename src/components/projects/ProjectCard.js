import React from 'react';
import logo from '../../logo.svg'

const ProjectCard = ({ isButton }) => {
  return (
      <div
        className='max-w-sm py-4 px-8 bg-slate-100 shadow-lg rounded my-8 cursor-pointer'>
        <div className="flex justify-centermd:justify-end -mt-16">
          <img 
            className="w-20 h-20 object-cover ml-56 bg-white rounded-full border-2 border-indigo-500" 
            src={logo} alt="React Icon"/>
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">Project Title</h2>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quod reprehenderit corrupti, ducimus expedita odio tempora vero! Consectetur quisquam dolores adipisci possimus totam sapiente illum fugit odit, maiores expedita eum!
            Ab temporibus alias tempora voluptates voluptatibus modi vero corporis assumenda, soluta libero aliquid impedit necessitatibus magnam dicta natus beatae laudantium hic! Tempore accusamus nulla praesentium aliquam commodi earum, aperiam est.</p>
        </div>
        <div className="flex justify-end mt-4">
          <a target="_blank" rel="noreferrer" href="#" className="text-xl font-medium text-indigo-500">Github</a>
        </div>
      </div>
   
   
  );
};

export default ProjectCard;
