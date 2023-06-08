import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import FavoriteProductList from "./components/FavoriteProductList";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
      <ProductList />;
      <FavoriteProductList />
    </div>
  );
}

export default App;
