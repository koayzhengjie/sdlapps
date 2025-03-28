const MenuItem = require('../models/MenuItem');

const getMenuItems = async (req, res) => {
    try{
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const addMenuItem = async (req,res) => {
    const {name, description, price, category} = req.body;
    try{
        const newMenuItem = await newMenuItem.create({name, description, price, category});
        res.status(201).json(newMenuItem);
    } catch(error){
        res.status(500).json({Message: error.message});
    }
};

const updateMenuItem = async (req,res) => {
    const {name, description, price, category} = req.body;
    try{
        const MenuItem = await MenuItem.findByld(req.params.id);
        if (!MenuItem) return res.status(404).json({message: 'MenuItem not found'});

        MenuItem.name = name || MenuItem.name;
        MenuItem.description = description || MenuItem.description;
        MenuItem.price = price ?? MenuItem.price;
        MenuItem.category = category || MenuItem.category;

        const updatedMenuItem = await MenuItem.save();
        res.json(updatedMenuItem);
    } catch (error){
        res.status(500).json({message: error.message});
    }
};

const deleteMenuItem = async (req,res) => {
    try{
        const MenuItem = await MenuItem.findByld(req.params.id);
        if (!MenuItem) return res.status(404).json({message: 'MenuItem not found'});

        await MenuItem.remove();
        res.json({message: 'MenuItem deleted'});
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {getMenuItems, addMenuItem, updateMenuItem, deleteMenuItem};
