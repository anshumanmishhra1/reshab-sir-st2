const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../controllers/contactController');

//📌 this routes is for creating the contact 
router.post('/', createContact);

//📌this route is for getting the contact
router.get('/', getContacts);

module.exports = router;
