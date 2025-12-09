import "./Form.css";
import { useState } from "react";

export default function AddCategoryPage() {
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("http://127.0.0.1:8000/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    alert("Category added!");
    setName("");
  }

  return (
    <div className="form-container">
      <h1>Add New Category</h1>

      <form className="form-box" onSubmit={handleSubmit}>
        <label>Category Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter category name..."
        />

        <button type="submit">Add Category</button>
      </form>
    </div>
  );
}
