function AddNew() {
  return (
    <>
      <div className="add-new-container">
        <form action="submit">
          <label htmlFor="title">title :</label>
          <input type="text" />
          <label htmlFor="category">category :</label>
          <input type="text" />
          <label htmlFor="price">price :</label>
          <input type="number" />
          <label htmlFor="description">description :</label>
          <textarea type="text" />
        </form>
      </div>
    </>
  );
}

export default AddNew;
