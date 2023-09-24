import React from 'react';
import loadash from 'lodash'

const Cart = ({ cartItems }) => {
    return (
        <div className='cart text-align-center text-center'>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={item.id}>

                        {item.index}
                        {item.title}
                        {item.body}


                    </li>
                ))}
            </ul>
            <h4>
                Total : {loadash.sum(cartItems.map(item => item.title))}
            </h4>
            <button class="cartbutton" onClick={() => alert('Your Order Placed Successfully')}>Place Order</button>
        </div>
    );
}

export default Cart;
