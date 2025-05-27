 // controllers/billController.js
const getBills = (req, res) => {
  res.json({ message: "Get all bills" });
};

const createBill = (req, res) => {
  res.json({ message: "Create a bill" });
};

module.exports = { getBills, createBill };
