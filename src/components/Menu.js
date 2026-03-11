import React from 'react';

const Menu = ({ items, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">菜单</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(item => (
          <div 
            key={item.id} 
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-400"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <span className="text-green-600 font-bold text-2xl">¥{item.price}</span>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="w-full mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              + 加入购物车
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;