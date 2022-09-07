import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/:id" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
