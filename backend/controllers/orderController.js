const Order = require('../models/Order');
const Customer = require('../models/Customer');
const MenuItem = require('../models/MenuItem');

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('customer')
            .populate('items.menuItem');

        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

const createOrder = async (req,res) => {
    const {customerId, items} = req.body;
    try{
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({message: 'Customer not found' });
        }
        let total = 0;
        const orderItems = [];

        for (let item of items) {
            const menuItem = await MenuItem.findById(item.menuItemId);
            if (!menuItem) {
                return res.status(404).json({message: 'Menu item not found' });
            }

            const itemTotal = menuItem.price * item.quantity;
            total += itemTotal;

            orderItems.push({
                menuItem: menuItem._id,
                quantity: item.quantity,
            });
        }

        const newOrder = new Order({
            customer: customer._id,
            items: orderItems,
            total,
            status: 'Pending',
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
    res.status(500).json({message: error.message});
    }
};

const updateOrder = async (req,res) => {
    const {customerId, items, total} = req.body;
    try{
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({message: 'Order not found'});

        order.customer = customerId || order.customer;
        order.items = items || order.items;
        order.total = total || order.total;

        const updatedOrder = await Order.save();
        res.json(updatedOrder);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

const deleteOrder = async (req,res) => {
    try{
        const Order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({message: 'Order not found'});

        await order.remove();
        res.json({message: 'Order deleted'});
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {getOrders, createOrder, updateOrder, deleteOrder};
