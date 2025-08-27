import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate(); // هوك للتنقل بين الصفحات
  const [email, setEmail] = useState(""); // حالة لتخزين البريد الإلكتروني
  const [password, setPassword] = useState(""); // حالة لتخزين كلمة المرور

  const handleSubmit = (e) => {
    e.preventDefault(); // منع تحديث الصفحة عند الإرسال
    localStorage.setItem("userEmail", email); // حفظ البريد الإلكتروني في LocalStorage
    navigate("/dashboard"); // التوجه إلى صفحة لوحة التحكم بعد تسجيل الدخول
  };

  return (
    <div style={{
      display: "flex", // ترتيب المحتوى بشكل فلكس
      justifyContent: "center", // توسيط أفقي
      alignItems: "center", // توسيط عمودي
      minHeight: "100vh", // جعل العنصر بارتفاع الشاشة كاملة
      background: "#f5f6fa", // لون الخلفية
      fontFamily: "'Arial', sans-serif", // نوع الخط
      padding: "20px" // مسافة داخلية
    }}>
      <div style={{
        background: "#fff", // خلفية بيضاء للصندوق
        padding: "40px 30px", // مسافة داخلية
        borderRadius: "16px", // حواف دائرية
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)", // ظل خفيف للصندوق
        width: "100%", // عرض كامل
        maxWidth: "400px", // الحد الأقصى للعرض
        textAlign: "center" // محاذاة النص في الوسط
      }}>
        <h1 style={{ marginBottom: "30px", color: "#6c5ce7" }}>تسجيل الدخول</h1>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          {/* حقل إدخال البريد الإلكتروني */}
          <div style={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
            <label style={{ marginBottom: "5px", fontWeight: "500" }}>البريد الإلكتروني:</label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} // تحديث القيمة عند الكتابة
              required 
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "0.3s"
              }}
              onFocus={e => e.target.style.borderColor = "#6c5ce7"} // تغيير لون الإطار عند التركيز
              onBlur={e => e.target.style.borderColor = "#ccc"} // إعادة اللون عند فقدان التركيز
            />
          </div>

          {/* حقل إدخال كلمة المرور */}
          <div style={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
            <label style={{ marginBottom: "5px", fontWeight: "500" }}>كلمة المرور:</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} // تحديث القيمة عند الكتابة
              required 
              style={{
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                transition: "0.3s"
              }}
              onFocus={e => e.target.style.borderColor = "#6c5ce7"} // تغيير لون الإطار عند التركيز
              onBlur={e => e.target.style.borderColor = "#ccc"} // إعادة اللون عند فقدان التركيز
            />
          </div>

          {/* زر تسجيل الدخول */}
          <button 
            type="submit" 
            style={{
              padding: "12px 20px",
              background: "#6c5ce7",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
              transition: "0.3s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "#4834d4"} // تغيير لون الخلفية عند المرور
            onMouseOut={e => e.currentTarget.style.background = "#6c5ce7"} // إعادة اللون الأصلي
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
