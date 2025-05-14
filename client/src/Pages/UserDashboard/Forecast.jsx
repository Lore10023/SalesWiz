import React from "react";
import "./UserDash.css";

function ForecastDashboard() {
  return (
    <div className="forecast-dashboard">
      <header className="dashboard-header">
        <h2>Sales Forecast</h2>
        <div className="date-range-picker">[Date Range Selector]</div>
      </header>

      <section className="dashboard-metrics">
        <div className="metric-card">Projected Revenue: $2,300,000</div>
        <div className="metric-card">Growth Rate: +12%</div>
        <div className="metric-card">Forecasted Units: 20,000</div>
        <div className="metric-card">Avg. Revenue/Sale: $115</div>
      </section>

      <section className="dashboard-charts">
        <h3>Revenue Forecast (Next 12 Months)</h3>
        <div className="chart-placeholder">[Line Chart Placeholder]</div>
      </section>

      <section className="dashboard-charts">
        <h3>Forecasted Units per Product</h3>
        <div className="chart-placeholder">[Bar Chart Placeholder]</div>
      </section>

      <section className="dashboard-table">
        <h3>Detailed Forecast</h3>
        <div className="table-placeholder">
          [Table: Product | Forecasted Revenue | Units | Error Margin]
        </div>
      </section>
    </div>
  );
}

export default ForecastDashboard;
