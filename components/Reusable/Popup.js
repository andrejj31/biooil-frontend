import React, { useState, useEffect } from "react";

export default function Popup(props) {
  const { isOpen, title, msg, type } = props.popup;
  const [show, setShow] = useState(isOpen);
  useEffect(() => {
    console.log(isOpen, title);
    console.log(type);
    setShow(isOpen);
  }, [isOpen]);

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
    props.setPopup({ ...props.popup, isOpen: false });
    console.log(type);
  };
  return (
    <div
      className="overlay"
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="popup">
        {type === "success" ? (
          <img className="popup__img" src="/Popup/success.png" alt="" />
        ) : (
          <img className="popup__img" src="/Popup/fail.png" alt="" />
        )}
        <div className="popup__msg">
          <h3>{title}</h3>
          <p>{msg}</p>
        </div>
        <button
          onClick={handleClose}
          className={`popup__cta basic-cta basic-cta-round ${
            type === "fail" ? "popup__cta-fail" : ""
          }`}
        >
          Затвори
        </button>
      </div>
    </div>
  );
}
