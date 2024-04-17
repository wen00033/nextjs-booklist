"use client";
import Popup from "@/components/Popup";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { updateBook } from "@/lib/booklist/bookSlice";

function BookPagePopup({ params }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookList.book);
  if (!params) return;
  const id = params.id;
  const book = bookList.find((book) => book.id == id);
  const [bookDetail, setBookDetail] = useState(book);

  function leaveHandler() {
    router.back();
  }
  function HandleChange(e) {
    setBookDetail({ ...bookDetail, [e.target.name]: e.target.value });
  }

  function HandleSubmit() {
    dispatch(updateBook(bookDetail));
    router.back(); // router.back();
  }

  return (
    <Popup>
      <div className="book-detail-container">
        <span onClick={leaveHandler} className="close-button">
          ❌
        </span>
        <form className="book-detail-container-form">
          <label htmlFor="title">title</label>
          <input
            name="book_name"
            type="text"
            onChange={HandleChange}
            value={bookDetail.book_name}
          />
          <label htmlFor="category">category</label>
          <input
            type="text"
            name="category"
            onChange={HandleChange}
            value={bookDetail.category}
          />
          <label htmlFor="price">price</label>
          <input
            type="number"
            name="price"
            onChange={HandleChange}
            value={bookDetail.price}
          />
          <label htmlFor="description">description</label>
          <textarea
            name="description"
            onChange={HandleChange}
            value={bookDetail.description}
          />
        </form>
        <button onClick={HandleSubmit}>Modify this book🫡</button>
      </div>
    </Popup>
  );
}

export default BookPagePopup;
