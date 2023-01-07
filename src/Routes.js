import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import App from "./App";
import Home from "./Pages/Home";

const Routers = () => {
    return (
      <Router baseName={"/"}>
        <App>
            <Routes>
                <Route exact path="/products" element={<Dashboard />} />
                <Route exact path={"/"} element={<Home />} header={false} />
            </Routes>
        </App>
      </Router>
    );
  }

export default Routers;