import * as types from './cart.types';

export const toggleCartHidden = () => {
  return {
    type: types.TOGGLE_CART_HIDDEN
  };
};
