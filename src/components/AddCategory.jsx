import { useState } from "react";
import "./AddCategory.css";

function AddCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description }),
    });

    alert("Category added successfully!");
    setName("");
    setDescription("");
  };

  return (
    <div className="form-container">
      <h2>Add New Category</h2>

      <form onSubmit={handleSubmit}>
        <label>Category Name</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description</label>
        <textarea
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit" className="btn">
          Add Category
        </button>
      </form>
    </div>
  );
}

export default AddCategory;
