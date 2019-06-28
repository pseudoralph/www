import React from 'react';
import quotesDB from '../db/quotesDB';

const RandomQuote = () => {
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
};

export default RandomQuote;
