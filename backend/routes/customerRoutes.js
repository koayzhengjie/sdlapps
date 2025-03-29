const express = require('express');
const { addCustomer, getCustomers, updateCustomer, deleteCustomer } = require('../controllers/customerController');
const router = express.Router();

router.post('/customers', addCustomer);
router.get('/customers', getCustomers);
router.put('/customers', updateCustomer);
router.delete('/customers', deleteCustomer);

module.exports = router;