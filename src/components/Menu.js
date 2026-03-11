import React, { useState } from 'react';
import './styles.css';

const Menu = ({ items, addToCart }) => {
    return (
        <div className="menu">
            {items.map(item => (
                <div key={item.id} className="menu-item">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default Menu;