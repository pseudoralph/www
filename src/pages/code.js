import React from 'react';
import menuHOC from '../components/menuHOC';
import '../style/layout.css';
import '../style/content.css';
import { code, web } from '../images/ui';
import { domino, vignette, volunteer } from '../images/icons';

const codingProjectsDB = [
  {
    title: 'Double 9 dominos',
    description: `A multi-player double nine's (Cuban variant) game of dominoes.  Manages data, control, and session state through redux.`,
    site: 'https://domino.prdmo.com/#/',
    git: 'https://github.com/pseudoralph/react-domino',
    icon: domino,
    alt: 'domino tile ficha',
    techs: ['React', 'Redux', 'Firebase']
  },
  {
    title: 'Vignette',
    description: `A microblogging site crossed with Snapchat. A proof-of-concept that shows how ephemerality can exist in an always-on and continuously archived digital world.`,
    site: 'http://vignette.prdmo.com',
    git: 'https://github.com/pseudoralph/vignette',
    icon: vignette,
    alt: 'vignette photo effect',
    techs: ['React']
  },
  {
    title: 'Volunteer Tracker',
    description: `A mobile web application I created to simplify the management and organization of teams working on projects. This app uses CRUD principles through postgreSQL.`,
    site: 'http://tracker.prdmo.com/',
    git: 'https://github.com/pseudoralph/volunteer_tracker',
    icon: volunteer,
    alt: 'hand raised',
    techs: ['Ruby', 'pSQL']
  }
];

function Code() {
  return (
    <div className="outer-wrapper">
      <div className="title-heading-div">
        <h1 id="title-heading">/code</h1>
      </div>
      <div className="articles-wrapper">
        <div className="code-box-quote">
          Lorem ipsum quotesome goes'um here'm.
          <p id="quote-author">-Unknown</p>
        </div>
        {codingProjectsDB.map(project => (
          <div className="code-box" key={project.title}>
            <img
              className="project-image"
              src={project.icon}
              alt={project.alt}
            />
            <h2>{project.title}</h2>

            <div className="code-description">
              <p>{project.description}</p>
              <div>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="goto-links">
                    <img src={web} alt="" />
                    Visit app
                  </div>
                </a>
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <div className="goto-links">
                    <img src={code} alt="" />
                    View code
                  </div>
                </a>
              </div>

              <div className="code-tags">
                <p>
                  {project.techs.length > 1
                    ? 'Technolgies used:'
                    : 'Technolgy used:'}
                </p>
                <ul>
                  {project.techs.map(tech => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default menuHOC(Code);
