const express = require('express');
const { addCustomer, getCustomers, updateCustomer, deleteCustomer } = require('../controllers/customerController');
const router = express.Router();

router.post('/customers', addCustomer);
router.get('/customers', getCustomers);
router.put('/customers/:id', updateCustomer);
router.delete('/customers/:id', deleteCustomer);

module.exports = router;