const Expense = require('../models/ExpenseModel');

exports.addExpense = async (req, res) => {
    const { title, amount, category, date, description, user } = req.body;

    // Server-side validations
    if (!title || !category || !date || !amount) {
        return res.status(400).json({ message: "All fields are required" });
    }
    if (amount <= 0 || typeof amount !== 'number') {
        return res.status(400).json({ message: "Amount must be a positive number" });
    }

    const expense = new Expense({
        title,
        amount,
        category,
        date,
        description,
        user
    });

    try {
        await expense.save();
        res.status(201).json({ message: "Expense added successfully", expense });
    } catch (error) {
        console.error('Error adding expense:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
