import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PatientList from './components/PatientList';
import PatientDetails from './components/PatientDetails';
import ActivitySchedule from './components/ActivitySchedule'; // Ensure correct import

function App() {
  return (
    <Router>
      <div>
        <h1>Elder Care System</h1>
        <nav>
          <Link to="/">Home</Link> | {' '}
          <Link to="/activities">Monthly Activities</Link>
        </nav>
        <Routes>
          <Route path="/" element={<PatientList />} />
          <Route path="/patients/:id" element={<PatientDetails />} />
          <Route path="/activities" element={<ActivitySchedule />} /> {/* Ensure the route is correct */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
