import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import Hobbies from './components/Hobbies';
import Counter from './components/Counter';

import ProfileCard from './components/ProfileCard';
import FormsPage from './forms/FormsPage';
import LoginForm from './forms/LoginForm';
import SingleInputForm from './forms/SingleInputForm';
import ValidatedForm from './forms/ValidatedForm';
import MultiStepForm from './forms/MultiStepForm';
import CheckboxForm from './forms/CheckboxForm';
import BookForm from './forms/BookForm';  // Import new form
import DriverForm from './forms/DriverForm';  // Import new form
import LecturerForm from './forms/LecturerForm';  // Import new form
import ModuleForm from './forms/ModuleForm';  // Import new form
import StudentForm from './forms/StudentForm';  // Import new form

const NotFound = () => <h2>404 - Page Not Found</h2>;

// Sample profiles data
const profiles = [
  { name: "Nikaze I.Clarat Kim", age: 20, email: "kimclarat23@gmail.com" },
  { name: "NDIZEYE BEZA Yvan", age: 22, email: "yvanndizeye@gmail.com" },
  { name: "NDAYISHIMIYE Habibu", age: 25, email: "habibundayishimiye@gmail.com" },
];

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/hobbies">Hobbies</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/profile">Profiles</Link>
        <Link to="/forms">Forms</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/counter" element={<Counter />} />
        <Route
          path="/profile"
          element={
            <div>
              {profiles.map((profile, index) => (
                <ProfileCard
                  key={index}
                  name={profile.name}
                  age={profile.age}
                  email={profile.email}
                />
              ))}
            </div>
          }
        />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/single-input" element={<SingleInputForm />} />
        <Route path="/validated" element={<ValidatedForm />} />
        <Route path="/multi-step" element={<MultiStepForm />} />
        <Route path="/checkbox" element={<CheckboxForm />} />
        <Route path="/book-form" element={<BookForm />} />  {/* Route for BookForm */}
        <Route path="/driver-form" element={<DriverForm />} />  {/* Route for DriverForm */}
        <Route path="/lecturer-form" element={<LecturerForm />} />  {/* Route for LecturerForm */}
        <Route path="/module-form" element={<ModuleForm />} />  {/* Route for ModuleForm */}
        <Route path="/student-form" element={<StudentForm />} />  {/* Route for StudentForm */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
