/* Demo */
import testData from "db/products.json";
import loadMoreData from "db/products-loadmore.json";

import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
  loadMoreStart,
  loadMoreSuccess,
  loadMoreFailure,
} from "redux/products/products-action";

export const asyncActionCreator = () => (dispatch) => {
  dispatch(fetchStart());

  fetch("https://api.agify.io/?name=bella")
    .then((r) => r.json())
    .then((data) => {
      /* Demo */
      // dispatch(fetchSuccess(data));
      dispatch(fetchSuccess(testData));
    })
    .catch((err) => dispatch(fetchFailure(err)));
};

export const asyncLoadMore = () => (dispatch) => {
  dispatch(loadMoreStart());

  fetch("https://api.agify.io/?name=bella")
    .then((r) => r.json())
    .then((data) => {
      /* Demo */
      // dispatch(fetchSuccess(data));
      dispatch(loadMoreSuccess(loadMoreData));
    })
    .catch((err) => dispatch(loadMoreFailure(err)));
};
