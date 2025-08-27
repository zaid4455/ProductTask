import React from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

function AddProduct() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>اضافة منتج</h2>
      <ProductForm onSuccess={() => navigate("/Dashboard")} />
    </div>
  );
}

export default AddProduct;
