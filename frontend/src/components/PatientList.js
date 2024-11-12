import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      const response = await api.get('/patients');
      setPatients(response.data);
    }
    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            <Link to={`/patients/${patient.id}`}>{patient.name}</Link>
          </li>
        ))}
      </ul>
      <br />
      <Link to="/activities">
        <button>View Monthly Activities</button>
      </Link>
    </div>
  );
}

export default PatientList;
