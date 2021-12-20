import { createSelector } from "reselect";

/* Demo */
import product1 from "db/products.json";
import product2 from "db/products-loadmore.json";

const allProducts = [...product1, ...product2];

export const getProducts = (state) => state.products;

export const getProductsCart = (state) => state.cart;

export const getLoading = (state) => state.isLoading;

export const getCartCount = createSelector(getProductsCart, (products) => {
  return products.length;
});

export const getCartList = createSelector(
  getProducts,
  getProductsCart,
  (products, cart) => {
    return cart.reduce((acc, cartItem) => {
      /* Demo */
      const fullProduct = allProducts.find(
        (product) => product.id === cartItem.id
      );

      acc = [...acc, { ...fullProduct, ...cartItem }];
      return acc;
    }, []);
  }
);
