import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order/:id" element={<Order />} />
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </>
  );
};

export default App;
