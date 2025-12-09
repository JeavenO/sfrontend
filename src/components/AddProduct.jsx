import { useEffect, useState } from "react";
import "./AddProduct.css";

function AddProduct() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        price: parseFloat(price),
        stock: parseInt(stock),
        category_id: parseInt(categoryId),
      }),
    });

    alert("Product added!");
    setName("");
    setPrice("");
    setStock("");
    setCategoryId("");
  };

  return (
    <div className="form-container">
      <h2>Add New Product</h2>

      <form onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label>Price</label>
        <input
          type="number"
          value={price}
          required
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Stock</label>
        <input
          type="number"
          value={stock}
          required
          onChange={(e) => setStock(e.target.value)}
        />

        <label>Category</label>
        <select
          required
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Choose category</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        <button type="submit" className="btn">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
