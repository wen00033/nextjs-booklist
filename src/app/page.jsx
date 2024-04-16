function Home() {
  return (
    <div>
      <h1>Welcome to Benjamin's page</h1>
      <ul className="homepage">
        <li>
          1. It should be a single page with book details, the main page should
          have a book list showing book name, price, category and a delete
          button at the end for each book. There should be an add button at the
          top so the user can add a book.
        </li>
        <code>
          Book list load from data.js array, add into redux store. export
          deleteBook function to filter out selected book.
        </code>
        <li>
          2. Once you click the add a book button, it should popup a page, let
          the user add a book ( name, price, category and description ).
        </li>
        <code>
          Popup up page achieve by using next.js Parallel route with
          Intercepting routes together. Finally use conditional render addNew
          page in Layout.
        </code>
        <li>
          3. The book should be clickable, if the user clicks the book, it will
          show a popup page, letting the user be able to modify the book name,
          price, category and description. After modification: the book details
          should be updated in the main page.
        </li>
        <code>
          create input filed load book detail from redux store, update book with
          updateBook function.
        </code>
        <li>
          4. Once clicked delete button, the book should be deleted from the
          main page
        </li>
      </ul>
    </div>
  );
}

export default Home;
