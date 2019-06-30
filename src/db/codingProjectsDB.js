import { domino, vignette, volunteer, scraping } from '../images/icons';

export const codingProjectsDB = [
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
    title: 'Goodreads Scraper',
    description: `The Goodreads' API has several endpoints. An endpoint that delivers all quotes, however, is not one. This API fetches all quotes classified under a particular tag.`,
    git: 'https://github.com/pseudoralph/goodreads-quotes-scraper',
    icon: scraping,
    alt: 'scraper',
    techs: ['Node.js', 'Express']
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

export default codingProjectsDB;
