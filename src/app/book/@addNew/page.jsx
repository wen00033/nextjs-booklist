"use client";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addBook } from "@/lib/booklist/bookSlice";

function AddNew() {
  const router = useRouter();
  const dispatch = useDispatch();
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
    e.preventDefault();
    dispatch(addBook(bookDetail));
    router.push("/book");
  }
  return (
    <>
      <div className="add-new-container">
        <form action="submit">
          <label htmlFor="title">title :</label>
          <input onChange={HandleChange} name="book_name" type="text" />
          <label htmlFor="category">category :</label>
          <input onChange={HandleChange} name="category" type="text" />
          <label htmlFor="price">price :</label>
          <input onChange={HandleChange} name="price" type="number" />
          <label htmlFor="description">description :</label>
          <textarea onChange={HandleChange} name="description" type="text" />
          <button onClick={HandleSubmit}>Add New Book🙂</button>
        </form>
      </div>
    </>
  );
}

export default AddNew;
