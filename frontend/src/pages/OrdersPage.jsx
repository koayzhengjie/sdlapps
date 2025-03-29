import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/orders');
                setOrders(response.data);
            } catch (error){
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <div>
            <h1>Orders</h1>
            <ul>
                {orders.map((order) => (
                    <li key={order._id}>{order.item} - {order.status}</li>
                ))}
            </ul> 
        </div>
    );
};

export default OrdersPage;