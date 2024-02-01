import React from "react";
import { createRoot } from "react-dom/client";
import AbcIcon from '@mui/icons-material/Abc';
import "./home.scss";

const Home = () => {
  return (
    <div>
      <h1 className="text-danger">Hello, World!</h1>
      <AbcIcon  className="abcIcon" />
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.createElement("div");
  document.body.appendChild(rootElement);

  const root = createRoot(rootElement);
  root.render(<Home />);
});