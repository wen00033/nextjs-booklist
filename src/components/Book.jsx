"use client";
import { useDispatch } from "react-redux";
import { deleteBook } from "@/lib/booklist/bookSlice";
import Link from "next/link";
function Book({ data }) {
  const dispatch = useDispatch();
  function deleteHandler(id) {
    dispatch(deleteBook(id));
  }
  return (
    <>
      <div className="book-container">
        <Link href={`/book/${data.id}`}>
          <h3>{data.book_name} </h3>
        </Link>
        <span className="category">{data.category}</span>
        <p className="price">${data.price}</p>
        <button
          className="book-delete-button"
          onClick={() => deleteHandler(data.id)}
        >
          ❌
        </button>
      </div>
    </>
  );
}

export default Book;
