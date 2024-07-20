const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
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
    }

}, {timestamps: true})

model.exports = mongoose.model('Expense', ExpenseSchema);