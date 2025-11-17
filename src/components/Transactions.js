import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Tab, Tabs, Button, Form } from "react-bootstrap";

const dummyTransactions = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    status: "Reserved",
    reserveDate: "2025-11-01",
    borrowDate: "2025-11-05",
    returnDate: "2025-11-12",
    dueDate: "2025-11-19",
    notes: "",
    fineAmount: 0,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    status: "Borrowed",
    reserveDate: "2025-10-20",
    borrowDate: "2025-10-22",
    returnDate: "2025-11-01",
    dueDate: "2025-11-08",
    notes: "",
    fineAmount: 0,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    status: "Overdue",
    reserveDate: "2025-10-10",
    borrowDate: "2025-10-12",
    returnDate: "2025-10-20",
    dueDate: "2025-10-27",
    notes: "Slight damage on cover",
    fineAmount: 50,
  },
];

const TransactionCard = ({ transaction, onShow }) => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Reserved":
        return "bg-warning text-dark";
      case "Borrowed":
        return "bg-success text-white";
      case "Returned":
        return "bg-primary text-white";
      case "Overdue":
        return "bg-danger text-white";
      case "Cancelled":
        return "bg-secondary text-white";
      default:
        return "bg-light text-dark";
    }
  };

  return (
    <div
      className="card shadow-sm rounded-4 mb-3 cursor-pointer"
      onClick={() => onShow(transaction)}
    >
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h6 className="mb-0">
            {transaction.title} by <span className="fw-semibold">{transaction.author}</span>
          </h6>
          <small>Borrow: {transaction.borrowDate} | Return: {transaction.returnDate}</small>
        </div>
        <div>
          {transaction.status === "Overdue" && (
            <small className="d-block text-danger">Fine: ₱{transaction.fineAmount}</small>
          )}
          <span className={`badge ${getStatusBadge(transaction.status)}`}>
            {transaction.status}
          </span>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const [transactions, setTransactions] = useState(dummyTransactions);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleShow = (transaction) => {
    setSelectedTransaction(transaction);
    setShowModal(true);
  };

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.author.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || t.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="container my-4">
      <h3 className="mb-3">Transactions</h3>
      <div className="mb-3 d-flex justify-content-between">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Form.Select
          className="w-auto"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Reserved</option>
          <option>Borrowed</option>
          <option>Returned</option>
          <option>Overdue</option>
          <option>Cancelled</option>
        </Form.Select>
      </div>

      <Tabs defaultActiveKey="Reserved" className="mb-3">
        {["Reserved", "Borrowed", "Returned", "Overdue", "Cancelled", "History"].map((status) => (
          <Tab eventKey={status} title={status} key={status}>
            {status === "History"
              ? filteredTransactions.length === 0
                ? <p className="text-center text-muted mt-3">No transactions available.</p>
                : filteredTransactions.map((t) => (
                    <TransactionCard key={t.id} transaction={t} onShow={handleShow} />
                  ))
              : filteredTransactions.filter((t) => t.status === status).length === 0
                ? <p className="text-center text-muted mt-3">No transactions available.</p>
                : filteredTransactions
                    .filter((t) => t.status === status)
                    .map((t) => <TransactionCard key={t.id} transaction={t} onShow={handleShow} />)
            }
          </Tab>
        ))}
      </Tabs>


      {/* Transaction Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Transaction Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedTransaction && (
            <table className="table table-borderless">
              <tbody>
                <tr>
                  <th>Book Title:</th>
                  <td>{selectedTransaction.title}</td>
                </tr>
                <tr>
                  <th>Author:</th>
                  <td>{selectedTransaction.author}</td>
                </tr>
                <tr>
                  <th>Reserve Date:</th>
                  <td>{selectedTransaction.reserveDate}</td>
                </tr>
                <tr>
                  <th>Borrow Date:</th>
                  <td>{selectedTransaction.borrowDate}</td>
                </tr>
                <tr>
                  <th>Return Date:</th>
                  <td>{selectedTransaction.returnDate}</td>
                </tr>
                <tr>
                  <th>Due Date:</th>
                  <td>{selectedTransaction.dueDate}</td>
                </tr>
                <tr>
                  <th>Notes:</th>
                  <td>{selectedTransaction.notes || "N/A"}</td>
                </tr>
                <tr>
                  <th>Fine Amount:</th>
                  <td>{selectedTransaction.fineAmount || 0}</td>
                </tr>
                <tr>
                  <th>Status:</th>
                  <td>{selectedTransaction.status}</td>
                </tr>
              </tbody>
            </table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Transactions;
