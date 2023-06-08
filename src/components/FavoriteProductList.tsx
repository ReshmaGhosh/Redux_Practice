import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function FavoriteProductList() {
  const favProductList = useSelector(
    (state: RootState) => state.product.favProducts
  );

  return (
    <div>
      <h1>FavoriteProductList</h1>
      {favProductList.map((product) => {
        return (
          <div>
            <p>{product.title}</p>
          </div>
        );
      })}
    </div>
  );
}
