export const fetchStart = () => ({
  type: "products/FetchStart",
});

export const fetchSuccess = (data) => ({
  type: "products/FetchSuccess",
  payload: data,
});

export const fetchFailure = (error) => ({
  type: "products/FetchFailure",
  payload: error,
});

export const loadMoreStart = () => ({
  type: "products/LoadMoreStart",
});

export const loadMoreSuccess = (data) => ({
  type: "products/LoadMoreSuccess",
  payload: data,
});

export const loadMoreFailure = (error) => ({
  type: "products/LoadMoreFailure",
  payload: error,
});
