import React, { useState, useEffect } from 'react';

const Welcome = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString()); // Update the date (optional if you expect date to change, e.g., at midnight)
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="welcome">Welcome, these are Kim, Habibu, and Yvan!</h1>
      <p className="date">Current Date: {date}, Current Time: {time}</p>
      
    </div>
  );
};

export default Welcome;
