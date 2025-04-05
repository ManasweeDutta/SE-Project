export default function SummaryCards({ income, expenses }) {
    return (
      <div className="row">
        <div className="col-md-6">
          <div className="card bg-success text-white p-3 mb-3">
            <h5>Total Income</h5>
            <p>${income}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-danger text-white p-3 mb-3">
            <h5>Total Expenses</h5>
            <p>${expenses}</p>
          </div>
        </div>
      </div>
    );
  }
  