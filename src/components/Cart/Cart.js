import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    return (
        <div>
            <h4>This is cart {cart.length}</h4>
        </div>
    );
};

export default Cart;