import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title"> Welcome to SmartAgro</h1>
      <p className="home-subtitle">
        Your intelligent agricultural management system.
      </p>

      <div className="home-grid">
        <div className="home-card">
          <h3>Manage Categories</h3>
          <p>Organize all your agricultural categories effortlessly.</p>
        </div>

        <div className="home-card">
          <h3> Track Products</h3>
          <p>Monitor all farm inputs and produce with real-time updates.</p>
        </div>

        <div className="home-card">
          <h3> Handle Orders</h3>
          <p>Keep all customer orders organized and up-to-date.</p>
        </div>
      </div>
    </div>
  );
}
