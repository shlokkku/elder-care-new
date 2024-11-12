import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

function PatientDetails() {
  const { id } = useParams();
  const [patientDetails, setPatientDetails] = useState(null);

  useEffect(() => {
    async function fetchPatientDetails() {
      const response = await api.get(`/patients/${id}`);
      setPatientDetails(response.data);
    }
    fetchPatientDetails();
  }, [id]);

  if (!patientDetails) return <p>Loading...</p>;

  return (
    <div>
      <h2>{patientDetails.patient[0].name}'s Details</h2>
      <p>Age: {patientDetails.patient[0].age}</p>
      <p>Address: {patientDetails.patient[0].address}</p>
      <h3>Doctors</h3>
      <ul>
        {patientDetails.doctors.map((doc, index) => (
          <li key={index}>
            {doc.name} - {doc.specialization}, Checkup Date: {doc.schedule_date}
          </li>
        ))}
      </ul>
      <h3>Medicines</h3>
      <ul>
        {patientDetails.medicines.map((med, index) => (
          <li key={index}>{med.medicine_name} - {med.dosage}</li>
        ))}
      </ul>
    </div>
  );
}

export default PatientDetails;
