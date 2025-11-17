import React, { useEffect, useState } from "react";
import booksData from "../assets/books.json"; // your JSON file
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Styles.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("default");
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const filteredBooks = books
    .filter((book) => (showUnavailable ? true : book.available_copies > 0))
    .filter((book) => {
      const query = searchQuery.toLowerCase();
      const dataText = [
        book.title,
        book.description,
        book.author,
        book.publisher,
        book.publication_year,
        book.isbn,
        book.genre,
        book.language,
        book.available_copies,
      ]
        .join(" ")
        .toLowerCase();
      return dataText.includes(query);
    })
    .sort((a, b) => {
      switch (filter) {
        case "newest":
          return new Date(b.created_at) - new Date(a.created_at);
        case "oldest":
          return new Date(a.created_at) - new Date(b.created_at);
        case "a_z":
          return a.title.localeCompare(b.title);
        case "z_a":
          return b.title.localeCompare(a.title);
        case "most_available_copies":
          return b.available_copies - a.available_copies;
        case "least_available_copies":
          return a.available_copies - b.available_copies;
        default:
          return 0;
      }
    });

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <main className="m-3">
      <section>
        <div className="row d-flex justify-content-between align-items-center gap-3">
          <h3 className="col-12 col-lg-4 fw-semibold">
            List of {showUnavailable ? "Unavailable" : "Available"} Books
          </h3>
          <div className="col-12 col-lg-6 d-flex align-items-center gap-3">
            <div className="d-flex align-items-center gap-1 ms-lg-auto">
              <i className="bi bi-filter fs-4 fw-bold text-muted"></i>
              <select
                className="form-select w-auto"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="a_z">A → Z</option>
                <option value="z_a">Z → A</option>
                <option value="most_available_copies">Most Available Copies</option>
                <option value="least_available_copies">Least Available Copies</option>
              </select>
            </div>
            <div className="position-relative search-container">
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="position-absolute top-50 start-0 translate-middle-y ps-3 text-muted">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="d-inline-block bg-secondary mt-3 mt-lg-0 px-2 py-1 rounded">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              checked={showUnavailable}
              onChange={() => setShowUnavailable(!showUnavailable)}
            />
            <label className="form-check-label text-white">
              Show Unavailable Books
            </label>
          </div>
        </div>
      </section>

      <section className="mx-2 my-4 mx-lg-2 mt-4">
        <div className="books row row-cols-2 row-cols-md-4 row-cols-lg-6 gx-3 gy-4">
          {filteredBooks.length === 0 && (
            <p className="text-muted fw-bold">No books available</p>
          )}
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="book d-flex flex-column align-items-center"
              onClick={() => handleBookClick(book)}
            >
              <div className="book-image position-relative p-3">
                {book.image ? (
                  <img src={book.image} alt={book.title} className="rounded" />
                ) : (
                  <p className="m-auto text-muted">No Image</p>
                )}
              </div>
              <h6 className="book-title text-center link-primary mt-2">
                {book.title}
              </h6>
              <div>
                {book.available_copies > 0 ? (
                  <button className="btn btn-sm btn-success px-5">Reserve</button>
                ) : (
                  <button className="btn btn-sm btn-danger px-3">Notify Me</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
          
      {/* Book Modal */}
      {showModal && selectedBook && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content rounded-4 shadow">
              <div className="modal-header border-0">
                <h5 className="modal-title w-100 text-center fw-bold">
                  BOOK INFORMATION
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <div className="row">
                  <div className="col-12 col-lg-4 my-auto text-center">
                    {selectedBook.image && (
                      <img
                        src={selectedBook.image}
                        alt={selectedBook.title}
                        className="img-fluid rounded shadow-sm mx-auto mb-3"
                      />
                    )}
                    <div>
                      {selectedBook.available_copies > 0 ? (
                        <button className="btn btn-sm btn-success px-5">Reserve</button>
                      ) : (
                        <button className="btn btn-sm btn-danger px-3">Notify Me</button>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <table className="book-information-table table table-borderless table-hover text-start">
                      <tbody>
                        {Object.entries(selectedBook)
                          .filter(([key]) => key !== "image")
                          .map(([key, value]) => (
                            <tr key={key}>
                              <th>{key.replace(/_/g, " ").toUpperCase()}:</th>
                              <td>{value}</td>
                            </tr>
                        ))}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
