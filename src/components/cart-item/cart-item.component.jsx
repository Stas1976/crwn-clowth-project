import React from 'react';

import {
  CartItemContainer,
  ImgContainer,
  ItemDetailsContainer,
  NameContainer
} from './cart-item.style';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <ImgContainer src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
