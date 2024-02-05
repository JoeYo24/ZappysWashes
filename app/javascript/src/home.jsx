import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "@components/navbar";
import DealCarousel from "@components/dealCarousel";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />

      <h1 className="text-center pt-1 w-100">Deals</h1>
      <div className="d-flex">
        <DealCarousel />
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.createElement("div");
  document.body.appendChild(rootElement);

  const root = createRoot(rootElement);
  root.render(<Home />);
});