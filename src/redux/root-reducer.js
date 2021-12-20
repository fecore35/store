import { combineReducers } from "redux";
import productsReducer from "./products/products-reducer";
import cartReducer from "./cart/cart-reducer";

const loadingsReducer = (state = false, action) => {
  switch (action.type) {
    case "products/FetchStart":
      return true;

    case "products/FetchSuccess":
      return false;

    case "products/FetchFailure":
      return false;

    case "cart/FetchStart":
      return true;

    case "cart/FetchSuccess":
      return false;

    case "cart/FetchFailure":
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case "products/FetchFailure":
      return action.payload;

    case "products/LoadMoreFailure":
      return action.payload;

    case "cart/FetchFailure":
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  isLoading: loadingsReducer,
  error: errorReducer,
});
