import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const dummyNotifications = [
  {
    id: 1,
    book_id: 101,
    book_title: "The Great Gatsby",
    book_author: "F. Scott Fitzgerald",
    is_read: false,
    notify_date: "2025-11-17",
  },
  {
    id: 2,
    book_id: 102,
    book_title: "1984",
    book_author: "George Orwell",
    is_read: true,
    notify_date: "2025-11-15",
  },
  {
    id: 3,
    book_id: 103,
    book_title: "To Kill a Mockingbird",
    book_author: "Harper Lee",
    is_read: false,
    notify_date: "2025-11-14",
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(dummyNotifications);

  const markRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, is_read: true } : n
      )
    );
  };

  const markUnread = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, is_read: false } : n
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="m-4">
      <section>
        <h3 className="fw-semibold">
          <i className="bi bi-bell"></i> Book Notifications
        </h3>
      </section>

      <section className="my-3">
        {notifications.length === 0 && (
          <p className="text-muted fw-bold">No notifications</p>
        )}

        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`card notification mb-3 shadow-sm ${
              !notif.is_read ? "border-1 border-danger" : ""
            } position-relative`}
          >
            {!notif.is_read && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">
                <i className="bi bi-exclamation"></i>
              </span>
            )}

            <div className="card-body">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-8">
                  <p className="mb-0 d-inline text-dark">
                    The book{" "}
                    <span className="fw-semibold">{notif.book_title}</span> by{" "}
                    <span className="fw-semibold">{notif.book_author}</span>{" "}
                    notified from{" "}
                    <span className="fw-semibold">
                      {formatDate(notif.notify_date)}
                    </span>{" "}
                    is now available!
                  </p>
                </div>

                <div className="col-md-3 d-flex justify-content-between align-items-center flex-shrink-0 gap-2 mt-2 mt-md-0">
                  <a
                    href={`#reserve-book-${notif.book_id}`}
                    className="btn btn-sm btn-success"
                  >
                    Reserve Now
                  </a>

                  <div className="d-flex gap-2 flex-column">
                    {!notif.is_read ? (
                      <button
                        onClick={() => markRead(notif.id)}
                        className="btn btn-success btn-sm"
                      >
                        <i className="bi bi-envelope-open"></i> Mark as Read
                      </button>
                    ) : (
                      <button
                        onClick={() => markUnread(notif.id)}
                        className="btn btn-danger btn-sm"
                      >
                        <i className="bi bi-envelope"></i> Mark as Unread
                      </button>
                    )}

                    <button
                      onClick={() => deleteNotification(notif.id)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="bi bi-trash"></i> Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Notifications;
