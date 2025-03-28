const express = require('express');
const { createOrder, getOrders, updateOrder, deleteOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/orders', createOrder);
router.get('/orders', getOrders);
router.put('/orders', updateOrder);
router.delete('/orders', deleteOrder);

module.exports = router;