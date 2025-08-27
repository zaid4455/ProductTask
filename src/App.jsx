import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ViewDetails from "./pages/ViewDetails";

function App() {
  return (
    <Router>
      <Routes>
  <Route path="/" element={<Login />} /> 
  <Route path="/Login" element={<Login />} /> 
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/add" element={<AddProduct />} />
  <Route path="/edit/:id" element={<EditProduct />} />
  <Route path="/ProductDetails/:id" element={<ViewDetails />} />
</Routes>

    </Router>
  );
}

export default App;
