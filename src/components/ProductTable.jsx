import React from "react"; // استيراد
import { Link } from "react-router-dom"; // روابط

function ProductTable({ products, onDelete }) { // جدول المنتجات
  return (
    <table border="1" cellPadding="5"> {/* جدول */}
      <thead>
        <tr>
          {/* رؤوس الأعمدة */}
          <th>رقم المنتج</th>
          <th>اسم المنتج</th>
          <th>وصف مختصر</th>
          <th>حالة المنتج</th>
          <th>السعر</th>
          <th>الخصم</th>
          <th>حالة الخصم</th>
          <th>تاريخ بداية الخصم</th>
          <th>تاريخ انتهاء الخصم</th>
          <th>الكمية</th>
          <th>القسم</th>
          <th>البراند</th>
          <th>صورة</th>
          <th>الإجراءات</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => ( // تكرار المنتجات
          <tr key={p.id}>
            <td>{p.productNumber}</td> {/* رقم */}
            <td>{p.name}</td> {/* اسم */}
            <td>{p.shortDescription}</td> {/* وصف قصير */}
            <td>{p.status === "active" ? "فعال" : "غير فعال"}</td> {/* حالة */}
            <td>{p.price}</td> {/* سعر */}
            <td>{p.discount}</td> {/* خصم */}
            <td>{p.discountStatus === "yes" ? "يوجد" : "لا يوجد"}</td> {/* حالة خصم */}
            <td>{p.discountStart}</td> {/* بداية خصم */}
            <td>{p.discountEnd}</td> {/* نهاية خصم */}
            <td>{p.quantity}</td> {/* كمية */}
            <td>{p.category}</td> {/* قسم */}
            <td>{p.brand}</td> {/* براند */}
            <td>
              {p.images && p.images.length > 0 && ( // صورة أولى
                <img src={p.images[0]} alt={p.name} width="50" />
              )}
            </td>
            <td>
              {/* روابط وإجراءات */}
              <Link to={`/edit/${p.id}`}>تعديل</Link> |{" "}
              <Link to={`/details/${p.id}`}>عرض</Link> |{" "}
              <button onClick={() => onDelete(p.id)}>حذف</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable; // تصدير
