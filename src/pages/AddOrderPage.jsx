import "./Form.css";
import { useState } from "react";

export default function AddOrderPage() {
  const [order, setOrder] = useState({
    product_id: "",
    quantity: "",
    date: "",
  });

  function handleChange(e) {
    setOrder({ ...order, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://127.0.0.1:8000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    alert("Order added!");
    setOrder({ product_id: "", quantity: "", date: "" });
  }

  return (
    <div className="form-container">
      <h1>Add New Order</h1>

      <form className="form-box" onSubmit={handleSubmit}>
        <label>Product ID</label>
        <input
          name="product_id"
          value={order.product_id}
          onChange={handleChange}
        />

        <label>Quantity</label>
        <input name="quantity" value={order.quantity} onChange={handleChange} />

        <label>Date</label>
        <input
          name="date"
          value={order.date}
          onChange={handleChange}
          type="date"
        />

        <button type="submit">Add Order</button>
      </form>
    </div>
  );
}
