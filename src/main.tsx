import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/page";
import CryptoPage from "./pages/crypto/page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="crypto" element={<CryptoPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
