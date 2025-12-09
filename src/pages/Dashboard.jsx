import "./Dashboard.css";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [summary, setSummary] = useState({
    categories: 0,
    products: 0,
    orders: 0,
  });

  useEffect(() => {
    async function loadData() {
      try {
        const [cat, prod, ord] = await Promise.all([
          fetch("http://127.0.0.1:8000/categories").then((r) => r.json()),
          fetch("http://127.0.0.1:8000/products").then((r) => r.json()),
          fetch("http://127.0.0.1:8000/orders").then((r) => r.json()),
        ]);

        setSummary({
          categories: cat.length,
          products: prod.length,
          orders: ord.length,
        });
      } catch (error) {
        console.error("Dashboard fetch failed:", error);
      }
    }

    loadData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title"> SmartAgro Dashboard</h1>
      <p className="dashboard-subtitle">
        Quick overview of your agriculture management system.
      </p>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Categories</h3>
          <p className="dashboard-number">{summary.categories}</p>
        </div>

        <div className="dashboard-card">
          <h3>Products</h3>
          <p className="dashboard-number">{summary.products}</p>
        </div>

        <div className="dashboard-card">
          <h3>Orders</h3>
          <p className="dashboard-number">{summary.orders}</p>
        </div>
      </div>
    </div>
  );
}
