const express = require('express');
const { addMenuItem, getMenuItems, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');
const router = express.Router();

router.post('/', addMenuItem);
router.get('/', getMenuItems);
router.put('/menu/:id', updateMenuItem);
router.delete('/menu/:id', deleteMenuItem);

module.exports = router;