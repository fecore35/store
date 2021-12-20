import { fetchStart, fetchSuccess, fetchFailure } from "./cart-action";

export const makeOrder = (products) => (dispatch) => {
  dispatch(fetchStart());

  fetch("https://api.agify.io/?name=bella")
    .then((r) => r.json())
    .then((data) => {
      dispatch(fetchSuccess());
    })
    .catch((err) => dispatch(fetchFailure(err)));
};
