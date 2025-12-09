import { useEffect, useState } from "react";
import "./AddOrder.css";

function AddOrder() {
  const [products, setProducts] = useState([]);
  const [customer, setCustomer] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addItem = () => {
    setItems([...items, { product_id: "", quantity: 1 }]);
  };

  const updateItem = (index, key, value) => {
    const updated = [...items];
    updated[index][key] = value;
    setItems(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customer_name: customer,
        items: items.map((i) => ({
          product_id: parseInt(i.product_id),
          quantity: parseInt(i.quantity),
        })),
      }),
    });

    alert("Order created!");
    setCustomer("");
    setItems([]);
  };

  return (
    <div className="form-container">
      <h2>Create New Order</h2>

      <form onSubmit={handleSubmit}>
        <label>Customer Name</label>
        <input
          value={customer}
          required
          onChange={(e) => setCustomer(e.target.value)}
        />

        <h3>Order Items</h3>

        {items.map((item, i) => (
          <div className="item-box" key={i}>
            <select
              value={item.product_id}
              onChange={(e) => updateItem(i, "product_id", e.target.value)}
            >
              <option value="">Select product</option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              value={item.quantity}
              onChange={(e) => updateItem(i, "quantity", e.target.value)}
            />
          </div>
        ))}

        <button type="button" className="btn" onClick={addItem}>
          + Add Product
        </button>

        <button type="submit" className="btn submit-btn">
          Submit Order
        </button>
      </form>
    </div>
  );
}

export default AddOrder;
