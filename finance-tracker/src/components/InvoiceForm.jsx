export default function InvoiceForm() {
    return (
      <form>
        <input className="form-control mb-2" placeholder="Client Name" />
        <input className="form-control mb-2" placeholder="Amount" type="number" />
        <input className="form-control mb-2" type="date" />
        <input type="file" className="form-control mb-2" />
        <button className="btn btn-primary">Create Invoice</button>
      </form>
    );
  }
  