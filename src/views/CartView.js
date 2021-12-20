import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCartCount, getProductsCart } from "redux/selectors";
import { makeOrder } from "redux/cart/cart-operation";

import CustomLink from "components/CustomLink";
import CartList from "components/CartList";

function CartView() {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const cart = useSelector(getProductsCart);
  const dispatch = useDispatch();

  const cartCount = useSelector(getCartCount);

  const handlerOrder = () => {
    setOrderSuccess(true);
    dispatch(makeOrder(cart));
  };

  return (
    <>
      <section className="cart section">
        <div className="container">
          <h1 className="title">Cart</h1>

          {cartCount === 0 ? (
            <div className="cart__empty">
              <div className="cart__empty">
                {orderSuccess
                  ? "Your order is being processed"
                  : "Your cart is empty"}
              </div>
              <CustomLink to="/" className="cart__button">
                <span className="btn__text">Go to shop</span>
              </CustomLink>
            </div>
          ) : (
            <CartList makeOrder={handlerOrder} />
          )}
        </div>
      </section>
    </>
  );
}

export default CartView;
