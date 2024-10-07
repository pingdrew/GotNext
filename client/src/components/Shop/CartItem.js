import React from 'react';

const CartItem = ({ item }) => {
    return (
        <div className="cart-item">
            <h4>{item.product.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${(item.product.price * item.quantity).toFixed(2)}</p>
        </div>
    );
};

export default CartItem;
