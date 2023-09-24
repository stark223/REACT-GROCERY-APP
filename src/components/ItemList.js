import React from 'react';
import { grocaryData } from '../data';
import Itemm from './Itemm';


const ItemList = ({ cartItems, handleAddToCart }) => {
    return (
        <div className='grocery-list d-flex flex-wrap justify-content-center'>
            {grocaryData.map((item) => (
                <div key={item.id}>
                    <Itemm item={item}
                        cartItems={cartItems}
                        handleAddToCart={handleAddToCart} />
                </div>
            ))}
        </div>
    );
}

export default ItemList;
