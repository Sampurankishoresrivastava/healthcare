const express = require('express');
const router = express.Router();
const Authorization = require('../models/Authorization');

// POST a new authorization request
router.post('/', async (req, res) => {
  try {
    const newRequest = new Authorization(req.body);
    const savedRequest = await newRequest.save();
    res.json(savedRequest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all authorization requests
router.get('/', async (req, res) => {
  try {
    const requests = await Authorization.find().populate('patientId');
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
