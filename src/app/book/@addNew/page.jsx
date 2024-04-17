"use client";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addBook } from "@/lib/booklist/bookSlice";

function AddNew() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  const [bookDetail, setBookDetail] = useState({
    id: crypto.randomUUID(),
  });
  function HandleChange(e) {
    setBookDetail({ ...bookDetail, [e.target.name]: e.target.value });
  }

  function HandleSubmit(e) {
    if (Object.keys(bookDetail).length < 5) {
      alert("Please fill all the fields");
      return;
    }
    dispatch(addBook(bookDetail));
    setDisable(true);
  }
  return (
    <>
      <div className="add-new-container">
        <form action="submit">
          <label htmlFor="title">title :</label>
          <input
            disabled={disable}
            onChange={HandleChange}
            name="book_name"
            type="text"
          />
          <label htmlFor="category">category :</label>
          <input
            disabled={disable}
            onChange={HandleChange}
            name="category"
            type="text"
          />
          <label htmlFor="price">price :</label>
          <input
            disabled={disable}
            onChange={HandleChange}
            name="price"
            type="number"
          />
          <label htmlFor="description">description :</label>
          <textarea
            disabled={disable}
            onChange={HandleChange}
            name="description"
            type="text"
          />
        </form>
        <button disabled={disable} onClick={HandleSubmit}>
          Add New Book🙂
        </button>
      </div>
    </>
  );
}

export default AddNew;
