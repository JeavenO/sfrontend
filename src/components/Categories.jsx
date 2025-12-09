import { useEffect, useState } from "react";
import "./Pages.css";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const res = await fetch("http://127.0.0.1:8000/categories");
      const data = await res.json();
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Categories</h1>
      <p className="page-subtitle">List of all available product categories.</p>

      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
