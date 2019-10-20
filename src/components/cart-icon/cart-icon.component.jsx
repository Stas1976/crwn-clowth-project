import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as action from '../../redux/cart/cart.action';

import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import {
  CartIconContainer,
  ShopingIconContainer,
  ItemCount
} from './cart-icon.style';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartHidden}>
      <ShopingIconContainer />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  action
)(CartIcon);
