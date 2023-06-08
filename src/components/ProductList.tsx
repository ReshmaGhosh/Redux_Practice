import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../types/type";
import { RootState } from "../redux/store";

export default function ProductList() {
  const products = useSelector((state: RootState) => state.product.productList);

  return (
    <div>
      ProductList
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
