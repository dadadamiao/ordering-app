import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity, totalPrice }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-8 sticky top-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">🛒 购物车</h2>
      
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center py-8">购物车为空</p>
      ) : (
        <>
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
            {cartItems.map(item => (
              <div 
                key={item.id} 
                className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-bold text-lg"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold">¥{item.price}</span>
                  
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-200 transition"
                    >
                      −
                    </button>
                    <span className="px-4 py-1 font-semibold text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-200 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <p className="text-right text-gray-600 mt-2 text-sm">
                  小计: ¥{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-gray-300 pt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-bold text-gray-800">总价:</span>
              <span className="text-3xl font-bold text-green-600">¥{totalPrice.toFixed(2)}</span>
            </div>
            
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              📦 结账
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;