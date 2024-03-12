const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  doctorId: { type: mongoose.Types.ObjectId, ref: 'Doctor' },
  patientId: { type: mongoose.Types.ObjectId, ref: 'Patient' },
  startAt: { type: Date },
  endAt: { type: Date },
  createdAt: { type: Date, default: Date.now() },
});

const Appointment = mongoose.model('Appointments', AppointmentSchema);

module.exports = Appointment;
