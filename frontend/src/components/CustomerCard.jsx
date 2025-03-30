import React from'react';

const CustomerCard = ({ customer }) => {
    return(
        <div classname="mb-3">
            <div className="card-body">
                <h2 className="card-title">{customer.name}</h2>
                <p className="card-text">{customer.email}</p>
                <p className="card-text">{customer.phone}</p>
            </div>
        </div>
    );
};

export default CustomerCard;