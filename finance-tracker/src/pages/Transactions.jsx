import TransactionForm from '../components/TransactionForm';
import TransactionTable from '../components/TransactionTable';
import { useState } from 'react';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    const form = e.target;
    const newTx = {
      amount: form.amount.value,
      category: form.category.value,
      receipt: form.receipt.files[0]?.name || '',
    };
    setTransactions([...transactions, newTx]);
    form.reset();
  };

  return (
    <div className="container mt-4">
      <TransactionForm onSubmit={handleAddTransaction} />
      <TransactionTable data={transactions} />
    </div>
  );
}
