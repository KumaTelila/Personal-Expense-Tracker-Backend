const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
        maxlength: 20,
        min: 1,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    description: {
        type: String,
        maxlength: 255
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

}, { timestamps: true })

module.exports = mongoose.model('Expense', ExpenseSchema);