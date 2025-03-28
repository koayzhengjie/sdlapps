const Order = require('../models/Order');

const getOrders = async (req, res) => {
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createOrder = async (req,res) => {
    const {customer, items, total} = req.body;
    try{
        const newOrder = await newOrder.create({customer, items, total});
        res.status(201).json(newOrder);
    } catch(error){
        res.status(500).json({Message: error.message});
    }
};

const updateOrder = async (req,res) => {
    const {customer, items, total} = req.body;
    try{
        const MenuItem = await MenuItem.findByld(req.params.id);
        if (!order) return res.status(404).json({message: 'Order not found'});

        order.customer = customer || order.customer;
        order.items = items || order.items;
        order.total = total ?? order.total;

        const updatedOrder = await Order.save();
        res.json(updatedOrder);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

const deleteOrder = async (req,res) => {
    try{
        const Order = await Order.findByld(req.params.id);
        if (!order) return res.status(404).json({message: 'Order not found'});

        await order.remove();
        res.json({message: 'Order deleted'});
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {getOrders, createOrder, updateOrder, deleteOrder};
