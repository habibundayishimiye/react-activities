import React from 'react';

const CurrentDate = () => {
  const today = new Date().toLocaleDateString(); // Get the current date in locale format

  return <p className="date">Today's Date: {today}</p>;
};

export default CurrentDate;
