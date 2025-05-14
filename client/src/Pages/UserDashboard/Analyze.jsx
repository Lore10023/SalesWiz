import React from "react";
import "./UserDash.css";

function AnalyzeDashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Analyze Data</h2>
      </header>

      {/* Metrics Grid */}
      <section className="dashboard-metrics">
        <div className="metric-card">Total Revenue: $1,234,567</div>
        <div className="metric-card">Top Product: Widget X ($234,000)</div>
        <div className="metric-card">Avg. Product Price: $45.67</div>
        <div className="metric-card">Total Quantity Sold: 12,345</div>
        <div className="metric-card">Top Category: Electronics ($543,210)</div>
        <div className="metric-card">Avg. Revenue per Sale: $89.50</div>
      </section>

      {/* Charts Section */}
      <section className="dashboard-charts">
        <h3>Quarterly Revenue</h3>
        <div className="chart-placeholder">[Bar Chart: Q1–Q4 Revenue]</div>
      </section>

      {/* Data Table or Details */}
      <section className="dashboard-table">
        <h3>Sales Summary</h3>
        <div className="table-placeholder">[Table: Products, Sales, Revenue]</div>
      </section>
    </div>
  );
}

export default AnalyzeDashboard;
