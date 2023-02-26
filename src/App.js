import React, { useState, useEffect } from "react";
// import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducst] = useState([]);

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   setProducst(data);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <>
      <Navbar />
      {/* <Products products={products} /> */}
    </>
  );
};

export default App;
