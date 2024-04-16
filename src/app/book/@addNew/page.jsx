function AddNewBook() {
  return (
    <>
      <div className="overlay fadeIn"></div>
      <div className="popup-container form-container slideIn">
        <div className="add-new-container">
          <form action="submit">
            <label htmlFor="title">title :</label>
            <input type="text" />
            <label htmlFor="category">category :</label>
            <input type="text" />
            <label htmlFor="price">price :</label>
            <input type="text" />
            <label htmlFor="description">description :</label>
            <textarea type="text" />
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewBook;
