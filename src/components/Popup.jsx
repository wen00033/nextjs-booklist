"use client";
import { useRouter } from "next/navigation";
function Popup({ children }) {
  const router = useRouter();
  function leaveHandler() {
    router.back();
  }

  return (
    <div onClick={leaveHandler} className="overlay fadeIn">
      <div className="popup-container slideIn ">{children}</div>
    </div>
  );
}

export default Popup;
