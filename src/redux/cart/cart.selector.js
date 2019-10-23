import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cartReducer => cartReducer.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => {
    return cart.hidden;
  }
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
);
