import React from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/cart/cart.action';

import './checkout.style.scss';

const Checkout = ({ cartItem, clearItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  console.log(cartItem.id);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span
        onClick={() => clearItemFromCart(cartItem)}
        className="remove-button"
      >
        &#10005;
      </span>
    </div>
  );
};

export default connect(
  null,
  action
)(Checkout);
