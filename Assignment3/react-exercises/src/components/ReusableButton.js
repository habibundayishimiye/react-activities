import React from 'react';

const ReusableButton = ({ text, color }) => {
  return (
    <button style={{ backgroundColor: color, color: '#fff', padding: '10px', border: 'none', borderRadius: '5px' }}>
      {text}
    </button>
  );
};

export default ReusableButton;
