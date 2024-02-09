import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "@components/navbar";
import DealCarousel from "@components/dealCarousel";
import FilterLocation from "@components/filterLocation";
import Footer from "@components/footer";
import "./home.scss";

const Home = () => {
  const [selectedType, setSelectedType] = useState(null);

  const locations = [
    {
      name: "Location 1",
      type: "Car Wash",
      image: "https://via.placeholder.com/150",
      address: "123 Main St."
    },
    {
      name: "Location 2",
      type: "Detail Center",
      image: "https://via.placeholder.com/150",
      address: "456 Elm St."
    },
    {
      name: "Location 3",
      type: "Car Wash",
      image: "https://via.placeholder.com/150",
      address: "789 Oak St."
    },
    {
      name: "Location 4",
      type: "Detail Center",
      image: "https://via.placeholder.com/150",
      address: "1011 Pine St."
    },
    {
      name: "Location 5",
      type: "Car Wash",
      image: "https://via.placeholder.com/150",
      address: "1213 Cedar St."
    },
    {
      name: "Location 6",
      type: "Retail Store",
      image: "https://via.placeholder.com/150",
      address: "1415 Maple St."
    },
    {
      name: "Location 7",
      type: "Gas Store",
      image: "https://via.placeholder.com/150",
      address: "1617 Birch St."
    },
    {
      name: "Location 8",
      type: "Detail Center",
      image: "https://via.placeholder.com/150",
      address: "1819 Walnut St."
    },
    {
      name: "Location 9",
      type: "Car Wash",
      image: "https://via.placeholder.com/150",
      address: "2021 Spruce St."
    },
    {
      name: "Location 10",
      type: "Car Wash",
      image: "https://via.placeholder.com/150",
      address: "2223 Pine St."
    }
  ];
  
  return (
    <div>
      <Navbar />
      <h1 className="text-center pt-1 w-100 dealsHeader">Deals</h1>
      <div className="d-flex">
        <DealCarousel />
      </div>
      <div className="d-flex container mb-5">
        <div className="row w-100 ms-auto me-auto">
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

      <h1 className="text-center pt-1 w-100 locationsHeader">Locations</h1>
      <div className="d-flex filterContainer w-100">
        <button className="btn rounded" onClick={() => setSelectedType(null)}>All</button>
        <button className="btn rounded" onClick={() => setSelectedType("Car Wash")}>Car Wash</button>
        <button className="btn rounded" onClick={() => setSelectedType("Detail Center")}>Detail Center</button>
        <button className="btn rounded" onClick={() => setSelectedType("Gas Store")}>Gas Store</button>
        <button className="btn rounded" onClick={() => setSelectedType("Retail Store")}>Retail Store</button>
      </div>
      <div className="d-flex container mb-5 scroll-component">
        <FilterLocation locations={ locations } selectedType={selectedType} />
      </div>
      <div className="footer">
        <Footer />
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