const doctorRouter = require('../routers/doctor');
const patientRouter = require('../routers/patient');

module.exports = (app) => {
  app.use('/api/v1/doctors', doctorRouter);
  app.use('/api/v1/patients', patientRouter);
};
