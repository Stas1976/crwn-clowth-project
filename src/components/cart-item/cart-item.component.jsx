import React from 'react';

import './cart-item.style.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <spna className="name">{name}</spna>
        <spna className="price">
          {quantity} x ${price}
        </spna>
      </div>
    </div>
  );
};

export default CartItem;
