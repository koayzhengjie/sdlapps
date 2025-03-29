const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customer: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true},
  items: [
    {
      menuItem: {type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true},
      quantity: {type: Number, required: true},
    },
  ],
  total: {type: Number, required: true},
  status: {type: String, default: 'Pending'},
});

module.exports = mongoose.model('Order', OrderSchema);