import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/homepage";
import ProductPage from "./components/pages/ProductPage";
import ProductManagementPage from "./components/pages/ProductManagementPage";
import productsData from "./data/products.json";

function App() {
  const [data, setData] = useState(productsData);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage data={data} />} />
        <Route
          path="product/:productId"
          element={<ProductPage data={data} />}
        />
        <Route
          path="product-management"
          element={<ProductManagementPage data={data} setData={setData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
