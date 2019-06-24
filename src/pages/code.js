import React from 'react';
import menuHOC from '../components/menuHOC';
import '../style/layout.css';
import '../style/content.css';
import { code, web } from '../images/ui';
import quotesDB from '../db/quotesDB';
import { codingProjectsDB } from '../db/codingProjectsDB';

function RandomQuote() {
  const filteredQuotes = quotesDB.filter(x => x.quote.length <= 85);
  const quoteId = Math.floor(Math.random() * Math.floor(filteredQuotes.length));

  return (
    <div className="code-box-quote">
      <a
        href={filteredQuotes[quoteId].url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{filteredQuotes[quoteId].quote}</p>
      </a>
      <p id="quote-author">{filteredQuotes[quoteId].author}</p>
    </div>
  );
}

function Code() {
  return (
    <div className="outer-wrapper">
      <div className="title-heading-div">
        <h1 id="title-heading">/code</h1>
      </div>
      <div className="articles-wrapper">
        <RandomQuote />
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
