import React, { useEffect, useState } from "react"; // استيراد
import { useParams, Link } from "react-router-dom"; // روابط ومعرف من الرابط
import axios from "axios"; // API

function ViewDetails() {
  const { id } = useParams(); // جلب id من الرابط
  const [product, setProduct] = useState(null); // حالة المنتج

  useEffect(() => { // جلب بيانات المنتج عند التحميل أو تغير id
    axios.get(`/products/${id}`)
      .then(res => setProduct(res.data)) // حفظ البيانات
      .catch(err => console.log(err)); // خطأ
  }, [id]);

  if (!product) return <p className="loading">جاري التحميل...</p>; // نص تحميل

  return (
    <div className="details-container"> {/* حاوية التفاصيل */}
      <div className="card"> {/* بطاقة المنتج */}
        <h1 className="title">تفاصيل المنتج: {product.name}</h1> {/* اسم المنتج */}
        <div className="info"> {/* معلومات المنتج */}
          <p><strong>رقم المنتج:</strong> {product.productNumber}</p> 
          <p><strong>وصف مختصر:</strong> {product.shortDescription}</p> 
          <p><strong>الوصف الكامل:</strong> {product.description}</p> 
          <p><strong>حالة المنتج:</strong> {product.status === "active" ? "فعال" : "غير فعال"}</p> 
          <p><strong>السعر:</strong> {product.price}</p> 
          <p><strong>حالة الخصم:</strong> {product.discountStatus === "yes" ? "يوجد" : "لا يوجد"}</p> 
          <p><strong>الخصم:</strong> {product.discount}</p> 
          <p><strong>تاريخ بداية الخصم:</strong> {product.discountStart}</p> 
          <p><strong>تاريخ انتهاء الخصم:</strong> {product.discountEnd}</p> 
          <p><strong>الكمية:</strong> {product.quantity}</p> 
          <p><strong>القسم:</strong> {product.category}</p> 
          <p><strong>البراند:</strong> {product.brand}</p> 
        </div>

        <div className="images"> {/* صور المنتج */}
          <strong>الصور:</strong><br />
          {product.images && product.images.map((img, index) => (
            <img
              key={index} // مفتاح لكل صورة
              src={img} 
              alt={product.name} 
              className="product-img" 
            />
          ))}
        </div>

        <Link to="/Dashboard" className="back-link">العودة للوحة التحكم</Link> {/* رابط العودة */}
      </div>
    </div>
  );
}

export default ViewDetails; // تصدير
