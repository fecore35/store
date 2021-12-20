import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { changeProductCount, deleteProduct } from "redux/cart/cart-action";

import s from "./CartItem.module.css";

function CartItem({ id, title, image, price, count }) {
  const [productCount, setProductCount] = useState(count);
  const dispatch = useDispatch();

  const handlerProductCount = (event) => {
    const value = event.target.value;

    if (value > 0) {
      setProductCount(value);
    }
  };

  const handlerDecrement = () => {
    if (productCount > 1) {
      setProductCount((state) => Number(state) - 1);
    }
  };

  const handlerIncrement = () => {
    if (productCount >= 1) {
      setProductCount((state) => Number(state) + 1);
    }
  };

  const handlerDeleteProduct = () => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    dispatch(changeProductCount({ id, count: productCount }));
  }, [dispatch, id, productCount]);

  return (
    <div className={s.item}>
      <picture className={s.pic}>
        <img src={image} alt={title} />
      </picture>
      <div className={s.inner}>
        <div className={s.info}>
          <h2 className={s.name}>{title}</h2>
        </div>
        <div className={s.count}>
          <span className={s.label}>Count</span>
          <div className={s.countBlock}>
            <button className={s.countBtn} onClick={handlerDecrement}>
              -
            </button>
            <input
              type="text"
              name="count"
              value={productCount}
              onChange={handlerProductCount}
            />
            <button className={s.countBtn} onClick={handlerIncrement}>
              +
            </button>
          </div>
        </div>
        <div className={s.price}>
          <span className={s.priceCount}>
            $<span>{price * productCount}</span>
          </span>
          <button
            className={s.delete}
            type="button"
            onClick={handlerDeleteProduct}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
