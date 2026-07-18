import React from "react";

function BookDetails() {
  const books = [
    {
      id: 1,
      title: "React Basics",
      author: "John",
      price: 500,
    },
    {
      id: 2,
      title: "Java Programming",
      author: "James",
      price: 650,
    },
  ];

  return (
    <div>
      <h2>Book Details</h2>

      {books.map((book) => (
        <div key={book.id}>
          <p><b>Title:</b> {book.title}</p>
          <p><b>Author:</b> {book.author}</p>
          <p><b>Price:</b> ₹{book.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BookDetails;