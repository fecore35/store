export const addToCart = (product) => ({
  type: "cart/Add",
  payload: product,
});

export const changeProductCount = (cartItem) => ({
  type: "cart/Change",
  payload: cartItem,
});

export const deleteProduct = (id) => ({
  type: "cart/Delete",
  payload: { id },
});

export const fetchStart = () => ({
  type: "cart/FetchStart",
});

export const fetchSuccess = (data) => ({
  type: "cart/FetchSuccess",
  payload: data,
});

export const fetchFailure = (error) => ({
  type: "cart/FetchFailure",
  payload: error,
});
