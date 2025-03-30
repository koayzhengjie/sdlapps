import React from'react';
import { Card } from 'react-bootstrap';

const CustomerCard = ({ customer }) => {
    return(
        <Card classname="mb-3">
            <Card.Body>
                <Card.Title>{customer.name}</Card.Title>
                <Card.Text>
                    <strong>Email:</strong> {customer.email}<br />
                    <strong>Phone:</strong> {customer.phone}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CustomerCard;