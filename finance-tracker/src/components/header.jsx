import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Header({ darkMode, toggleTheme }) {
  const [dateTime, setDateTime] = useState(new Date());

  // Update date/time every second
  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm mb-4`}>
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#">📊 Finance Tracker</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Navigation Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavItem label="P&L Reports" />
            <NavItem label="Invoices" />
            <NavItem label="Sales & Expenses" />
            <NavItem label="Audit Reports" />
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input className="form-control me-2" type="search" placeholder="Search..." />
            <button className="btn btn-outline-primary" type="submit">
              <FaSearch />
            </button>
          </form>

          {/* DateTime + Theme Toggle */}
          <div className="d-flex align-items-center gap-3">
            <span className="text-muted small">{dateTime.toLocaleString()}</span>
            <button
              className={`btn btn-sm ${darkMode ? 'btn-light' : 'btn-dark'}`}
              onClick={toggleTheme}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ label }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">{label}</a>
    </li>
  );
}
