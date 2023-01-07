import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import App from "./App";

const Routers = () => {
    return (
      <Router>
        <App>
            <Routes>
                <Route path="/products" element={<Dashboard />} />
            </Routes>
        </App>
      </Router>
    );
  }

export default Routers;