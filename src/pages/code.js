import React from 'react';
import PageWrapper from '../components/pageWrapper';
import CodingProject from '../components/codingProject';
import RandomQuote from '../components/randomQuote';
import { codingProjectsDB } from '../db/codingProjectsDB';

function Code() {
  return (
    <>
      <div className="outer-wrapper">
        <div className="title-heading-div">
          <h1 id="title-heading">/code</h1>
        </div>
        <div className="articles-wrapper">
          <RandomQuote />
          {codingProjectsDB.map(project => (
            <CodingProject key={project.title} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default PageWrapper(Code);
