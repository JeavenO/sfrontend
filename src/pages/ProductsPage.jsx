import "./Products.css";
import { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useNavigate } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const res = await fetch(`${API_URL}/products`);
    const data = await res.json();
    setProducts(data);
  }

  async function deleteProduct(id) {
    await fetch(`${API_URL}/products/${id}`, { method: "DELETE" });
    loadProducts();
  }

  return (
    <div className="page-container">
      <h1>Products</h1>

      <button className="btn-add" onClick={() => navigate("/add-product")}>
        + Add Product
      </button>

      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.category_name}</td>
              <td>${p.price}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => deleteProduct(p.id)}
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
