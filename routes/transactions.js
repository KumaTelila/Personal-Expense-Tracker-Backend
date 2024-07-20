const express = require('express');
const { check } = require('express-validator');
const { addExpense } = require('../controllers/expense');
const router = express.Router();


router.post('/add-expense', [
    check('title').not().isEmpty().withMessage('Title is required').isLength({ max: 50 }).withMessage('Title cannot be more than 50 characters'),
    check('amount').not().isEmpty().withMessage('Amount is required').isFloat({ min: 1 }).withMessage('Amount must be at least 1'),
    check('category').not().isEmpty().withMessage('Category is required').isLength({ max: 50 }).withMessage('Category cannot be more than 50 characters'),
    check('date').not().isEmpty().withMessage('Date is required').isISO8601().withMessage('Date must be a valid date'),
    check('description').optional().isLength({ max: 255 }).withMessage('Description cannot be more than 255 characters')
], addExpense);
router.get('/', (req, res) => {
    res.send("Welcome")
});

module.exports = router;