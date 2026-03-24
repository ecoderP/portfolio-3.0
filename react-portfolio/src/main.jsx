import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import ScrollToTop from "./components/scroll_to_top.js";
// import { BrowserRouter, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
