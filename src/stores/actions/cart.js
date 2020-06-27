const CART_DATA = '[CART].DATA';

export default {
  name: {
    CART_DATA,
  },
  set: (data) => ({
    type: CART_DATA,
    item: data,
  }),
};
