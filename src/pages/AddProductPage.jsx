import "./Form.css";
import { useState } from "react";

export default function AddProductPage() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category_id: "",
  });

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://127.0.0.1:8000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    alert("Product added!");
    setProduct({ name: "", price: "", category_id: "" });
  }

  return (
    <div className="form-container">
      <h1>Add New Product</h1>

      <form className="form-box" onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input name="name" value={product.name} onChange={handleChange} />

        <label>Price</label>
        <input name="price" value={product.price} onChange={handleChange} />

        <label>Category ID</label>
        <input
          name="category_id"
          value={product.category_id}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

await fetch(`${API_URL}/products`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newProduct),
});
