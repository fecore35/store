import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncLoadMore } from "redux/products/products-operation";
import { getProducts } from "redux/selectors";

import s from "./LoadMore.module.css";

function LoadMore({ productsContainer }) {
  const [isLoading, setIsLoading] = useState(false);
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  const handlerLoadMore = () => {
    setIsLoading(true);
    dispatch(asyncLoadMore());
  };

  useEffect(() => {
    productsContainer.current.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }, [products, productsContainer]);

  return !isLoading ? (
    <div className={s.wrap}>
      <button
        className="btn cart__button"
        type="button"
        onClick={handlerLoadMore}
      >
        <span className="btn__text">Load more</span>
      </button>
    </div>
  ) : null;
}

export default LoadMore;
