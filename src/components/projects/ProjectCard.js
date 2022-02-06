import React from 'react';
import logo from '../../logo.svg'

const ProjectCard = ({ isButton }) => {
  return (
    <div className="p-4 bg-primary">
        <div>
            <div className='flex'>
                <h2 className="text-gray-800 text-3xl font-semibold">Project Title</h2>
                <img 
                    className="w-12 h-12 object-cover ml-32 rounded-full border-2 border-red-800" 
                    src={logo}
                    alt="React Logo"/>
            </div>
                 <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus quis numquam facere nesciunt repellendus est fugiat voluptates ipsa accusamus! Veritatis nulla aliquid perferendis assumenda. Repellat tempore vero autem. Voluptates!
                Blanditiis aspernatur nostrum amet. Veritatis non excepturi vitae nemo harum! Repellat fuga quae alias veniam optio a obcaecati porro reprehenderit quasi illo, cumque quas natus unde perferendis blanditiis harum ipsam.</p>
        </div>
        <div className="flex justify-end mt-4">
            <a target="_blank" rel="noreferrer" href="#" className="text-xl font-medium text-react_blue">OpenSea</a>
        </div>
    </div>
  );
};

export default ProjectCard;
