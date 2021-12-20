const productsReducer = (state = [], action) => {
  switch (action.type) {
    case "products/FetchSuccess":
      return [...action.payload];

    case "products/LoadMoreSuccess":
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default productsReducer;
