import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getCartList } from "redux/selectors";

import CartItem from "components/CartItem";

import s from "./CartList.module.css";

function Cart({ makeOrder }) {
  const cartList = useSelector(getCartList);
  const totalPrice = useMemo(
    () =>
      cartList.reduce((acc, product) => acc + product.price * product.count, 0),
    [cartList]
  );

  return (
    <div>
      {cartList &&
        cartList.map(({ id, title, image, price, count }) => (
          <CartItem
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            count={count}
          />
        ))}

      <div className={s.sum}>
        <div>Total: ${totalPrice}</div>

        <button className="btn cart__button" type="button" onClick={makeOrder}>
          <span className="btn__text">To order</span>
        </button>
      </div>
    </div>
  );
}

export default Cart;
