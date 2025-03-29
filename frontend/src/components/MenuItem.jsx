import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">{item.name}</h2>
        <p className="card-text">{item.description}</p>
        <p className="card-text">Price :${item.price}</p>
        <p className="card-text">{item.category}</p>
      </div>
    </div>
  );
};

export default MenuItem;