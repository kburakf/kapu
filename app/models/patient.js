const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  name: String,
  surname: String,
});

const Patients = mongoose.model('Patients', PatientSchema);

module.exports = Patients;
