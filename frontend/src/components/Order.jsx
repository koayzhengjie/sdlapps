import React from 'react';

const Order = ({ order }) => {
    return(
       <div className="card mb-3">
        <div className="card-body">
            <h3 className="card-title">Order ID: {order._id}</h3>
            <p className="card-text">Status: {order.status}</p>
            <p className="card-text">Total: ${order.total}</p>

            <h4>Items:</h4>
            <ul>
                {order.items.length === 0 ? (
                    <li>No items in this order.</li>
                ) : (
                    order.items.map((item, index) => (
                        <li key={index}>
                            <p>Menu Item Name: {item.menuItem.name}</p>
                            <p>Quantity: {item.quantity}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
       </div>
    );
};

export default Order;