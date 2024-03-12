const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient');

router.post('/', patientController.createPatient);
router.post('/appointment', patientController.createAppointment);

module.exports = router;
