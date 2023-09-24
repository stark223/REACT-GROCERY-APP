import React from 'react';

const Itemm = ({ item, cartItems, handleAddToCart }) => {

    const cartItem = cartItems.find(cart => cart.id === item.id)
    return (
        <div className='grocery-item'>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button onClick={()=>  !cartItem && handleAddToCart(item)}>
               {cartItem ? 'Added': 'Add to cart'}
            </button>
        </div>
    );
}

export default Itemm;
