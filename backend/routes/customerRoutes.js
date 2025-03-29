const express = require('express');
const { addCustomer, getCustomers, updateCustomer, deleteCustomer } = require('../controllers/customerController');
const router = express.Router();

router.post('/', addCustomer);
router.get('/', getCustomers);
router.put('/customers/:id', updateCustomer);
router.delete('/customers/:id', deleteCustomer);

module.exports = router;