import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FormsPage.css'; // Optional: If you create a CSS file for styling

const FormsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="forms-page">
      <h2 className="forms-page-title">Select a Form</h2>
      <div className="forms-page-buttons">
        <button onClick={() => navigate('/login')}>Login Form</button>
        <button onClick={() => navigate('/single-input')}>Single Input Form</button>
        <button onClick={() => navigate('/validated')}>Validated Form</button>
        <button onClick={() => navigate('/multi-step')}>Multi-Step Form</button>
        <button onClick={() => navigate('/checkbox')}>Checkbox Form</button>
        {/* New buttons for the added forms */}
        <button onClick={() => navigate('/book-form')}>Book Form</button>
        <button onClick={() => navigate('/driver-form')}>Driver Form</button>
        <button onClick={() => navigate('/lecturer-form')}>Lecturer Form</button>
        <button onClick={() => navigate('/module-form')}>Module Form</button>
        <button onClick={() => navigate('/student-form')}>Student Form</button>
      </div>
    </div>
  );
};

export default FormsPage;
