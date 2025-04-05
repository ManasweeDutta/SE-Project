import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import SummaryCards from '../components/SummaryCards';
import Charts from '../components/Charts';
import Alerts from '../components/Alerts';
import { FaChartLine, FaFileInvoice, FaMoneyBillWave, FaShieldAlt, FaBell } from 'react-icons/fa';

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('bg-dark', 'text-light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <div className="container">
        <Alerts />
        <SummaryCards income={12000} expenses={8000} />
        <Charts />

        {/* Features Section */}
        <div className="mt-5">
          <h2 className="mb-4">💼 Key Features</h2>
          <div className="row g-4">
            <FeatureCard icon={<FaChartLine size={30} />} title="Profit & Loss (P&L) Reports" description="Generate audit-ready reports. Filter by date or category." />
            <FeatureCard icon={<FaFileInvoice size={30} />} title="Invoice & Billing Management" description="Create, manage, and send professional invoices quickly." />
            <FeatureCard icon={<FaMoneyBillWave size={30} />} title="Sales & Expense Tracking" description="Monitor cash flow with categorized, real-time entries." />
            <FeatureCard icon={<FaShieldAlt size={30} />} title="Audit Report Generation" description="Highlight discrepancies. Export reports to PDF/CSV/Excel." />
            <FeatureCard icon={<FaBell size={30} />} title="Regulatory Compliance Alerts" description="Stay ahead of tax deadlines. Track via compliance calendar." />
          </div>
        </div>
      </div>
    </>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="col-md-4">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <div className="d-flex align-items-center mb-2">
            <div className="me-2 text-primary">{icon}</div>
            <h5 className="card-title mb-0">{title}</h5>
          </div>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
}
