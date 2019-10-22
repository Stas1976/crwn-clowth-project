import * as types from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetch: true,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_COLLECTIONS_START:
      return {
        ...state,
        collections: action.payload
      };

    case types.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetch: false,
        collections: action.payload
      };

    case types.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetch: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;
