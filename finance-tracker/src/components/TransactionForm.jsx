export default function TransactionForm({ onSubmit }) {
    return (
      <form onSubmit={onSubmit}>
        <input type="number" name="amount" className="form-control mb-2" placeholder="Amount" required />
        <select name="category" className="form-control mb-2">
          <option>Rent</option>
          <option>Salaries</option>
          <option>Supplies</option>
        </select>
        <input type="file" name="receipt" className="form-control mb-2" />
        <button type="submit" className="btn btn-primary">Add Transaction</button>
      </form>
    );
  }
  