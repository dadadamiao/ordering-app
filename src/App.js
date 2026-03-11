import React, { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';

const App = () => {
  const [menuItems] = useState([
    { id: 1, name: '红烧肉', price: 28 },
    { id: 2, name: '宫保鸡丁', price: 18 },
    { id: 3, name: '麻婆豆腐', price: 12 },
    { id: 4, name: '清蒸鱼', price: 32 },
    { id: 5, name: '青菜炒蛋', price: 10 },
    { id: 6, name: '番茄鸡蛋汤', price: 8 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find(c => c.id === item.id);
    if (existingItem) {
      setCart(cart.map(c =>
        c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(cart.map(c =>
        c.id === itemId ? { ...c, quantity } : c
      ));
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">🍽️ 点菜应用</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Menu items={menuItems} addToCart={addToCart} />
          </div>
          <div>
            <Cart 
              cartItems={cart} 
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;