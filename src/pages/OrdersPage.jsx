import "./Orders.css";
import { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useNavigate } from "react-router-dom";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    const res = await fetch(`${API_URL}/orders`);
    const data = await res.json();
    setOrders(data);
  }

  async function deleteOrder(id) {
    await fetch(`${API_URL}/orders/${id}`, { method: "DELETE" });
    loadOrders();
  }

  return (
    <div className="page-container">
      <h1>Orders</h1>

      <button className="btn-add" onClick={() => navigate("/add-order")}>
        + Add Order
      </button>

      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Farmer</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.product_name}</td>
              <td>{o.farmer}</td>
              <td>{o.quantity}</td>
              <td>{o.status}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => deleteOrder(o.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
