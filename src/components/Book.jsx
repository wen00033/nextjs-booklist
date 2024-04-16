import Link from "next/link";
function Book({ data }) {
  return (
    <>
      <div className="book-container">
        <Link href={`/book/${data.id}`}>
          <h3>{data.book_name} </h3>
        </Link>
        <span className="category">{data.category}</span>
        <p className="price">${data.price}</p>
        <button>❌</button>
      </div>
    </>
  );
}

export default Book;
