import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';
import MenuItem from '../components/MenuItem';

const MenuPage = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axiosInstance.get('/api/menu');
                console.log('API Response', response.data);
                setMenuItems(response.data);
            } catch (error) {
                console.error('Error fetching menu items', error);
                setError('Error fetching menu items.');
            } finally {
                setLoading(false);
            }
        };

        fetchMenuItems();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    
    return (
        <div>
            <h2>Menu</h2>
            {menuItems.length === 0 ? (
                <p>No menu items found</p>
            ) : (
                <div className="container">
                    <div className="row">
                        {menuItems.map((item) => (
                            <div className="col-md-4" key={item._id}>
                                <MenuItem item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuPage;