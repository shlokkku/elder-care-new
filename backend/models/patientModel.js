const db = require('../config/db');

// Fetch all patients
exports.getAllPatients = async () => {
  const [patients] = await db.query('SELECT * FROM patients');
  return patients;
};

// Fetch details of a specific patient, including doctors, appointments, and medicines
exports.getPatientDetails = async (patientId) => {
  const [patient] = await db.query('SELECT * FROM patients WHERE id = ?', [patientId]);
  const [doctors] = await db.query(`
    SELECT d.name, d.specialization, a.schedule_date
    FROM doctors d
    JOIN appointments a ON a.doctor_id = d.id
    WHERE a.patient_id = ?`, [patientId]);
  const [medicines] = await db.query('SELECT * FROM medicines WHERE patient_id = ?', [patientId]);

  return { patient, doctors, medicines };
};
