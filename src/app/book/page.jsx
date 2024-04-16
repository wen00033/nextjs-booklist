"use client";
import { useSelector } from "react-redux";
import Book from "@/components/Book";
function BookPage() {
  const bookList = useSelector((state) => state.bookList.book);
  return (
    <div>
      <ul className="list-book-container">
        {bookList.map((book) => (
          <Book key={book.id} data={book} />
        ))}
      </ul>
    </div>
  );
}

export default BookPage;
