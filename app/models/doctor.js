const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: String,
  surname: String,
});

const Doctors = mongoose.model('Doctors', DoctorSchema);

module.exports = Doctors;
