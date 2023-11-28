import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light d-flex justify-content-between align-items-center">
      <Container>
        <Row>
          <Col>
            <p>&copy; 2023 ishtari. All rights reserved.</p>
          </Col>
          <Col>
            <div>
              <FaCcVisa size={30} className="mx-1" />
              <FaCcMastercard size={30} className="mx-1" />
              <FaCcAmex size={30} className="mx-1" />
            </div>
          </Col>

          <Col className="small">
            <span className="mx-1">
              <a>Privacy Policy</a>
            </span>
            <span className="mx-1">
              <a>About Us</a>
            </span>
            <span className="mx-1">
              <a>Return Policy</a>
            </span>
            <span className="mx-1">
              <a>FAQ</a>
            </span>
            <span className="mx-2">
              <a>Terms And Conditions</a>
            </span>
            <span className="mx-4">
              <a>Sell On Ishtari</a>
            </span>
            <span className="mx-1">
              <a>Contact Us</a>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
