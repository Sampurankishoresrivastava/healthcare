const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  condition: { type: String, required: true },
  medicalHistory: [String],  // List of past treatments
  medications: [String],     // List of current medications
  labResults: [String]       // List of past lab results
});

module.exports = mongoose.model('Patient', PatientSchema);
