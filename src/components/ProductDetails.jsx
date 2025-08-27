import React, { useEffect, useState } from "react"; // استيراد React و hooks
import { useParams, Link } from "react-router-dom"; // useParams لجلب باراميتر من الرابط + Link للتنقل بين الصفحات
import axios from "axios"; // مكتبة axios لجلب البيانات من API

function ViewDetails() {
  const { id } = useParams(); // جلب قيمة id من الرابط (مثلاً /products/1 → id = 1)
  const [product, setProduct] = useState(null); // state لتخزين بيانات المنتج

  useEffect(() => {
    // جلب بيانات المنتج عند تحميل الصفحة أو تغير id
    axios.get(`/products/${id}`).then((res) => {
      setProduct(res.data); // تخزين بيانات المنتج في state
    });
  }, [id]); // إعادة تنفيذ عند تغيير id

  // إذا لم يتم جلب البيانات بعد، عرض رسالة تحميل
  if (!product) return <p>جاري التحميل...</p>;

  // عرض تفاصيل المنتج بعد جلب البيانات
  return (
    <div>
      <h1>تفاصيل المنتج: {product.name}</h1>

      {/* رقم المنتج */}
      <p><strong>رقم المنتج:</strong> {product.productNumber}</p>

      {/* وصف مختصر */}
      <p><strong>وصف مختصر:</strong> {product.shortDescription}</p>

      {/* الوصف الكامل */}
      <p><strong>الوصف الكامل:</strong> {product.description}</p>

      {/* حالة المنتج */}
      <p><strong>حالة المنتج:</strong> {product.status === "active" ? "فعال" : "غير فعال"}</p>

      {/* السعر */}
      <p><strong>السعر:</strong> {product.price}</p>

      {/* حالة الخصم */}
      <p><strong>حالة الخصم:</strong> {product.discountStatus === "yes" ? "يوجد" : "لا يوجد"}</p>

      {/* قيمة الخصم */}
      <p><strong>الخصم:</strong> {product.discount}</p>

      {/* تاريخ بداية الخصم */}
      <p><strong>تاريخ بداية الخصم:</strong> {product.discountStart}</p>

      {/* تاريخ انتهاء الخصم */}
      <p><strong>تاريخ انتهاء الخصم:</strong> {product.discountEnd}</p>

      {/* الكمية المتوفرة */}
      <p><strong>الكمية:</strong> {product.quantity}</p>

      {/* القسم */}
      <p><strong>القسم:</strong> {product.category}</p>

      {/* البراند */}
      <p><strong>البراند:</strong> {product.brand}</p>

      {/* الصور */}
      <div>
        <strong>الصور:</strong>
        {product.images && product.images.map((img, index) => (
          <img key={index} src={img} alt={product.name} width="100" />
        ))}
      </div>

      {/* زر الرجوع للوحة التحكم */}
      <Link to="/">العودة للوحة التحكم</Link>
    </div>
  );
}

export default ViewDetails;
