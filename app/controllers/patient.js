const Patient = require('../models/patient');
const Appoinment = require('../models/appointment');

module.exports.createPatient = (req, res) => {
  const { name, surname } = req.body;

  const createPatient = new Patient({ name, surname });

  const createdPatient = createPatient.save();

  res.json({ isSuccess: true, patient: createdPatient });
};

module.exports.createAppointment = (req, res) => {
  const { doctorId, patientId, startAt, endAt } = req.body;

  const createAppointment = new Appoinment({
    doctorId,
    patientId,
    startAt,
    endAt,
  });

  const createdAppointmnet = createAppointment.save();

  res.json({ isSuccess: true, appointment: createdAppointmnet });
};
