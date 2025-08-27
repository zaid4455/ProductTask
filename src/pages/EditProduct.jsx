import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h2>تعديل المنتج</h2>
      <ProductForm productId={id} onSuccess={() => navigate("/Dashboard")} />
    </div>
  );
}

export default EditProduct;
