export default function TransactionTable({ data }) {
    return (
      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {data.map((tx, index) => (
            <tr key={index}>
              <td>{tx.amount}</td>
              <td>{tx.category}</td>
              <td>{tx.receipt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  