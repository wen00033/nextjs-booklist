import Link from "next/link";
import books from "../../utils/data";
import Book from "@/components/Book";

function BookPage() {
  return (
    <div>
      <Link href={"/book/addNew"}>
        <button>Add New Book ❤️</button>
      </Link>
      <ul className="list-book-container">
        {books.map((book) => (
          <Book key={book.id} data={book} />
        ))}
      </ul>
    </div>
  );
}

export default BookPage;
