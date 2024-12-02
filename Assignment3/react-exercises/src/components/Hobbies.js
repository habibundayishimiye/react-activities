import React, { useState } from 'react';

// Child component: Responsible for displaying each hobby and its description
const Hobby = ({ hobby, description }) => {
  const [showDescription, setShowDescription] = useState(false); // State to toggle description visibility

  // Toggle the visibility of the description when the hobby is clicked
  const handleClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <li className="hobby-item" onClick={handleClick}>
      <h3>{hobby}</h3>
      {showDescription && <p className="hobby-description">{description}</p>}
    </li>
  );
};

// Parent component: Responsible for providing the list of hobbies and descriptions
const Hobbies = () => {
  const hobbies = [
    { name: 'Reading', description: 'Exploring new worlds through books.' },
    { name: 'Cycling', description: 'Enjoying nature and staying fit.' },
    { name: 'Coding', description: 'Building software and solving problems.' },
    { name: 'Gardening', description: 'Growing plants and connecting with nature.' },
  ];

  return (
    <div className="hobbies-container">
      <h2>My Hobbies</h2>
      <p>Here is a list of activities I enjoy:</p>
      <ul className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <Hobby key={index} hobby={hobby.name} description={hobby.description} />
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
