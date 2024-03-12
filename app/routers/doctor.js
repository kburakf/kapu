const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor');

router.post('/', doctorController.createDoctor);
router.get(
  '/:doctorId/appointments',
  doctorController.getAppointmentsByDoctorId
);

module.exports = router;
