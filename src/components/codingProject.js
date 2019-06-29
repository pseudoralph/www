import React from 'react';
import { code, web } from '../images/ui';

const CodingProject = ({ project }) => {
  return (
    <div className="code-box">
      <img className="project-image" src={project.icon} alt={project.alt} />
      <h2>{project.title}</h2>
      <div className="code-description">
        <p>{project.description}</p>
        <div>
          {project.site && (
            <a href={project.site} target="_blank" rel="noopener noreferrer">
              <div className="goto-links">
                <img src={web} alt="" />
                Visit app
              </div>
            </a>
          )}
          <a href={project.git} target="_blank" rel="noopener noreferrer">
            <div className="goto-links">
              <img src={code} alt="" />
              View code
            </div>
          </a>
        </div>
        <div className="code-tags">
          <p>
            {project.techs.length > 1 ? 'Technolgies used:' : 'Technolgy used:'}
          </p>
          <ul>
            {project.techs.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CodingProject;
