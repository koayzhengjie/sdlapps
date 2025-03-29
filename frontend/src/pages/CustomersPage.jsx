import React, {useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';
import CustomerCard from '../components/CustomerCard';

const CustomersPage = () => {
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axiosInstance.get('/api/customers');
                console.log('API Response', response.data);
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers:', error);
                setError('Error fetching customers.');
            }
        };

        fetchCustomers();
    }, []);

    if (error){
        return <div>{error}</div>;
    }

    return(
        <div>
            <h1>Customers</h1>
            {customers.length === 0 ? (
                <p>No customers found</p>
            ) : (
                <div className="container">
                    <div className="row">
                        {customers.map((customer) => (
                            <div className="col-md-4" key={customer._id}>
                                <CustomerCard customer={customer} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomersPage;