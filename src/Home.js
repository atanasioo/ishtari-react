import React from "react";
import ProductList from "./ProductList";
import { RingLoader } from "react-spinners";

const Home = ({ products, loading }) => {
  return (
    <div className="home-container">
      {loading ? (
        <RingLoader
          className="spinner-override"
          color={"red"}
          loading={loading}
          size={150}
        />
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default Home;
