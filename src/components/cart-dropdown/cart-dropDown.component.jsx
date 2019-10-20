import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import * as action from '../../redux/cart/cart.action';

import {
  CartDropDownContainer,
  CartItems,
  EmptyMessage,
  CartDropdownButton
} from './cart-dropDown.style';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CartDropdownButton
        onClick={() => {
          history.push('/checkout');
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropDownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(
    mapStateToProps,
    action
  )(CartDropdown)
);
