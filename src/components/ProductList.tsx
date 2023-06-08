import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../types/type";
import { RootState } from "../redux/store";
import { actions } from "../redux/slices/product";

export default function ProductList() {
  const productList = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  function onClickHandler(item: Product) {
    dispatch(actions.addFavoriteProduct(item));
  }
  return (
    <div>
      ProductList
      {productList.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100px" }}
          />
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => onClickHandler(product)}>Add Favourite</button>
        </div>
      ))}
    </div>
  );
}
