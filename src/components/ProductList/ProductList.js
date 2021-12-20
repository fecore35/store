import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProducts, getLoading } from "redux/selectors";
import { asyncActionCreator } from "redux/products/products-operation";

import ProductCart from "components/ProductCard";

import skeletons from "./skeletons.json";

import s from "./ProductList.module.css";
import LoadMore from "components/LoadMore";

function ProductList() {
  const productsContainer = useRef(null);

  const products = useSelector(getProducts);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncActionCreator());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <ul className={s.grid}>
      {skeletons.map(({ id, title, image, price }) => (
        <ProductCart
          key={id}
          id={id}
          title={title}
          image={image}
          price={price}
        />
      ))}
    </ul>
  ) : (
    products && (
      <>
        <ul ref={productsContainer} className={s.grid}>
          {products.map(({ id, title, image, price }, index) => (
            <ProductCart
              key={index + id}
              id={id}
              title={title}
              image={image}
              price={price}
            />
          ))}
        </ul>

        <LoadMore productsContainer={productsContainer} />
      </>
    )
  );
}

export default ProductList;
