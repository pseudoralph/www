import React, { useEffect, useState } from 'react';

const Progress = () => {
  const [percentComplete, setPercentComplete] = useState(0);

  const progression = () => {
    const docBody = document.body;
    const docElement = document.documentElement;
    const scrollPercentage =
      ((docElement.scrollTop || docBody.scrollTop) /
        ((docElement.scrollHeight || docBody.scrollHeight) -
          docElement.clientHeight)) *
      100;
    setPercentComplete(scrollPercentage.toFixed(2));
  };

  useEffect(() => {
    window.addEventListener('scroll', progression);
    return () => {
      window.removeEventListener('scroll', progression);
    };
  });

  return (
    <div
      style={{
        position: 'fixed',
        height: '.25rem',
        backgroundColor: '#393939',
        width: `${percentComplete}%`
      }}
    />
  );
};

export default Progress;
