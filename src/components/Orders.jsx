import { useEffect, useState } from "react";
import "./Pages.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function loadOrders() {
      const res = await fetch("http://127.0.0.1:8000/orders");
      const data = await res.json();
      setOrders(data);
    }
    loadOrders();
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">🧾 Orders</h1>
      <p className="page-subtitle">Track all placed customer orders.</p>

      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((ord) => (
              <tr key={ord.id}>
                <td>{ord.id}</td>
                <td>{ord.customer_name}</td>
                <td>{ord.product_name}</td>
                <td>{ord.quantity}</td>
                <td>${ord.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
