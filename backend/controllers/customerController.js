const Customer = require('../models/Customer');

const getCustomers = async (req, res) => {
    try{
        const customers = await Customer.find({userid: req.user.id});
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const addCustomer = async (req,res) => {
    const {name, phone, email} = req.body;
    try{
        const newCustomer = await Customer.create({name, phone, email});
        res.status(201).json(newCustomer);
    } catch(error){
        res.status(500).json({Message: error.message});
    }
};

const updateCustomer = async (req,res) => {
    const {name, phone, email} = req.body;
    try{
        const Customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({message: 'Customer not found'});

        customer.name = name ?? customer.name;
        customer.phone = phone || customer.phone;
        customer.email = email || customer.email;

        const updatedCustomer = await Customer.save();
        res.json(updatedCustomer);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

const deleteCustomer = async (req,res) => {
    try{
        const Customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({message: 'Customer not found'});

        await customer.remove();
        res.json({message: 'Customer deleted'});
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {getCustomers, addCustomer, updateCustomer, deleteCustomer};
