import React from 'react';
import CartItem from '../../components/Shop/CartItem';
import CheckoutForm from '../../components/Shop/CheckoutForm';

const CartPage = ({ cartItems }) => {
    return (
        <div>
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <CheckoutForm />
        </div>
    );
};

export default CartPage;
