import React, { useState } from 'react';

const HoverDiv = () => {
  const [color, setColor] = useState('#ddd');

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: color,
        border: '1px solid #ccc'
      }}
      onMouseEnter={() => setColor('#add8e6')}
      onMouseLeave={() => setColor('#ddd')}
    ></div>
  );
};

export default HoverDiv;
