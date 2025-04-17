const express = require('express');
const router = express.Router();
const { createContact, getContacts } = require('../controllers/contactController');

//📌 this routes is for creating the contacts 
router.post('/', createContact);

//📌this route is for getting the contacts 
router.get('/', getContacts);

module.exports = router;
