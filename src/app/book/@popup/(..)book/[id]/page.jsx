import Popup from "@/components/Popup";
import data from "@/utils/data";

export async function getStaticPaths() {
  const paths = data.map((book) => ({
    params: { id: book.id.toString() },
  }));
  return { paths, fallback: true };
}

function BookPagePopup({ params }) {
  if (!params) return;
  const id = params.id;
  const book = data.find((book) => book.id === +id);
  return (
    <Popup>
      <div className="book-detail-container">
        <h1>{book.book_name}</h1>
        <span className="category">{book.category}</span>
        <p className="price">Price: ${book.price}</p>
        <dl>
          <dt>Description:</dt>
          <dd>{book.description}</dd>
        </dl>
      </div>
    </Popup>
  );
}

export default BookPagePopup;
