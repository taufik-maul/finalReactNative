import CART_ACTION from '../actions/cart';

const initialState = {
  item: [],
};

const REDUCER_CART = (prevState = initialState, action) => {
  switch (action.type) {
    case CART_ACTION.name.CART_DATA:
      return {
        ...prevState,
        item: action.item,
      };
    default:
      return prevState;
  }
};

export default REDUCER_CART;
