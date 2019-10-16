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
