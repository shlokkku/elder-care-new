const express = require('express');
const router = express.Router();
const { getAllPatients, getPatientDetails } = require('../controllers/patientController');

router.get('/', getAllPatients);
router.get('/:id', getPatientDetails);

module.exports = router;
