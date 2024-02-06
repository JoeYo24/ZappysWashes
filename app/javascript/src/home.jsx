import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "@components/navbar";
import DealCarousel from "@components/dealCarousel";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-center pt-1 w-100 dealsHeader">Deals</h1>
      <div className="d-flex">
        <DealCarousel />
      </div>
      <div className="d-flex container mb-5">
        <div className="row w-100">
          <div className="col-12 col-lg-3">
            <a href="#" className="card-link">
              <div className="card-container rounded">
                Unlimited Club        
              </div>
            </a>
          </div>
          <div className="col-12 col-lg-3">
            <a href="#" className="card-link">
              <div className="card-container rounded">
                Gift Cards
              </div>
            </a>  
          </div>
          <div className="col-12 col-lg-3">
            <a className="card-link" href="#">
              <div className="card-container rounded">
                Book a Detail
              </div>
            </a>  
          </div>
          <div className="col-12 col-lg-3">
            <a className="card-link" href="#">
              <div className="card-container rounded">
                Retail Products
              </div>
            </a>
          </div>
        </div>
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