import React, { useState } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);
        calculateTotal([...cartItems, item]);
    };

    const updateQuantity = (index, quantity) => {
        const updatedItems = [...cartItems];
        updatedItems[index].quantity = quantity;
        setCartItems(updatedItems);
        calculateTotal(updatedItems);
    };

    const calculateTotal = (items) => {
        const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(totalCost);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price} x 
                        <input type="number" value={item.quantity} min="1" 
                               onChange={(e) => updateQuantity(index, Number(e.target.value))} />
                    </li>
                ))}
            </ul>
            <h2>Total: ${total}</h2>
            <button onClick={() => alert('Proceeding to checkout')}>Checkout</button>
        </div>
    );
};

export default Cart;