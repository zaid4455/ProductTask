import React, { useState, useEffect } from "react"; // استيراد
import axios from "axios"; // API
import { useNavigate } from "react-router-dom"; // تنقل

function ProductForm({ productId, onSuccess }) {
  const [product, setProduct] = useState({ // حالة المنتج
    name: "", shortDescription: "", description: "", status: "",
    productNumber: "", price: "", discountStatus: "", discount: "",
    discountStart: "", discountEnd: "", quantity: "", category: "",
    brand: "", images: []
  });

  const navigate = useNavigate(); // تنقل

  useEffect(() => { // جلب بيانات
    if(productId){
      axios.get(`/products/${productId}`)
        .then(res => setProduct(res.data)) // تعبئة
        .catch(err => console.log(err)); // خطأ
    }
  }, [productId]);

  const handleChange = (e) => { // تغيير قيم
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => { // إرسال
    e.preventDefault();
    if(productId){
      axios.put(`/products/${productId}`, product) // تحديث
        .then(() => onSuccess())
        .catch(err => console.log(err));
    } else {
      axios.post("/products", product) // إضافة
        .then(() => onSuccess())
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* الحقول */}
        <input name="name" value={product.name} onChange={handleChange} placeholder="اسم المنتج" required />
        <input name="shortDescription" value={product.shortDescription} onChange={handleChange} placeholder="وصف قصير" />
        <input name="description" value={product.description} onChange={handleChange} placeholder="الوصف الكامل" />
        <input name="status" value={product.status} onChange={handleChange} placeholder="الحالة (نشط/غير نشط)" />
        <input name="productNumber" value={product.productNumber} onChange={handleChange} placeholder="رقم المنتج" />
        <input name="price" value={product.price} onChange={handleChange} placeholder="السعر" type="number" />
        <input name="discountStatus" value={product.discountStatus} onChange={handleChange} placeholder="هل يوجد خصم؟ (نعم/لا)" />
        <input name="discount" value={product.discount} onChange={handleChange} placeholder="قيمة الخصم" type="number" />
        <input name="discountStart" value={product.discountStart} onChange={handleChange} placeholder="بداية الخصم" type="date" />
        <input name="discountEnd" value={product.discountEnd} onChange={handleChange} placeholder="نهاية الخصم" type="date" />
        <input name="quantity" value={product.quantity} onChange={handleChange} placeholder="الكمية" type="number" />
        <input name="category" value={product.category} onChange={handleChange} placeholder="الفئة" />
        <input name="brand" value={product.brand} onChange={handleChange} placeholder="العلامة التجارية" />
        
        {/* زر حفظ */}
        <button type="submit">{productId ? "تحديث" : "إضافة"} المنتج</button>
   
        {/* زر العودة */}
        <button 
          style={{ marginTop: "10px" }} 
          onClick={() => navigate("/Dashboard")}
        >
          العودة الى لوحة التحكم
        </button>
      </form>
    </div>
  );
}

export default ProductForm; // تصدير
