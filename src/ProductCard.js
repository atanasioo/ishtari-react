import React, { useState, useEffect, useRef } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { RingLoader } from "react-spinners";

function ProductCard({ products }) {
  const [displayedProducts, setDisplayedProducts] = useState(10);
  const [loading, setLoading] = useState(false);
  const lastProductRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const wh = window.innerHeight;
      const scroll = window.scrollY;

      const isBottom =
        wh + scroll >= document.documentElement.scrollHeight;

      if (isBottom && displayedProducts < products.length && !loading) {
        setLoading(true);

        setTimeout(() => {
          setLoading(false);
          setDisplayedProducts((prevCount) => prevCount + 10);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displayedProducts, loading, products.length]);

  return (
    <>
      {products.slice(0, displayedProducts).map((product, index) => (
        <Col
          key={product.id}
          className="product-list"
          ref={index === displayedProducts - 1 ? lastProductRef : null}
        >
          <Card style={{ width: "14rem", height: "21rem" }}>
            <Card.Img
              variant="top"
              src={product.imageUrl}
              className="card-image"
            />
            <Card.Body className="d-flex flex-column card-body">
              <Card.Title className="card-title">{product.name}</Card.Title>
              <Card.Text className="card-description">
                {product.description}
              </Card.Text>
              <Row className="mt-auto">
                <Col>
                  <Card.Text className="card-text-bold">
                    {product.price}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {loading && (
        <Row className="mt-4">
          <Col className="text-center">
            <RingLoader
              color="red"
              loading={loading}
              size={50}
              className="mx-auto d-block"
            />
          </Col>
        </Row>
      )}
    </>
  );
}

export default ProductCard;
