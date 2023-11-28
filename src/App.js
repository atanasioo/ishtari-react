import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Home products={products} loading={loading} />
      <Footer />
    </div>
  );
}

export default App;
