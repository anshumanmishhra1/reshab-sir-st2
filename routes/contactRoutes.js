const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../controllers/contactController');

// POST /contacts → Add contact
router.post('/', createContact);

// GET /contacts → Get all contacts
router.get('/', getContacts);

module.exports = router;
