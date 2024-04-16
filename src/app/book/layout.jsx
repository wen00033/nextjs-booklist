"use client";
import { useState } from "react";

function Layout({ children, popup, addNew }) {
  const [show, setShow] = useState(false);
  function showHandler() {
    setShow(!show);
  }

  return (
    <>
      <button onClick={showHandler}>Add New Book ❤️</button>
      {children}
      {popup}

      {show && (
        <div
          onClick={showHandler}
          className={`overlay  ${show ? "fadeIn" : "fadeOut"}`}
        ></div>
      )}
      {show && (
        <div
          className={`popup-container form-container ${
            show ? "slideIn" : "slideOut"
          }  `}
        >
          {addNew}
        </div>
      )}
    </>
  );
}

export default Layout;
