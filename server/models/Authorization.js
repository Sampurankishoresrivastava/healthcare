const mongoose = require('mongoose');

const AuthorizationSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  treatmentType: { type: String, required: true },
  insurancePlan: { type: String, required: true },
  dateOfService: { type: Date, required: true },
  diagnosisCode: { type: String, required: true },
  status: { type: String, default: 'pending' },  // pending, approved, denied
  doctorNotes: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Authorization', AuthorizationSchema);
