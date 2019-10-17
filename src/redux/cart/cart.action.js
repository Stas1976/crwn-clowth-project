import * as types from './cart.types';

export const toggleCartHidden = () => {
  return {
    type: types.TOGGLE_CART_HIDDEN
  };
};

export const addItem = payload => ({
  type: types.ADD_ITEM,
  payload
});

export const removeItem = payload => ({
  type: types.REMOVE_ITEM,
  payload
});

export const clearItemFromCart = payload => ({
  type: types.CLEAR_ITEM_FROM_CART,
  payload
});
