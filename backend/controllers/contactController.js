const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone and message are required",
      });
    }

    const contact = await Contact.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      message: message.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully",
      contact,
    });
  } catch (error) {
    console.error("Create Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to submit enquiry",
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error("Get Contacts Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch contact enquiries",
    });
  }
};

const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const allowedStatuses = [
      "new",
      "contacted",
      "resolved",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid contact status",
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact status updated",
      contact,
    });
  } catch (error) {
    console.error("Update Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update contact",
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(
      req.params.id
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact enquiry not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Contact enquiry deleted successfully",
    });
  } catch (error) {
    console.error("Delete Contact Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to delete contact",
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact,
};