const Contact = require('../models/contactModel');

//📌first create the function to create the contact
const createContact = async (req, res) => {
    const { name, email, phone } = req.body; //yaha body se manga rahe hai name, email and phone ko

    //📌validate kiya pehle ki name,email, phone hai ki nahi agar missing hai to dalna padega
    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    //📌Adding Validation such that no extra character is added to our email except @
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //📌Adding Validation such that no extra character is added to our email except the numbers
    const phoneCheck = /^[0-9]{10,15}$/; 

    if (typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({ message: 'Name must be a valid non-empty string' });
    }

    if (!emailCheck.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    if (!phoneCheck.test(phone)) {
        return res.status(400).json({ message: 'Phone must be numeric and 10-15 digits long' });
    }

    //📌Postman se jo aa raha hai response usko create krr lenge hm apne database mein
    try {
        const newContact = await Contact.create({ 
            name: name.trim(), 
            email: email.toLowerCase().trim(), 
            phone: phone.trim()
        });
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
