import React from 'react';
import quotesDB from '../db/quotesDB';
import { link } from '../images/ui';

const RandomQuote = () => {
  const filteredQuotes = quotesDB.filter(x => x.quote.length <= 85);
  const quoteId = Math.floor(Math.random() * Math.floor(filteredQuotes.length));

  return (
    <div className="code-box-quote">
      <p>{filteredQuotes[quoteId].quote}</p>

      <p id="quote-author">
        {filteredQuotes[quoteId].author}
        <a
          href={filteredQuotes[quoteId].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link} alt="" />
        </a>
      </p>
    </div>
  );
};

export default RandomQuote;
