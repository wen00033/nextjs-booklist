function Popup({ children }) {
  return (
    <>
      <div className="overlay"></div>
      <div className="popup-container slideIn ">{children}</div>;
    </>
  );
}

export default Popup;
