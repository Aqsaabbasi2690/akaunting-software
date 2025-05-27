// controllers/invoiceController.js
const Invoice = require("../models/Invoice");

// GET all invoices
exports.getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.json(invoices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST a new invoice
exports.createInvoice = async (req, res) => {
  const { customer, amount, status, dueDate } = req.body;
  try {
    const newInvoice = new Invoice({ customer, amount, status, dueDate });
    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
