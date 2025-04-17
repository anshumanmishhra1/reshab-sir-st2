const Contact = require('../models/contactModel');

//📌first create the function to create the contact
const createContact = async (req, res) => {
    const { name, email, phone } = req.body; //yaha body se manga rahe hai name, email and phone ko

    //📌validate kiya pehle ki name,email, phone hai ki nahi agar missing hai to dalna padega
    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    //📌Postman se jo aa raha hai response usko create krr lenge hm apne database mein
    try {
        const newContact = await Contact.create({ name, email, phone });
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};


const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    createContact,
    getContacts,
};
