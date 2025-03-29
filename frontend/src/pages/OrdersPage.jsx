import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';
import Order from '../components/Order';

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axiosInstance.get('/api/orders');
                console.log("API Response:", response.data);
                setOrders(response.data);
            } catch (error){
                console.error("Error fetching orders:", error);
                setError('Error fetching orders.');
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    
    if (error){
        return <div>{error}</div>;
    }

    return(
        <div>
            <h1>Orders</h1>
            {orders.length === 0 ? (
                <p>No orders found</p>
            ) : (
                <div className="container">
                    <div className="row">
                        {orders.map((order) => (
                            <div className="col-md-4" key={order._id}>
                                <Order order={order} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrdersPage;