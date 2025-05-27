const Invoice = require("../models/Invoice");
const Bill = require("../models/Bill");

exports.getDashboardStats = async (req, res) => {
  try {
    const unpaidInvoices = await Invoice.find({ status: "Unpaid" });
    const overdueInvoices = await Invoice.find({ status: "Overdue" });

    const unpaidBills = await Bill.find({ status: "Unpaid" });
    const overdueBills = await Bill.find({ status: "Overdue" });

    res.json({
      receivables: {
        open: unpaidInvoices.reduce((sum, i) => sum + i.amount, 0),
        overdue: overdueInvoices.reduce((sum, i) => sum + i.amount, 0),
      },
      payables: {
        open: unpaidBills.reduce((sum, b) => sum + b.amount, 0),
        overdue: overdueBills.reduce((sum, b) => sum + b.amount, 0),
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
