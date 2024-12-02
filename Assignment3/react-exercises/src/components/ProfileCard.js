import React from 'react';
import './styles.css';

const ProfileCard = ({ name, age, email, imageUrl }) => {
  return (
    <div className="profile-card">
    
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
    
    
  );
};

export default ProfileCard;
