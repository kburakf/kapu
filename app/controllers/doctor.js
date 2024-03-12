const Doctor = require('../models/doctor');
const Appointment = require('../models/appointment');

module.exports.createDoctor = async(req, res) => {
  const { name, surname } = req.body;

  const createDoctor = new Doctor({ name, surname });

  const createdDoctor = await createDoctor.save();

  res.json({ isSuccess: true, doctor: createdDoctor });
};

module.exports.getAppointmentsByDoctorId = async (req, res) => {
  const { doctorId } = req.params;

  const doctor = await Doctor.findById(doctorId);

  if (!doctor) {
    throw new Error('Doctor not found');
  }

  const appointments = await Appointment.find({ doctorId });

  if (!appointments || !appointments.length) {
    throw new Error('Appointment not found');
  }

  res.json({ appointments });
};
