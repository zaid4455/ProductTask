import React, { useEffect, useState } from "react"; // استيراد
import { Link, useNavigate } from "react-router-dom"; // روابط وتنقل
import axios from "axios"; // API

function Dashboard() {
  const navigate = useNavigate(); // تنقل
  const [products, setProducts] = useState([]); // حالة المنتجات
  const userEmail = localStorage.getItem("userEmail"); // إيميل المستخدم
  const userImage = "https://prodigits.co.uk/thumbs/wallpapers/p2ls/misc/45/b70c32c212370388.jpg"; // صورة المستخدم

  useEffect(() => { // جلب المنتجات
    axios.get("/products")
      .then(res => setProducts(res.data)) // تعبئة
      .catch(err => console.log(err)); // خطأ
  }, []);

  const handleDelete = (id) => { // حذف منتج
    axios.delete(`/products/${id}`)
      .then(() => setProducts(products.filter(p => p.id !== id)))
      .catch(err => console.log(err));
  };

  const handleLogout = () => { // تسجيل خروج
    localStorage.removeItem("userEmail");
    localStorage.removeItem("token");
    navigate("/Login"); 
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* شريط المستخدم */}
      <div className="user-info-bar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", background: "#fff", borderRadius: "12px", boxShadow: "0 3px 10px rgba(0,0,0,0.1)", marginBottom: "20px" }}>
        <div className="user-info-left" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button onClick={handleLogout} style={{ background: "#ff4757", color: "#fff", border: "none", padding: "6px 14px", borderRadius: "8px", cursor: "pointer", fontWeight: "500", transition: "0.3s" }}>تسجيل الخروج</button>
          <span>{userEmail}</span> {/* إيميل */}
          <img src={userImage} alt="User" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} /> {/* صورة المستخدم */}
        </div>
        <div className="user-info-right" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span>Phoenician</span> {/* اسم الشركة */}
          <img src="public/logo.png" alt="Company" style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover" }} /> {/* لوجو */}
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>لوحة التحكم</h1>
      
      {/* زر إضافة منتج */}
      <div className="btn-container">
        <Link to="/add">
          <button className="add-btn">إضافة منتج</button>
        </Link>
      </div>

      {/* جدول المنتجات */}
      <table border="1" cellPadding="5" style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse", textAlign: "center" }}>
        <thead>
          <tr>
            <th>رقم المنتج</th>
            <th>اسم المنتج</th>
            <th>وصف مختصر</th>
            <th>حالة المنتج</th>
            <th>السعر</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => ( // تكرار المنتجات
            <tr key={p.id}>
              <td>{p.productNumber}</td> {/* رقم */}
              <td>{p.name}</td> {/* اسم */}
              <td>{p.shortDescription}</td> {/* وصف */}
              <td>{p.status === "active" ? "فعال" : "غير فعال"}</td> {/* حالة */}
              <td>{p.price}</td> {/* سعر */}
              <td>
                {/* الإجراءات */}
                <Link to={`/edit/${p.id}`}><button className="edit">تعديل</button></Link>{" "}
                <Link to={`/ProductDetails/${p.id}`}><button className="view">عرض</button></Link>{" "}
                <button className="delete" onClick={() => handleDelete(p.id)}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard; // تصدير
