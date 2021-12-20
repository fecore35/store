const cartReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "cart/Add":
      return [...state, payload];

    case "cart/Change":
      return state.map((product) => {
        if (product.id === payload.id) {
          product = { ...product, count: payload.count };
        }
        return product;
      });

    case "cart/Delete":
      return state.filter((product) => product.id !== payload.id);

    case "cart/FetchSuccess":
      return [];

    default:
      return state;
  }
};
export default cartReducer;
