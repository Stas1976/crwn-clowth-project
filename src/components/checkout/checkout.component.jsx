import React from 'react';
import { connect } from 'react-redux';

import * as action from '../../redux/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContianer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout.style';

const Checkout = ({ cartItem, clearItemFromCart, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContianer>
        <img src={imageUrl} alt="item" />
      </ImageContianer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}> &#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095; </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default connect(
  null,
  action
)(Checkout);
