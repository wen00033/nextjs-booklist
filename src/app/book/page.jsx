"use client";

import books from "../../utils/data";
import Book from "@/components/Book";

function BookPage() {
  return (
    <div>
      <ul className="list-book-container">
        {books.map((book) => (
          <Book key={book.id} data={book} />
        ))}
      </ul>
    </div>
  );
}

export default BookPage;
