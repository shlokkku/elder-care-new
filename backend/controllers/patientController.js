const patientModel = require('../models/patientModel');

exports.getAllPatients = async (req, res) => {
    try {
      const patients = await patientModel.getAllPatients();
      res.json(patients);
    } catch (err) {
      console.error("Error fetching patients:", err); // Logs detailed error
      res.status(500).json({ error: "Failed to fetch patients" });
    }
  };
  

exports.getPatientDetails = async (req, res) => {
  try {
    const patientId = req.params.id;
    const data = await patientModel.getPatientDetails(patientId);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
