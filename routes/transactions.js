const express = require('express');
const { check } = require('express-validator');
const { addExpense, getExpenses, getExpenseById, updateExpense, deleteExpense } = require('../controllers/expense');
const { registerUser, loginUser, getUser, updateUser } = require('../controllers/user');
const auth = require('../Auth/auth');
const router = express.Router();
const validateExpense = ()=>{
    return [
        check('amount').not().isEmpty().withMessage('Amount is required').isFloat({ min: 1 }).withMessage('Amount must be at least 1'),
        check('category').not().isEmpty().withMessage('Category is required').isLength({ max: 50 }).withMessage('Category cannot be more than 50 characters'),
        check('date').not().isEmpty().withMessage('Date is required').isISO8601().withMessage('Date must be a valid date'),
        check('description').optional().isLength({ max: 255 }).withMessage('Description cannot be more than 255 characters')
    ]
}
const validateUserRegistration = () => {
    return [
        check('name').not().isEmpty().withMessage('Name is required').isLength({ max: 100 }).withMessage('Name cannot be more than 100 characters'),
        check('email').isEmail().withMessage('Invalid email address').isLength({ max: 100 }).withMessage('Email cannot be more than 100 characters'),
        check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters').isLength({ max: 255 }).withMessage('Password cannot be more than 255 characters')
    ]
}

const validateUserLogin = () => {
    return [
        check('email').isEmail().withMessage('Invalid email address'),
        check('password').exists().withMessage('Password is required')
    ]
}


//user routes
router.post('/register', validateUserRegistration(), registerUser);
router.post('/login', validateUserLogin(), loginUser);
router.get('/users/:id',  getUser);
router.put('/users/:id', validateUserRegistration(), auth, updateUser);

// expense routes
router.post('/add-expense', auth, validateExpense(), addExpense);
router.get('/expenses', auth, getExpenses);
router.get('/expenses/:id', auth, getExpenseById);
router.put('/expenses/:id', auth, validateExpense(), updateExpense);
router.delete('/expenses/:id', auth, deleteExpense);

module.exports = router;
