import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

//context
import { AppProvider } from "./context";
//components/pages
import App from "./App";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar-component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <Router>
      
      <App />
      <Footer />
    </Router>
  </AppProvider>
);
