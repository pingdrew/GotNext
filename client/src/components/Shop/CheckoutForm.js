import React, { useState } from 'react';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        cardNumber: '',
        expiration: '',
        cvv: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle checkout logic
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} required />
            <input type="text" name="address" placeholder="Address" onChange={handleInputChange} required />
            <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleInputChange} required />
            <input type="text" name="expiration" placeholder="Expiration Date" onChange={handleInputChange} required />
            <input type="text" name="cvv" placeholder="CVV" onChange={handleInputChange} required />
            <button type="submit">Checkout</button>
        </form>
    );
};

export default CheckoutForm;
