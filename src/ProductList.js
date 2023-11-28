import React from "react";
import Container from "react-bootstrap/Container";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <Container fluid>
      <ProductCard products={products} />
    </Container>
  );
}

export default ProductList;
