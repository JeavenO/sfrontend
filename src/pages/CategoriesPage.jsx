import "./Categories.css";
import { useState, useEffect } from "react";
import { API_URL } from "../api";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");

  // Fetch categories
  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    const res = await fetch(`${API_URL}/categories`);
    const data = await res.json();
    setCategories(data);
  }

  // Add category
  async function handleAdd() {
    if (!name.trim()) return;

    await fetch(`${API_URL}/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    setName("");
    loadCategories();
  }

  // Delete category
  async function deleteCategory(id) {
    await fetch(`${API_URL}/categories/${id}`, { method: "DELETE" });
    loadCategories();
  }

  return (
    <div className="page-container">
      <h1>Categories</h1>

      <div className="form-row">
        <input
          type="text"
          placeholder="New category name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td>{cat.id}</td>
              <td>{cat.name}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => deleteCategory(cat.id)}
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
